import { useId, useState } from 'react'
import ExperienceCarousel from './ExperienceCarousel'

const ROLE_PANELS = [
  { key: 'admin', title: 'Administrador' },
  { key: 'user', title: 'Usuario' },
]

const PLATFORM_OPTIONS = [
  { key: 'web', label: 'Versión web' },
  { key: 'mobile', label: 'Versión móvil' },
]

const DEFAULT_ROLES = ['admin', 'user']

function normalizeRoleGallery(gallery) {
  if (!gallery) return { admin: [], user: [], roles: DEFAULT_ROLES }
  if (Array.isArray(gallery)) {
    return { admin: gallery, user: [], roles: DEFAULT_ROLES }
  }
  return {
    admin: gallery.admin ?? [],
    user: gallery.user ?? [],
    roles: gallery.roles ?? DEFAULT_ROLES,
  }
}

function getSimpleImages(gallery) {
  if (Array.isArray(gallery)) return gallery
  if (gallery?.images) return gallery.images
  return []
}

function gallerySectionClass(emphasizeCaptures, extra = '') {
  return [
    'project-gallery',
    emphasizeCaptures && 'project-gallery--captures-focus',
    extra,
  ]
    .filter(Boolean)
    .join(' ')
}

function GalleryCaptureTrigger({
  title,
  count,
  open,
  panelId,
  onClick,
  emphasizeCaptures,
}) {
  const hasCaptures = count > 0

  return (
    <button
      type="button"
      className={[
        'gallery-panel-trigger',
        emphasizeCaptures && 'gallery-panel-trigger--cta',
        open && 'gallery-panel-trigger--open',
        emphasizeCaptures && hasCaptures && !open && 'gallery-panel-trigger--pulse',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-expanded={open}
      aria-controls={panelId}
      onClick={onClick}
    >
      <span className="gallery-panel-trigger-main">
        {emphasizeCaptures ? (
          <span className="gallery-panel-badge">Ver capturas</span>
        ) : null}
        <span className="gallery-panel-role">{title}</span>
        {emphasizeCaptures && hasCaptures && !open ? (
          <span className="gallery-panel-hint">Pulsa para desplegar</span>
        ) : null}
      </span>
      <span className="gallery-panel-meta">
        {hasCaptures
          ? `${count} captura${count === 1 ? '' : 's'}`
          : 'Sin capturas'}
      </span>
      <span className="gallery-panel-chevron" aria-hidden="true">
        {open ? '−' : '+'}
      </span>
    </button>
  )
}

function SimpleGalleryPanel({ images, projectName, emphasizeCaptures }) {
  const baseId = useId()
  const count = images.length

  if (count === 0) return null

  const [open, setOpen] = useState(false)
  const panelId = `${baseId}-capturas`

  return (
    <section
      className={gallerySectionClass(emphasizeCaptures)}
      aria-label={`Capturas de ${projectName}`}
    >
      {emphasizeCaptures ? (
        <p className="project-gallery-callout">
          <span className="project-gallery-callout-dot" aria-hidden="true" />
          Explora las pantallas del sistema
        </p>
      ) : (
        <p className="project-gallery-heading">Capturas del sistema</p>
      )}
      <article
        className={`gallery-panel${count > 0 ? ' gallery-panel--has-captures' : ''}`}
      >
        <h5 className="gallery-panel-title">
          <GalleryCaptureTrigger
            title="Capturas del sistema"
            count={count}
            open={open}
            panelId={panelId}
            onClick={() => setOpen((prev) => !prev)}
            emphasizeCaptures={emphasizeCaptures}
          />
        </h5>

        {open ? (
          <section id={panelId} className="gallery-panel-content">
            <ExperienceCarousel
              images={images}
              label={projectName}
              idSuffix="capturas"
            />
          </section>
        ) : null}
      </article>
    </section>
  )
}

function hasRoleImages(gallery, roles = DEFAULT_ROLES) {
  const { admin, user } = normalizeRoleGallery(gallery)
  return (
    (roles.includes('admin') && admin.length > 0) ||
    (roles.includes('user') && user.length > 0)
  )
}

function RolePanels({
  gallery,
  projectName,
  idSuffix = '',
  visibleRoles,
  emphasizeCaptures,
}) {
  const baseId = useId()
  const { admin, user, roles } = normalizeRoleGallery(gallery)
  const activeRoles = visibleRoles ?? roles
  const panels = { admin, user }

  const rolePanels = ROLE_PANELS.filter(({ key }) => activeRoles.includes(key))

  const hasAnyImage = admin.length > 0 || user.length > 0

  if (!hasAnyImage && rolePanels.length === 0) return null

  const [open, setOpen] = useState(() =>
    Object.fromEntries(rolePanels.map(({ key }) => [key, false])),
  )

  const toggle = (key) => {
    setOpen((prev) => {
      if (prev[key]) return { ...prev, [key]: false }
      return Object.fromEntries(
        rolePanels.map(({ key: k }) => [k, k === key]),
      )
    })
  }

  return (
    <>
      {rolePanels.map(({ key, title }) => {
        const images = panels[key]
        const count = images.length
        const panelId = `${baseId}-${idSuffix}-${key}`
        const isOpen = open[key]

        return (
          <article
            key={key}
            className={`gallery-panel${count > 0 ? ' gallery-panel--has-captures' : ''}`}
          >
            <h5 className="gallery-panel-title">
              <GalleryCaptureTrigger
                title={title}
                count={count}
                open={isOpen}
                panelId={panelId}
                onClick={() => toggle(key)}
                emphasizeCaptures={emphasizeCaptures}
              />
            </h5>

            {isOpen ? (
              <section id={panelId} className="gallery-panel-content">
                {count > 0 ? (
                  <ExperienceCarousel
                    images={images}
                    label={`${projectName} — ${title}`}
                    idSuffix={`${idSuffix}-${key}`}
                  />
                ) : (
                  <p className="gallery-empty">
                    Aún no hay capturas de {title.toLowerCase()} en este apartado.
                  </p>
                )}
              </section>
            ) : null}
          </article>
        )
      })}
    </>
  )
}

/**
 * Galería por rol (admin / usuario).
 * Lloyd-Asistencias: gallery con web y mobile (mismas rutas en /public).
 */
export default function ProjectGallery({
  gallery,
  projectName,
  platformToggle = false,
  simpleGallery = false,
  emphasizeCaptures = false,
}) {
  if (simpleGallery) {
    const images = getSimpleImages(gallery)
    return (
      <SimpleGalleryPanel
        images={images}
        projectName={projectName}
        emphasizeCaptures={emphasizeCaptures}
      />
    )
  }

  const isPlatformMode = platformToggle && gallery?.web != null

  const [platform, setPlatform] = useState('web')

  if (isPlatformMode) {
    const activeRaw = platform === 'mobile' ? gallery.mobile : gallery.web
    const activeGallery = normalizeRoleGallery(activeRaw ?? {})
    const visibleRoles = activeRaw?.roles

    const platformLabel =
      platform === 'mobile' ? 'Versión móvil' : 'Versión web'

    return (
      <section
        className={gallerySectionClass(emphasizeCaptures, 'project-gallery--platform')}
        aria-label={`Capturas de ${projectName}`}
      >
        <section className="project-gallery-header">
          {emphasizeCaptures ? (
            <p className="project-gallery-callout">
              <span className="project-gallery-callout-dot" aria-hidden="true" />
              Explora las pantallas del sistema
            </p>
          ) : (
            <p className="project-gallery-heading">Capturas del sistema</p>
          )}
          <nav
            className="platform-toggle"
            role="group"
            aria-label="Plataforma de capturas"
          >
            {PLATFORM_OPTIONS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`platform-toggle-btn${platform === key ? ' active' : ''}`}
                aria-pressed={platform === key}
                onClick={() => setPlatform(key)}
              >
                {label}
              </button>
            ))}
          </nav>
        </section>

        {hasRoleImages(activeGallery, visibleRoles ?? activeGallery.roles) ? (
          <RolePanels
            key={platform}
            gallery={activeGallery}
            projectName={`${projectName} — ${platformLabel}`}
            idSuffix={platform}
            visibleRoles={visibleRoles}
            emphasizeCaptures={emphasizeCaptures}
          />
        ) : (
          <p className="gallery-empty gallery-empty--platform">
            Aún no hay capturas de la {platformLabel.toLowerCase()}. Las rutas
            siguen en <code>/public/experiences/lloyd/asistencias/</code>.
          </p>
        )}
      </section>
    )
  }

  const roleGallery = normalizeRoleGallery(gallery)

  if (!hasRoleImages(roleGallery)) return null

  return (
    <section
      className={gallerySectionClass(emphasizeCaptures)}
      aria-label={`Capturas de ${projectName}`}
    >
      {emphasizeCaptures ? (
        <p className="project-gallery-callout">
          <span className="project-gallery-callout-dot" aria-hidden="true" />
          Explora las pantallas del sistema
        </p>
      ) : (
        <p className="project-gallery-heading">Capturas del sistema</p>
      )}
      <RolePanels
        gallery={roleGallery}
        projectName={projectName}
        emphasizeCaptures={emphasizeCaptures}
      />
    </section>
  )
}
