import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { img, schoolContact, photo } from '../data/images.js'

const emblemSymbols = [
  { name: 'The Cross', desc: 'The Christian symbol for selfless love and sacrifice.' },
  { name: 'The Burning Lamp', desc: 'With its rays dispersing the darkness of ignorance and spreading the light of knowledge.' },
  { name: 'The Lotus Flower', desc: 'A symbol of purity and the unfolding of the soul towards truth and beauty.' },
  { name: 'The Motto', desc: '“Love and Service” — the guiding spirit of every Pushpa student.' },
]

export default function About() {
  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="About Us"
        title="A Legacy of Love and Service"
        subtitle="Since 1966, Pushpa School has devoted itself to forming individuals of integrity, knowledge and compassion."
        image={img.aboutBuilding}
      />

      {/* History */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Our Story</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">History of the School</h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  On the 23rd September 1966, Fr. Gauci and Fr. Mendonca left for Ashta. They met Dr. S.N. Gupta,
                  a catholic resident of Ashta who was very influential and due to his frequent tours to the villages
                  of the area knew the people and their needs intimately.
                </p>
                <p>
                  Moved by a shared desire to serve, the foundation of Pushpa School was laid — a place where children
                  from all walks of life could receive a quality education grounded in moral values. Over the decades,
                  the school has grown from a humble beginning into one of the region's most respected institutions.
                </p>
                <p>
                  Today, more than fifty years later, that founding spirit of love and service continues to guide
                  every classroom, every celebration, and every interaction within our walls.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src={img.aboutBuilding}
                  alt="Pushpa School building"
                  loading="lazy"
                  className="h-72 w-full rounded-2xl object-cover shadow-lg ring-1 ring-slate-200"
                />
                <img
                  src={img.aboutStudents}
                  alt="Students of Pushpa School"
                  loading="lazy"
                  className="mt-8 h-72 w-full rounded-2xl object-cover shadow-lg ring-1 ring-slate-200"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl bg-white p-8 md:p-10 ring-1 ring-slate-100 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1 1 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178a1 1 0 010 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">Vision</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Towards Integral Maturity and Holistic Development of Students for Building an Egalitarian Society
                  and progressive Nation founded on Sound Moral Principles and Gospel.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-2xl bg-white p-8 md:p-10 ring-1 ring-slate-100 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">Mission</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  To provide a nurturing environment where every student is empowered to grow intellectually,
                  emotionally and spiritually — becoming a responsible citizen who lives by the values of love,
                  service and lifelong learning.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Our Aim</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">The Objectives</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              To help the students build in themselves an integrated national character and imbibe love and
              appreciation for the diverse national culture of the country.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <img
              src={img.aboutTeachers}
              alt="Teachers and students"
              loading="lazy"
              className="mx-auto h-64 w-full max-w-3xl rounded-2xl object-cover shadow-lg ring-1 ring-slate-200"
            />
          </Reveal>
        </div>
      </section>

      {/* Principal's Desk */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-white p-8 md:p-12 ring-1 ring-slate-100 shadow-sm">
              <div className="grid gap-8 md:grid-cols-3 md:items-center">
                <div className="md:col-span-1 text-center">
                  <div className="relative mx-auto h-56 w-48 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 to-primary-950 shadow-lg ring-4 ring-white">
                    <img
                      src={photo.principalDesk}
                      alt={`${schoolContact.principal}, Principal`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-950/90 to-transparent p-3">
                      <h3 className="text-sm font-bold text-white">{schoolContact.principal}</h3>
                      <p className="text-xs font-medium text-gold-300">Principal</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">From the Principal's Desk</span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">A Commitment to Excellence</h2>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    We have been trying to achieve excellence in our efforts and endeavour during the current session
                    and we will continue to do so. Vince Lombardi once said, “The quality of a person's life is in
                    direct proportion to their commitment to excellence, regardless of their chosen field of endeavor.”
                  </p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    At Pushpa, we hold this truth close — nurturing every student to strive, to serve, and to grow
                    into individuals of strong character and gentle heart.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Emblem */}
      <section className="bg-primary-900 py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${img.aboutGraduation})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-primary-900/85" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
            <Reveal className="lg:col-span-2 text-center">
              <div className="mx-auto inline-flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-2xl shadow-black/30 ring-8 ring-white/10">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-primary-950">
                  <svg viewBox="0 0 64 64" className="h-20 w-20" aria-hidden="true">
                    <path d="M32 8 L46 16 V32 L32 40 L18 32 V16 Z" fill="none" stroke="#f59e0b" strokeWidth="2" />
                    <path d="M32 40 L32 52" stroke="#f59e0b" strokeWidth="2" />
                    <path d="M44 28 q6 -2 4 6" stroke="#fcd34d" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <p className="mt-6 font-serif text-2xl italic text-gold-300">Love and Service</p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold-300">Symbol of Our Spirit</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">School Emblem</h2>
              <p className="mt-4 text-blue-100 leading-relaxed">
                The school Emblem contains: a Cross, a Burning Lamp with its rays, a Lotus Flower and the
                motto “Love and Service”. The Cross is the Christian symbol for selfless love.
              </p>
              <ul className="mt-8 space-y-4">
                {emblemSymbols.map((s) => (
                  <li key={s.name} className="flex gap-4">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold-400" />
                    <div>
                      <h4 className="font-semibold text-white">{s.name}</h4>
                      <p className="text-sm text-blue-100 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
