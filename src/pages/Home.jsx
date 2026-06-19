import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal.jsx'
import { img } from '../data/images.js'

const features = [
  {
    title: 'Quality Education',
    desc: 'A rigorous academic curriculum delivered by experienced educators committed to excellence in every classroom.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    ),
  },
  {
    title: 'Holistic Development',
    desc: 'Sports, arts, leadership and life skills that nurture confident, balanced and well-rounded individuals.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0A3.5 3.5 0 0112 6a3.5 3.5 0 01-3.5 3.5 3.5 3.5 0 013.5 3.5zm0 0H9.128" />
    ),
  },
  {
    title: 'Value-Based Learning',
    desc: 'Rooted in the motto "Love and Service", we build character, integrity and a sense of moral purpose.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    ),
  },
]

const stats = [
  { value: '50+', label: 'Years of Experience' },
  { value: '1000+', label: 'Students' },
  { value: '50+', label: 'Teachers' },
]

export default function Home() {
  return (
    <div className="page-fade">
      {/* Hero */}
      <section className="relative isolate min-h-[88vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${img.heroSchool})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-slate-900/85" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300 ring-1 ring-inset ring-white/20 backdrop-blur">
              Est. 1966 · Love and Service
            </span>
            <h1 className="mt-6 font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Pushpa School
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-medium text-gold-300">Love and Service</p>
            <p className="mt-6 max-w-xl text-lg text-blue-100 leading-relaxed">
              Welcome to Pushpa School — Where Excellence Meets Character. A legacy of value-based education nurturing minds and hearts since 1966.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-gold-900/20 transition-all hover:bg-gold-600 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-inset ring-white/30 backdrop-blur transition-all hover:bg-white/20 hover:-translate-y-0.5 active:scale-95"
              >
                Discover Pushpa
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
      </section>

      {/* Welcome */}
      <section className="relative -mt-16 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-2xl bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-100 p-8 md:p-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Welcome</span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Where Excellence Meets Character
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              At Pushpa School, we believe education is the harmonious development of the mind, body and spirit.
              For over five decades, we have shaped generations of thoughtful, compassionate and capable individuals
              who carry forward our motto — Love and Service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Why Pushpa School</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">A Foundation That Lasts a Lifetime</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Three pillars shape every Pushpa student's journey — academic depth, all-round growth, and strong moral grounding.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="group h-full rounded-2xl bg-white p-8 ring-1 ring-slate-100 shadow-sm shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                      {f.icon}
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-primary-900 py-16 md:py-20">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${img.campusAir})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-primary-900/80" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div>
                  <p className="font-bold text-4xl sm:text-5xl text-gold-400">{s.value}</p>
                  <p className="mt-2 text-base sm:text-lg font-medium text-blue-100">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 px-8 py-14 md:px-16 md:py-20">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Begin Your Child's Journey With Us</h2>
              <p className="mt-4 text-lg text-blue-100 leading-relaxed">
                Admissions are open for the upcoming academic session. Join a community where every child is known, valued, and inspired to grow.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-gold-600 hover:-translate-y-0.5 active:scale-95"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-inset ring-white/30 backdrop-blur transition-all hover:bg-white/20 hover:-translate-y-0.5 active:scale-95"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
