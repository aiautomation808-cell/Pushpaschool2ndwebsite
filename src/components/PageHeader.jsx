export function PageHeader({ title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-700/92 via-navy-800/85 to-forest-700/80" aria-hidden="true" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-10 h-32 w-32 rounded-full bg-gold-500/15 blur-3xl animate-pulseGlow" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-10 h-40 w-40 rounded-full bg-forest-400/15 blur-3xl animate-pulseGlow" aria-hidden="true" style={{ animationDelay: '2s' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="page-fade max-w-3xl">
          {breadcrumb && (
            <span className="inline-flex items-center gap-2 rounded-full liquid-glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              {breadcrumb}
            </span>
          )}
          <h1 className="mt-5 font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-cream-100/80 leading-relaxed font-sans">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
