export function PageHeader({ title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-900/70" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="page-fade max-w-3xl">
          {breadcrumb && (
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gold-300">{breadcrumb}</p>
          )}
          <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-blue-100 leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
