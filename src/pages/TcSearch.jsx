import { useState } from 'react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { img } from '../data/images.js'

const CSV_URL = 'https://docs.google.com/spreadsheets/d/1gLQH-9ZRc9bVwyut1STcN3xyT5xCYYHDR_fOal0eGt0/export?format=csv'

function parseCsv(text) {
  const rows = []
  let row = []
  let cell = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    const next = text[i + 1]

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"'
        i++
      } else if (ch === '"') {
        inQuotes = false
      } else {
        cell += ch
      }
      continue
    }

    if (ch === '"') {
      inQuotes = true
    } else if (ch === ',') {
      row.push(cell)
      cell = ''
    } else if (ch === '\n') {
      row.push(cell)
      rows.push(row)
      row = []
      cell = ''
    } else if (ch === '\r') {
      // ignore
    } else {
      cell += ch
    }
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell)
    rows.push(row)
  }

  return rows.filter((r) => r.some((c) => c.trim() !== ''))
}

const EMPTY_RESULT = { found: false, data: null }

export default function TcSearch() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [result, setResult] = useState(EMPTY_RESULT)
  const [fetchError, setFetchError] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    const term = query.trim().toLowerCase()
    if (!term) {
      setResult(EMPTY_RESULT)
      setStatus('done')
      return
    }

    setStatus('loading')
    setFetchError('')

    try {
      const res = await fetch(CSV_URL)
      if (!res.ok) throw new Error(`Failed to fetch data (${res.status})`)
      const text = await res.text()
      const rows = parseCsv(text)
      if (rows.length < 2) {
        throw new Error('No data available in the sheet.')
      }

      const header = rows[0].map((h) => h.trim().toLowerCase())
      const colIndex = (name) => {
        const keys = name.toLowerCase().split('/')
        return header.findIndex((h) => keys.some((k) => h.includes(k)))
      }

      const admissionIdx = colIndex('admission')
      const studentIdx = colIndex('student name/name')
      const fatherIdx = colIndex("father's name/father/father name")
      const tcIdx = colIndex('tc number/tc')
      const issueIdx = colIndex('issue date/date')

      const match = rows.slice(1).find((r) => {
        const val = (r[admissionIdx] || '').trim().toLowerCase()
        return val && val === term
      })

      if (match) {
        setResult({
          found: true,
          data: {
            admissionNo: (match[admissionIdx] || '').trim(),
            studentName: (match[studentIdx] || '').trim(),
            fatherName: (match[fatherIdx] || '').trim(),
            tcNumber: (match[tcIdx] || '').trim(),
            issueDate: (match[issueIdx] || '').trim(),
          },
        })
        setStatus('done')
      } else {
        setResult(EMPTY_RESULT)
        setStatus('done')
      }
    } catch (err) {
      setFetchError(err.message || 'Something went wrong while fetching records.')
      setResult(EMPTY_RESULT)
      setStatus('error')
    }
  }

  const reset = () => {
    setQuery('')
    setStatus('idle')
    setResult(EMPTY_RESULT)
    setFetchError('')
  }

  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="Transfer Certificate"
        title="Transfer Certificate (TC) Search"
        subtitle="Verify a student's Transfer Certificate quickly using their Admission Number."
        image={img.education}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-white p-8 md:p-10 ring-1 ring-slate-100 shadow-sm">
              <div className="text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">Search TC Records</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Enter the Admission Number exactly as issued to retrieve the Transfer Certificate details.
                </p>
              </div>

              <form onSubmit={handleSearch} className="mt-8">
                <label htmlFor="tc-admission" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Admission Number *
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </span>
                    <input
                      id="tc-admission"
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="e.g. PSH-2021-045"
                      className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 hover:shadow-md hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-sm"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Loading...
                      </>
                    ) : (
                      <>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        Search
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Search is case-insensitive and ignores extra spaces.
                </p>
              </form>

              {/* Results */}
              {status === 'done' && result.found && (
                <div className="mt-8 animate-scaleIn">
                  <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 bg-primary-900 px-6 py-4">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white">Transfer Certificate Found</h3>
                        <p className="text-xs text-blue-200">Record verified successfully</p>
                      </div>
                    </div>

                    <dl className="divide-y divide-slate-100 bg-white">
                      {[
                        { label: 'Admission No.', value: result.data.admissionNo },
                        { label: 'Student Name', value: result.data.studentName },
                        { label: "Father's Name", value: result.data.fatherName },
                        { label: 'TC Number', value: result.data.tcNumber },
                        { label: 'Issue Date', value: result.data.issueDate },
                      ].map((row) => (
                        <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-4">
                          <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">{row.label}</dt>
                          <dd className="sm:col-span-2 text-sm font-semibold text-slate-900">{row.value || '—'}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 transition-colors hover:bg-slate-50"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      Search Another
                    </button>
                  </div>
                </div>
              )}

              {status === 'done' && !result.found && (
                <div className="mt-8 animate-scaleIn flex items-start gap-3 rounded-xl bg-red-50 ring-1 ring-red-200 p-4">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-red-800">No record found for this Admission Number.</p>
                    <p className="text-sm text-red-700">Please contact the school office.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-8 animate-scaleIn flex items-start gap-3 rounded-xl bg-red-50 ring-1 ring-red-200 p-4">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-red-800">Could not load records.</p>
                    <p className="text-sm text-red-700">{fetchError} Please try again in a moment, or contact the school office.</p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
