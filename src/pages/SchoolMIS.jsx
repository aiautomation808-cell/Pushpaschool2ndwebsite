import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { img, misPortalUrl } from '../data/images.js'

const features = [
  {
    title: 'Attendance',
    desc: 'Daily attendance tracking for students and staff, with class-wise summaries.',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Examinations',
    desc: 'Exam schedules, marks entry and report card generation for every assessment.',
    icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.351 1.5c-.242-.048-.486-.084-.73-.108A48.15 48.15 0 0012 4.5c-1.237 0-2.446.043-3.649.126-.244.024-.488.06-.73.108M6.75 6.75h.75v.75H6.75v-.75zM6.75 9h.75v.75H6.75V9zm0 2.25h.75v.75H6.75v-.75z',
  },
  {
    title: 'Fee Management',
    desc: 'Fee records, payment status and receipts for students and parents.',
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
  },
  {
    title: 'Student Records',
    desc: 'Centralised profiles with personal details, academic history and documents.',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  },
  {
    title: 'Notices & Circulars',
    desc: 'School-wide announcements and circulars shared instantly with the community.',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  },
  {
    title: 'Timetables',
    desc: 'Class and teacher schedules managed centrally and published for all.',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

const steps = [
  { step: '1', title: 'Visit the Portal', desc: 'Click the button below to open the official School MIS portal in a new tab.' },
  { step: '2', title: 'Sign In', desc: 'Enter the credentials provided by the school office for students, staff or parents.' },
  { step: '3', title: 'Access Records', desc: 'View attendance, results, fees and notices — all in one secure dashboard.' },
]

export default function SchoolMIS() {
  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="School MIS"
        title="School Management Information System"
        subtitle="A secure online portal for students, parents and staff to access academic and administrative records."
        image={img.library}
      />

      {/* Overview + CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Digital Campus</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Everything, in one place</h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                The School MIS brings day-to-day administration online — from attendance and examinations
                to fees and communication. Students and parents can track progress, while staff can manage
                records efficiently, all through a single secure portal maintained by the school.
              </p>
              <div className="mt-8">
                <a
                  href={misPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-800 hover:-translate-y-0.5 active:scale-95"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5m5 0v5" />
                  </svg>
                  Open School MIS Portal
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                You will be redirected to the official portal. Please use the login credentials issued by the school office.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((f, i) => (
                  <div
                    key={f.title}
                    className="group rounded-2xl bg-white p-6 ring-1 ring-slate-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-slate-900 text-sm">{f.title}</h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How to access */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Get Started</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">How to Access the Portal</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">Three simple steps to reach your school dashboard.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 120}>
                <div className="relative flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-slate-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-white font-bold shadow-sm">
                    {s.step}
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-12 text-center">
            <a
              href={misPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-gold-600 hover:-translate-y-0.5 active:scale-95"
            >
              Launch Portal
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Help */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-primary-900 p-8 md:p-12 text-center ring-1 ring-primary-800 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Need help with your login?</h2>
              <p className="mt-4 text-blue-100 leading-relaxed">
                If you have not received your portal credentials or are facing trouble signing in,
                please contact the school office during office hours and we will be glad to assist.
              </p>
              <a
                href="mailto:pushpaashta@yahoo.com"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 backdrop-blur transition-all hover:bg-white/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Contact School Office
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
