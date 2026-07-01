import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Logo } from './Logo.jsx'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News & Events' },
  { to: '/cbse-info', label: 'CBSE Info' },
  { to: '/contact', label: 'Contact' },
  { to: '/school-mis', label: 'School MIS' },
  { to: '/tc-search', label: 'TC Search' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const navClass = `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
    scrolled
      ? 'glass shadow-lg shadow-navy-700/10 py-1'
      : 'bg-transparent py-2'
  }`

  return (
    <header className={navClass}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={() => setOpen(false)}>
            <Logo className="h-9 w-9 lg:h-11 lg:w-11 transition-transform group-hover:scale-110 group-hover:rotate-3" />
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-base lg:text-lg text-navy-700">Pushpa School</span>
              <span className="text-[10px] lg:text-xs font-medium tracking-[0.2em] uppercase text-gold-600">Love and Service</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-gold-600'
                        : 'text-navy-700/80 hover:text-gold-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold-500 transition-all duration-300 ${
                          isActive ? 'w-2/3' : 'w-0 group-hover:w-1/2'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/admissions"
                className="ml-3 inline-flex items-center rounded-full bg-gradient-to-r from-gold-600 to-gold-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-gold-700/20 transition-all hover:shadow-lg hover:shadow-gold-700/30 hover:-translate-y-0.5 active:scale-95"
              >
                Apply Now
              </Link>
            </li>
          </ul>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-navy-700 hover:bg-white/20 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass mx-4 mb-4 rounded-2xl px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-gold-50 text-gold-700'
                    : 'text-navy-700 hover:bg-white/40'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="block rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 px-4 py-3 text-center text-base font-semibold text-white shadow-md mt-2"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  )
}
