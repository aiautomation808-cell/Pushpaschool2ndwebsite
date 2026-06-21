import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { img } from '../data/images.js'

const tiles = [
  {
    to: '/mandatory-disclosure',
    title: 'Mandatory Public Disclosure',
    desc: 'Statutory information and documents published in compliance with CBSE affiliation bye-laws — including affiliation letters, safety certificates, fee structure, results and staff details.',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
  },
  {
    to: '/committee',
    title: 'School Committees',
    desc: 'Faculty members entrusted with coordinating academic, cultural, disciplinary and administrative functions throughout the academic session.',
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.479m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  },
  {
    to: '/stars-of-pushpa',
    title: 'Stars of Pushpa',
    desc: 'Celebrating our young achievers across art, craft, literature, music and stage performance in inter-house and inter-class competitions.',
    icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  },
]

const messages = [
  { to: '/news', title: 'Christmas Message', desc: 'A reflective Christmas message from the Principal on peace, hope and goodwill.' },
  { to: '/news', title: 'Discipline and Modern Life', desc: 'On cultivating self-discipline as the cornerstone of a fulfilled modern life.' },
  { to: '/news', title: 'Youth Power: Wasted or Channelised?', desc: 'An essay on directing youthful energy toward purpose and nation-building.' },
  { to: '/news', title: 'Towards 21st Century', desc: 'Perspectives on preparing students for the challenges of a new century.' },
  { to: '/news', title: 'Why This Rage and Revenge?', desc: 'A thoughtful reflection on overcoming violence with compassion and understanding.' },
]

export default function CbseInfo() {
  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="Information"
        title="CBSE Information"
        subtitle="Statutory disclosures, committee structure and reflections from the Principal — all in one place."
        image={img.education}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="mb-2 text-2xl font-bold text-primary-900">Key Documents & Information</h2>
          <p className="mb-10 max-w-2xl text-slate-600">Browse the major statutory and informational sections of the school below.</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {tiles.map((tile, i) => (
            <Reveal key={tile.to} delay={Math.min(i * 0.1, 0.2)}>
              <Link
                to={tile.to}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-100">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d={tile.icon} /></svg>
                </span>
                <h3 className="mb-2 text-lg font-bold text-primary-900">{tile.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">{tile.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 group-hover:text-primary-800">
                  View details
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl bg-slate-50 p-8 sm:p-10">
            <h2 className="mb-2 text-2xl font-bold text-primary-900">From the Principal's Desk</h2>
            <p className="mb-8 max-w-2xl text-slate-600">Reflections and messages from Fr. Melvin C.J. on education, character and the times we live in.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {messages.map((m) => (
                <Link
                  key={m.title}
                  to={m.to}
                  className="group flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-50 text-gold-600 transition-colors group-hover:bg-gold-100">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.073 0 3.95.642 5.5 1.735A8.987 8.987 0 0117 18c1.046 0 2.045.18 3 .512V4.262A8.967 8.967 0 0017 3.75c-1.048 0-2.062.18-3 .512v2.78z" /></svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">{m.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
