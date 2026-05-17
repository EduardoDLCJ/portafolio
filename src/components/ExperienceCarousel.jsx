import { useCallback, useEffect, useState } from 'react'

/**
 * Carrusel de galería para experiencia laboral.
 *
 * Usado dentro de ProjectGallery (admin / user).
 * Cada imagen: { src, alt?, description }
 */

export default function ExperienceCarousel({ images, label, idSuffix = '' }) {
  const [index, setIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const total = images?.length ?? 0
  const current = images[index]

  const goTo = useCallback(
    (next) => {
      setIndex((prev) => (prev + next + total) % total)
    },
    [total],
  )

  useEffect(() => {
    setIndex(0)
  }, [images])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen])

  if (total === 0) return null

  const slug = `${label}-${idSuffix}`.replace(/\s+/g, '-').toLowerCase()
  const carouselId = slug.replace(/[^a-z0-9-]/g, '')

  return (
    <section
      className="experience-carousel"
      aria-roledescription="carrusel"
      aria-label={`Galería de ${label}`}
    >
      <figure className="carousel-frame">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt ?? current.description}
          className="carousel-image"
          loading="lazy"
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'low'}
          onClick={() => setIsFullscreen(true)}
          title="Ver en pantalla completa"
        />

        {total > 1 ? (
          <>
            <button
              type="button"
              className="carousel-control prev"
              onClick={() => goTo(-1)}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className="carousel-control next"
              onClick={() => goTo(1)}
              aria-label="Imagen siguiente"
            >
              ›
            </button>
            <span className="carousel-counter" aria-live="polite">
              {index + 1} / {total}
            </span>
          </>
        ) : null}
      </figure>

      <figcaption className="carousel-caption">
        <p className="carousel-caption-label">Descripción</p>
        <p
          className="carousel-caption-text"
          id={`${carouselId}-desc`}
          aria-live="polite"
        >
          {current.description}
        </p>
      </figcaption>

      {total > 1 ? (
        <nav className="carousel-dots" aria-label="Seleccionar imagen">
          {images.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              className={`carousel-dot${i === index ? ' active' : ''}`}
              aria-current={i === index ? 'true' : undefined}
              aria-controls={`${carouselId}-desc`}
              aria-label={`Imagen ${i + 1} de ${total}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </nav>
      ) : null}

      {isFullscreen && (
        <div className="lightbox" onClick={() => setIsFullscreen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close" 
              onClick={() => setIsFullscreen(false)}
              aria-label="Cerrar pantalla completa"
            >
              ×
            </button>
            <img 
              src={current.src} 
              alt={current.alt ?? current.description} 
              className="lightbox-image" 
            />
          </div>
        </div>
      )}
    </section>
  )
}
