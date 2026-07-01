import { Link } from 'react-router-dom'
import { Logo } from './Logo.jsx'
import { SocialIcons } from './SocialIcons.jsx'
import { schoolContact } from '../data/images.js'

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News & Events' },
  { to: '/cbse-info', label: 'CBSE Info' },
  { to: '/mandatory-disclosure', label: 'Mandatory Disclosure' },
  { to: '/committee', label: 'Committees' },
  { to: '/stars-of-pushpa', label: 'Stars of Pushpa' },
  { to: '/contact', label: 'Contact' },
  { to: '/school-mis', label: 'School MIS' },
  { to: '/tc-search', label: 'TC Search' },
]

export function Footer() {
  return (
    <footer className="mesh-bg-dark text-cream-100 relative overflow-hidden">
      {/* Decorative gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="h-11 w-11" variant="footer" />
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-lg text-white">{schoolContact.shortName}</span>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold-400">Love and Service</span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-cream-100/60 leading-relaxed font-sans">
              Pushpa Senior Secondary School, Ashta — a legacy of value-based education since 1966.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 font-sans">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-cream-100/70 hover:text-gold-400 transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 font-sans">Contact</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-cream-100/70">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <span>{schoolContact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.2a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.5 1.2l-1.6.8a11 11 0 005.3 5.3l.8-1.6a1 1 0 011.2-.5l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
                </svg>
                <span>{schoolContact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{schoolContact.email}</span>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 font-sans">Follow Us</h3>
            <p className="mt-5 text-sm text-cream-100/60">Stay connected with the Pushpa School community.</p>
            <div className="mt-4">
              <SocialIcons />
            </div>
            <Link
              to="/admissions"
              className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-gold-600 to-gold-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gold-700/20 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              Apply for Admission
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream-100/50">© 2026 {schoolContact.name}. All Rights Reserved.</p>
          <p className="text-xs text-cream-100/40 tracking-wider">Love and Service · Est. 1966</p>
        </div>
      </div>
    </footer>
  )
}
