import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal.jsx'
import { GlassCard } from '../components/GlassCard.jsx'
import { img } from '../data/images.js'

const features = [
  {
    title: 'Quality Education',
    desc: 'A rigorous academic curriculum delivered by experienced educators committed to excellence in every classroom.',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
  },
  {
    title: 'Holistic Development',
    desc: 'Sports, arts, leadership and life skills that nurture confident, balanced and well-rounded individuals.',
    icon: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0A3.5 3.5 0 0112 6a3.5 3.5 0 01-3.5 3.5 3.5 3.5 0 013.5 3.5zm0 0H9.128',
  },
  {
    title: 'Value-Based Learning',
    desc: 'Rooted in the motto "Love and Service", we build character, integrity and a sense of moral purpose.',
    icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
  },
]

const stats = [
  { value: '50+', label: 'Years of Excellence' },
  { value: '1000+', label: 'Students Nurtured' },
  { value: '69', label: 'Dedicated Teachers' },
]

export default function Home() {
  return (
    <div className="page-fade mesh-bg">
      {/* ─── Hero ─── */}
      <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${img.heroSchool})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-700/92 via-navy-800/85 to-forest-700/80" aria-hidden="true" />

        {/* Floating 3D orbs */}
        <div className="absolute top-1/4 right-10 h-40 w-40 rounded-full bg-gold-500/20 blur-3xl animate-pulseGlow" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-10 h-56 w-56 rounded-full bg-forest-400/20 blur-3xl animate-pulseGlow" aria-hidden="true" style={{ animationDelay: '2s' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full liquid-glass-dark px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Est. 1966 · Love and Service
            </span>
            <h1 className="mt-7 font-serif font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
              Pushpa School
            </h1>
            <p className="mt-3 font-serif text-xl sm:text-2xl font-medium text-shimmer">Love and Service</p>
            <p className="mt-6 max-w-xl text-lg text-cream-100/80 leading-relaxed font-sans">
              Where Excellence Meets Character. A legacy of value-based education nurturing minds and hearts since 1966.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-600 to-gold-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-gold-700/30 transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full liquid-glass-dark px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-1 active:scale-95"
              >
                Discover Pushpa
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <svg className="h-5 w-5 animate-floatY" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── Welcome glass card ─── */}
      <section className="relative -mt-20 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <GlassCard variant="light" className="p-8 md:p-14 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-50 ring-2 ring-gold-200">
                <svg className="h-8 w-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.073 0 3.95.642 5.5 1.735A8.987 8.987 0 0117 18c1.046 0 2.045.18 3 .512V4.262A8.967 8.967 0 0017 3.75c-1.048 0-2.062.18-3 .512v2.78z" />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 font-sans">Welcome</span>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-700 leading-tight">
                Where Excellence Meets Character
              </h2>
              <p className="mt-5 text-base sm:text-lg text-warmgrey-600 leading-relaxed max-w-3xl mx-auto font-sans">
                At Pushpa School, we believe education is the harmonious development of the mind, body and spirit.
                For over five decades, we have shaped generations of thoughtful, compassionate and capable individuals
                who carry forward our motto — Love and Service.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* ─── Features with 3D tilt cards ─── */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 font-sans">Why Pushpa School</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-navy-700">A Foundation That Lasts a Lifetime</h2>
            <p className="mt-4 text-warmgrey-500 leading-relaxed font-sans">
              Three pillars shape every Pushpa student's journey — academic depth, all-round growth, and strong moral grounding.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <GlassCard tilt variant="light" className="p-8 h-full group">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-forest-600 text-gold-400 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-7 font-serif text-xl font-bold text-navy-700">{f.title}</h3>
                  <p className="mt-3 text-warmgrey-500 leading-relaxed font-sans">{f.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats with dark glass ─── */}
      <section className="relative overflow-hidden mesh-bg-dark py-20 md:py-24">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${img.campusAir})` }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div>
                  <p className="font-serif font-bold text-5xl sm:text-6xl text-shimmer">{s.value}</p>
                  <p className="mt-3 text-base font-medium text-cream-100/70 tracking-wide font-sans">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl mesh-bg-dark px-8 py-16 md:px-16 md:py-24">
              {/* Floating orbs */}
              <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl animate-pulseGlow" aria-hidden="true" />
              <div className="absolute -left-12 -bottom-12 h-56 w-56 rounded-full bg-forest-400/20 blur-3xl animate-pulseGlow" aria-hidden="true" style={{ animationDelay: '1.5s' }} />

              <div className="relative max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 font-sans">Admissions Open</span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  Begin Your Child's Journey With Us
                </h2>
                <p className="mt-5 text-lg text-cream-100/80 leading-relaxed font-sans">
                  Admissions are open for the upcoming academic session. Join a community where every child is known, valued, and inspired to grow.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/admissions"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-600 to-gold-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-gold-700/30 transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full liquid-glass-dark px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-1 active:scale-95"
                  >
                    Schedule a Visit
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
