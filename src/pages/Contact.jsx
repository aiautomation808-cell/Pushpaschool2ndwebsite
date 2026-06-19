import { useState } from 'react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SocialIconsLight } from '../components/SocialIcons.jsx'
import { schoolContact, img } from '../data/images.js'

const contactInfo = [
  { label: 'School Name', value: schoolContact.name, icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01' },
  { label: 'Address', value: schoolContact.address, icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' },
  { label: 'Phone', value: schoolContact.phone, icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' },
  { label: 'Email', value: schoolContact.email, icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
]

const initial = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[+\d][\d\s-]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Please enter your message'
    else if (form.message.trim().length < 10) e.message = 'Message is too short'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSent(true)
    setForm(initial)
  }

  const inputBase = 'w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
  const ok = 'border-slate-300'
  const bad = 'border-red-400 focus:ring-red-400'

  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="Contact"
        title="Get In Touch With Us"
        subtitle="We’d love to hear from you — whether you’re a prospective parent, alumna or community partner."
        image={img.contactCampus}
      />

      {/* Contact info */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white p-7 text-center ring-1 ring-slate-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                      <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-500">{c.label}</h3>
                  <p className="mt-2 text-base font-semibold text-slate-900 break-words">{c.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office hours + Principal */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-slate-100 shadow-sm text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Office Hours</h3>
              <p className="mt-2 text-base font-semibold text-slate-900">{schoolContact.officeHours}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-slate-100 shadow-sm text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Principal Meeting</h3>
              <p className="mt-2 text-base font-semibold text-slate-900">{schoolContact.principalMeeting}</p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-slate-100 shadow-sm text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Fax</h3>
              <p className="mt-2 text-base font-semibold text-slate-900">{schoolContact.fax}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-slate-50 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl bg-white p-8 md:p-10 ring-1 ring-slate-100 shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">Message Us</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Contact Form</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">Fill in the form and we’ll get back to you usually within 1–2 working days.</p>

                {sent && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-green-50 ring-1 ring-green-200 p-4 animate-scaleIn">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <div>
                      <p className="font-semibold text-green-800">Message sent!</p>
                      <p className="text-sm text-green-700">Thank you for reaching out. We will respond shortly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-slate-700">Name *</label>
                      <input id="cf-name" name="name" value={form.name} onChange={handleChange} className={`${inputBase} ${errors.name ? bad : ok}`} placeholder="Your name" />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email *</label>
                      <input id="cf-email" name="email" type="email" value={form.email} onChange={handleChange} className={`${inputBase} ${errors.email ? bad : ok}`} placeholder="you@example.com" />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-slate-700">Phone *</label>
                      <input id="cf-phone" name="phone" value={form.phone} onChange={handleChange} className={`${inputBase} ${errors.phone ? bad : ok}`} placeholder="+91 ..." />
                      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="cf-subject" className="mb-1.5 block text-sm font-medium text-slate-700">Subject *</label>
                      <input id="cf-subject" name="subject" value={form.subject} onChange={handleChange} className={`${inputBase} ${errors.subject ? bad : ok}`} placeholder="What is this about?" />
                      {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-slate-700">Message *</label>
                    <textarea id="cf-message" name="message" rows="5" value={form.message} onChange={handleChange} className={`${inputBase} ${errors.message ? bad : ok} resize-none`} placeholder="Write your message..." />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-primary-800 hover:shadow-md hover:-translate-y-0.5 active:scale-95">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col gap-6">
                <div className="overflow-hidden rounded-3xl ring-1 ring-slate-100 shadow-sm">
                  <iframe
                    title="Pushpa Senior Secondary School location — Ashta, Madhya Pradesh"
                    src="https://www.google.com/maps?q=Ashta,Sehore,Madhya%20Pradesh,India&output=embed"
                    width="100%"
                    height="380"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="rounded-3xl bg-primary-900 p-8 text-white ring-1 ring-primary-800 shadow-sm">
                  <h3 className="text-xl font-bold">Follow Our Community</h3>
                  <p className="mt-2 text-blue-100 text-sm leading-relaxed">Stay connected with {schoolContact.shortName} on social media for the latest news, photos and stories.</p>
                  <div className="mt-5">
                    <SocialIconsLight />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
