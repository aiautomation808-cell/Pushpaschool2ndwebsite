import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Modal } from '../components/Modal.jsx'
import { GlassCard } from '../components/GlassCard.jsx'
import { PrincipalAvatar } from '../components/PrincipalAvatar.jsx'
import { img } from '../data/images.js'

const steps = [
  { title: 'Submit Application Form', desc: 'Complete the application form online or collect it from the school office.' },
  { title: 'Student Interview', desc: "An informal interaction to understand the child's interests and readiness." },
  { title: 'Document Verification', desc: 'Submit and verify required documents such as previous records and ID.' },
  { title: 'Fee Payment', desc: 'Pay the admission and first-term fees as per the published fee structure.' },
  { title: 'Enrollment', desc: 'Receive your enrollment details and welcome kit. Welcome to the Pushpa family!' },
]

const eligibility = [
  {
    grade: 'Primary (Grade 1–5)',
    age: '5–10 years',
    points: ['Basic literacy readiness', 'Interaction with parents and child', 'Previous school record (if any)'],
  },
  {
    grade: 'Middle (Grade 6–8)',
    age: '11–13 years',
    points: ['Passing certificate from previous grade', 'Subject assessment in core areas', 'Character certificate'],
  },
  {
    grade: 'Secondary (Grade 9–10)',
    age: '14–15 years',
    points: ['Transfer certificate from previous school', 'Entrance assessment', 'Previous academic performance'],
  },
]

const feeStructure = [
  { grade: 'Grade 1–5', admission: '₹ 8,000', tuition: '₹ 18,000 / yr', other: '₹ 4,000' },
  { grade: 'Grade 6–8', admission: '₹ 10,000', tuition: '₹ 22,000 / yr', other: '₹ 5,000' },
  { grade: 'Grade 9–10', admission: '₹ 12,000', tuition: '₹ 28,000 / yr', other: '₹ 6,000' },
]

const initialForm = { name: '', age: '', grade: '', parentName: '', phone: '', email: '' }

