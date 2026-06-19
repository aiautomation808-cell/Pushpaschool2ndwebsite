import { useState } from 'react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Modal } from '../components/Modal.jsx'
import { img } from '../data/images.js'

const news = [
  {
    date: '24 July 2021',
    title: 'New Academic Session Begins',
    desc: 'New admission process started for the upcoming session. We welcomed a fresh batch of eager learners across grade levels, with refreshed classrooms and renewed energy all around campus.',
    excerpt: 'New admission process started for upcoming session.',
    image: img.studentsGroup,
  },
  {
    date: '15 June 2021',
    title: 'Annual Sports Day',
    desc: 'Students participated in various sports events with great enthusiasm and sportsmanship. From track races to team games, the day celebrated perseverance, teamwork and the spirit of fair play.',
    excerpt: 'Students participated in various sports events.',
    image: img.sports,
  },
  {
    date: '10 May 2021',
    title: 'Science Exhibition',
    desc: 'Incredible projects displayed by students at this year’s exhibition — from working models of renewable energy to creative biology displays, our young scientists shone bright.',
    excerpt: 'Incredible projects displayed by students.',
    image: img.scienceLab,
  },
]

const events = [
  { title: 'Annual Prize Giving', when: 'August 2026', desc: 'Celebrating the achievements and efforts of our students across academics, sports and the arts.', tag: 'Ceremony' },
  { title: 'Cultural Festival', when: 'September 2026', desc: 'A vibrant showcase of music, dance, drama and tradition — bringing our whole community together.', tag: 'Festival' },
  { title: 'Parent Meeting', when: 'October 2026', desc: 'An opportunity for parents and teachers to connect, share progress and plan together for every child.', tag: 'Meeting' },
]

export default function News() {
  const [activeNews, setActiveNews] = useState(null)

  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="News & Events"
        title="Stay Connected With Us"
        subtitle="Catch up on the latest happenings and mark your calendar for what’s ahead."
        image={img.education}
      />

      {/* Latest news */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">From the Campus</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Latest News</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">Stories and updates from across our school community.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={i * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img src={n.image} alt={n.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm">{n.date}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{n.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">{n.excerpt}</p>
                    <button
                      type="button"
                      onClick={() => setActiveNews(n)}
                      className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900"
                    >
                      Read More
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Save the Dates</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Upcoming Events</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">We look forward to welcoming students, parents and friends to these occasions.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">{e.tag}</span>
                    <span className="text-sm font-bold text-primary-700">{e.when}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{e.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{e.desc}</p>
                  <span className="mt-6 block h-1 w-12 rounded-full bg-gold-400 transition-all group-hover:w-20" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Modal open={activeNews !== null} onClose={() => setActiveNews(null)} title={activeNews?.title || ''} maxWidth="max-w-2xl">
        {activeNews && (
          <div>
            <img src={activeNews.image} alt={activeNews.title} className="h-56 w-full rounded-xl object-cover" />
            <div className="mt-5 flex items-center gap-3 text-sm">
              <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-700">{activeNews.date}</span>
            </div>
            <p className="mt-4 text-slate-600 leading-relaxed">{activeNews.desc}</p>
            <div className="mt-6 flex justify-end">
              <button type="button" onClick={() => setActiveNews(null)} className="rounded-lg bg-primary-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800">
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
