import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { img } from '../data/images.js'

const committees = [
  { name: 'Staff Representatives', members: ['Mr. Amit Runwal', 'Mrs. Monika Israni'] },
  { name: 'Academic Committee', members: ['Sr. Divya', 'Mr. Shaju Mathew', 'Mr. Sahayaraj', 'Mr. Chander'] },
  { name: 'Assembly Committee', members: ['Fr. P. Soosai', 'Sr. Divya', 'Mr. Sunimon', 'Mr. Babu K.K.'] },
  { name: 'Celebration Committee', members: ['Sr. Divya', 'Mrs. Dainy', 'Sr. Lilly', 'Sr. Sheela', 'Mrs. Shoba', 'Mrs. Stella Mary', 'Mrs. Bindu Soni', 'Mrs. Nigy'] },
  { name: 'Discipline Committee', members: ['Mr. Rakesh Bajpai', 'Mrs. Nanda Bhatnagar', 'Mr. Bharat', 'Mr. Sunimon', 'Mr. Sudhir', 'Mr. Raja', 'Mr. Nafees'] },
  { name: 'Literary Committee', members: ['Mr. Babu K.K.', 'Mrs. Gunja Dubey', 'Ms. Rakhi', 'Mrs. Jyoti Adgale', 'Mrs. Mini Cherian', 'Ms. Angelica Gupta', 'Mr. Bharat'] },
  { name: 'Notice Board', members: ['Mrs. Nohila Mary', 'Mrs. Margaret Mary', 'Mrs. Seema Saman', 'Ms. Poonam Sahu', 'Ms. Angelica Gupta', 'Ms. Marceline'] },
  { name: 'Cultural Committee', members: ['Fr. P. Soosai', 'Sr. Divya', 'Mrs. Nohila Mary', 'Mr. Harinarayan', 'Mr. Sunimon', 'Mrs. Seema Nagori', 'Mrs. Reva Tiwari', 'Mr. Babu K.K.', 'Mr. Sahayaraj'] },
  { name: 'Stage & Decoration', members: ['Mrs. Margaret Mary', 'Mrs. Nohila Mary', 'Mr. Sudhir', 'Mr. Raja Minj', 'Mr. Santosh Soni', 'Mrs. Nigy', 'Mrs. Stella', 'Ms. Erina Kujur', 'Ms. Marceline', 'Ms. Angelica Gupta', 'Ms. Sheetal', 'Ms. Poonam Sahu'] },
  { name: 'Choir In-charges', members: ['Sr. Lilly', 'Mr. Junas', 'Mr. Sahayaraj', 'Sr. Sheela', 'Ms. Marceline'] },
  { name: 'Commentators', members: ['Mrs. Dainy', 'Sr. Divya', 'Mrs. Nanda', 'Mrs. Nohila Mary'] },
  { name: 'Cabinet In-charges', members: ['Sr. Divya', 'Mr. Sunimon'] },
  { name: 'Infirmary In-charges', members: ['Ms. Purnima', 'Mrs. Francisca'] },
  { name: 'Band In-charges', members: ['Mr. Santosh Soni', 'Mr. Sudhir'] },
  { name: 'Quarterly Bulletin', members: ['Mrs. Nanda', 'Mrs. Seema Saman'] },
]

export default function Committee() {
  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="About Us"
        title="School Committees"
        subtitle="The faculty members entrusted with coordinating various academic, cultural and administrative functions of the school."
        image={img.teachers}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <p className="mb-10 max-w-3xl text-slate-600 leading-relaxed">
            For each academic session, the school appoints dedicated committees to ensure every aspect of school life — from academics and discipline to celebrations and stage management — runs smoothly. Below is the list of committees and their faculty in-charges.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {committees.map((c, i) => (
            <Reveal key={c.name} delay={Math.min(i * 0.05, 0.3)}>
              <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-200">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-100">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                  </span>
                  <h2 className="text-base font-bold text-primary-900 leading-snug">{c.name}</h2>
                </div>
                <ul className="space-y-1.5">
                  {c.members.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