export default function Admissions() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Student name is required'
    if (!form.age.trim()) e.age = 'Age is required'
    else if (isNaN(form.age) || +form.age < 3 || +form.age > 18) e.age = 'Enter a valid age (3–18)'
    if (!form.grade) e.grade = 'Please select a grade level'
    if (!form.parentName.trim()) e.parentName = 'Parent name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[+\d][\d\s-]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  const closeModal = () => {
    setOpen(false)
    setTimeout(() => {
      setForm(initialForm)
      setErrors({})
      setSubmitted(false)
    }, 250)
  }

  const inputBase = 'w-full rounded-xl border bg-white/70 backdrop-blur-md px-4 py-3 text-sm text-navy-900 placeholder-warmgrey-400 transition-all focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent'
  const ok = 'border-slate-300'
  const bad = 'border-burgundy-400 focus:ring-burgundy-400'

  return (
    <div className="page-fade mesh-bg">
      <PageHeader
        breadcrumb="Admissions"
        title="Admissions Open"
        subtitle="A clear, supportive admissions process — designed around your child and your family."
        image={img.admissions}
      />

      {/* ─── Principal welcome with cursor-tracking avatar ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 font-sans">A Personal Welcome</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-navy-700 leading-tight">
                Meet Your Principal
              </h2>
              <p className="mt-5 text-lg text-warmgrey-500 leading-relaxed font-sans">
                At Pushpa School, every admission begins with a personal connection. Our Principal, Fr. Melvin C.J.,
                welcomes you to our community. Move your cursor — he's watching.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600 ring-1 ring-gold-200">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-700 font-serif">Personal Interaction</h3>
                    <p className="text-sm text-warmgrey-500 mt-1">Every family meets the Principal before enrollment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600 ring-1 ring-gold-200">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-700 font-serif">Guided Process</h3>
                    <p className="text-sm text-warmgrey-500 mt-1">We walk you through every step — no confusion, no pressure.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative flex justify-center">
                {/* Glass platform */}
                <div className="absolute bottom-0 h-32 w-72 rounded-full bg-gold-500/10 blur-2xl" aria-hidden="true" />
                <GlassCard variant="gold" className="relative p-8 pb-4">
                  <PrincipalAvatar className="w-64 h-80 mx-auto" />
                  <div className="text-center mt-2">
                    <p className="font-serif font-bold text-navy-700 text-lg">Fr. Melvin C.J.</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600 font-sans">Principal</p>
                  </div>
                </GlassCard>
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 liquid-glass rounded-full px-4 py-2 text-xs font-semibold text-navy-700 shadow-lg animate-floatY">
                  Move your cursor!
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 font-sans">Step by Step</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-navy-700">Admission Process</h2>
            <p className="mt-4 text-warmgrey-500 leading-relaxed font-sans">Five simple steps from application to enrollment.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="h-full">
                <GlassCard tilt variant="light" className="relative h-full p-6 group">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-forest-600 text-gold-400 font-serif font-bold text-lg shadow-lg transition-transform group-hover:scale-110">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-serif font-bold text-navy-700 text-sm sm:text-base leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-warmgrey-500 leading-relaxed font-sans">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <span className="hidden md:block absolute -right-3.5 top-7 text-gold-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  )}
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Eligibility ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 font-sans">Who Can Apply</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-navy-700">Eligibility Criteria</h2>
            <p className="mt-4 text-warmgrey-500 leading-relaxed font-sans">Requirements vary by grade level. Please review the criteria relevant to your child.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {eligibility.map((c, i) => (
              <Reveal key={c.grade} delay={i * 120}>
                <GlassCard tilt variant="light" className="h-full p-8 group">
                  <h3 className="font-serif text-xl font-bold text-navy-700">{c.grade}</h3>
                  <p className="mt-1 text-sm font-semibold text-gold-600 font-sans">{c.age}</p>
                  <ul className="mt-6 space-y-3">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-warmgrey-500 leading-relaxed font-sans">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Download form CTA ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl mesh-bg-dark px-8 py-12 md:px-14 md:py-16">
              <div className="absolute -right-12 -bottom-12 h-56 w-56 rounded-full bg-gold-500/20 blur-3xl animate-pulseGlow" aria-hidden="true" />
              <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 font-sans">Get Started</span>
                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">Download Application Form</h2>
                  <p className="mt-4 text-cream-100/80 leading-relaxed font-sans">
                    Fill in your details below to receive the application form. Our admissions team will get in touch with the next steps.
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-gold-700/30 transition-all hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Request Application Form
                  </button>
                </div>
                <div className="hidden md:block">
                  <img src={img.admissions} alt="Admissions" loading="lazy" className="rounded-2xl object-cover shadow-2xl ring-1 ring-white/20" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Fee structure ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 font-sans">Transparent Pricing</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-navy-700">Fee Structure</h2>
            <p className="mt-4 text-warmgrey-500 leading-relaxed font-sans">Indicative annual fees by grade level. Detailed breakup available at the school office.</p>
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <GlassCard variant="light" className="overflow-hidden p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-navy-700 to-forest-600 text-white">
                      <th className="px-6 py-4 font-serif font-semibold">Grade Level</th>
                      <th className="px-6 py-4 font-serif font-semibold">Admission Fee</th>
                      <th className="px-6 py-4 font-serif font-semibold">Tuition</th>
                      <th className="px-6 py-4 font-serif font-semibold">Other Fees</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {feeStructure.map((row) => (
                      <tr key={row.grade} className="transition-colors hover:bg-gold-50/40">
                        <td className="px-6 py-4 font-semibold text-navy-700">{row.grade}</td>
                        <td className="px-6 py-4 text-warmgrey-600">{row.admission}</td>
                        <td className="px-6 py-4 text-warmgrey-600">{row.tuition}</td>
                        <td className="px-6 py-4 text-warmgrey-600">{row.other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="px-6 py-4 text-xs text-warmgrey-400 border-t border-slate-100 font-sans">
                Fees are indicative and subject to revision. Sibling concessions available. Contact the school office for the current schedule.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Modal form */}
      <Modal open={open} onClose={closeModal} title="Application Form Request" maxWidth="max-w-xl">
        {submitted ? (
          <div className="text-center py-6">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest-50 text-forest-600 ring-4 ring-forest-100">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h4 className="mt-5 font-serif text-xl font-bold text-navy-700">Request Received!</h4>
            <p className="mt-2 text-warmgrey-500 leading-relaxed font-sans">
              Thank you, {form.parentName || 'parent'}. Our admissions team will reach out to you shortly with the application form and next steps.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-navy-700 to-forest-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="af-name" className="mb-1.5 block text-sm font-medium text-navy-700 font-sans">Student Name *</label>
                <input id="af-name" name="name" value={form.name} onChange={handleChange} className={`${inputBase} ${errors.name ? bad : ok}`} placeholder="Full name" />
                {errors.name && <p className="mt-1 text-xs text-burgundy-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="af-age" className="mb-1.5 block text-sm font-medium text-navy-700 font-sans">Age *</label>
                <input id="af-age" name="age" value={form.age} onChange={handleChange} className={`${inputBase} ${errors.age ? bad : ok}`} placeholder="e.g. 9" />
                {errors.age && <p className="mt-1 text-xs text-burgundy-600">{errors.age}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="af-grade" className="mb-1.5 block text-sm font-medium text-navy-700 font-sans">Grade Applying For *</label>
              <select id="af-grade" name="grade" value={form.grade} onChange={handleChange} className={`${inputBase} ${errors.grade ? bad : ok}`}>
                <option value="">Select grade level</option>
                <option>Primary (Grade 1–5)</option>
                <option>Middle (Grade 6–8)</option>
                <option>Secondary (Grade 9–10)</option>
              </select>
              {errors.grade && <p className="mt-1 text-xs text-burgundy-600">{errors.grade}</p>}
            </div>
            <div>
              <label htmlFor="af-parent" className="mb-1.5 block text-sm font-medium text-navy-700 font-sans">Parent Name *</label>
              <input id="af-parent" name="parentName" value={form.parentName} onChange={handleChange} className={`${inputBase} ${errors.parentName ? bad : ok}`} placeholder="Parent / Guardian" />
              {errors.parentName && <p className="mt-1 text-xs text-burgundy-600">{errors.parentName}</p>}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="af-phone" className="mb-1.5 block text-sm font-medium text-navy-700 font-sans">Phone *</label>
                <input id="af-phone" name="phone" value={form.phone} onChange={handleChange} className={`${inputBase} ${errors.phone ? bad : ok}`} placeholder="+91 ..." />
                {errors.phone && <p className="mt-1 text-xs text-burgundy-600">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="af-email" className="mb-1.5 block text-sm font-medium text-navy-700 font-sans">Email *</label>
                <input id="af-email" name="email" type="email" value={form.email} onChange={handleChange} className={`${inputBase} ${errors.email ? bad : ok}`} placeholder="you@example.com" />
                {errors.email && <p className="mt-1 text-xs text-burgundy-600">{errors.email}</p>}
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
              <button type="button" onClick={closeModal} className="rounded-full px-5 py-2.5 text-sm font-semibold text-navy-700 ring-1 ring-inset ring-slate-300 transition-colors hover:bg-slate-50">
                Cancel
              </button>
              <button type="submit" className="rounded-full bg-gradient-to-r from-gold-600 to-gold-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
                Submit Request
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  )
}
