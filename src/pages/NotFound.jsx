import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-fade mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="font-bold text-7xl sm:text-8xl text-primary-800">404</p>
      <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600 leading-relaxed">The page you are looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 hover:-translate-y-0.5 active:scale-95">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>
    </div>
  )
}
