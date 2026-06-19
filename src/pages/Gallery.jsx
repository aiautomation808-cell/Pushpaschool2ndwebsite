import { useState, useEffect, useCallback } from 'react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { galleryImages, img } from '../data/images.js'

export default function Gallery() {
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(() => {
    setActive((cur) => (cur === null ? null : (cur + 1) % galleryImages.length))
  }, [])
  const prev = useCallback(() => {
    setActive((cur) => (cur === null ? null : (cur - 1 + galleryImages.length) % galleryImages.length))
  }, [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next, prev])

  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="Gallery"
        title="Moments From Campus Life"
        subtitle="A glimpse into the everyday joy, learning and celebration at Pushpa School."
        image={img.campusAir}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {galleryImages.map((g, i) => (
              <Reveal key={`${g.src}-${i}`} delay={(i % 3) * 80}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label={`View ${g.caption}`}
                >
                  <div className="aspect-[4/3] w-full bg-slate-100">
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm font-semibold text-white">{g.caption}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Image viewer">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm animate-scaleIn" onClick={close} />
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-3 sm:right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <figure className="relative max-w-5xl max-h-[85vh] animate-scaleIn">
            <img
              src={galleryImages[active].full}
              alt={galleryImages[active].caption}
              className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm font-medium text-white">
              {galleryImages[active].caption} <span className="text-slate-400">· {active + 1} / {galleryImages.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}
