import { useEffect, useState } from 'react'
import './App.css'
import ProjectGallery from './components/ProjectGallery'
import ScrollReveal from './components/ScrollReveal'

const profile = {
  name: 'Carlos Eduardo De La Cruz Juárez',
  location: 'Tlajomulco de Zúñiga, Jal.',
  phone: '523329608527',
  phoneHref: 'tel:+523329608527',
  email: 'ojjkd27@gmail.com',
  headline:
    'Egresado de Ingeniería en Desarrollo y Gestión de Software · desarrollo web, móvil e IoT',
  summary:
    'Experiencia en el desarrollo de aplicaciones web y móviles (Kotlin y React Native) y creación de APIs RESTful. Enfocado en crear soluciones eficientes, escalables y orientadas al usuario.',
  education: [
    {
      title: 'Ingeniería en Desarrollo y Gestión de Software',
      period: '2024 – 2026',
      org: 'UTZMG',
    },
    {
      title: 'TSU en Desarrollo y Gestión de Software',
      period: '2022 – 2024',
      org: 'UTZMG',
    },
  ],
  experiences: [
    {
      role: 'Desarrollador Full Stack',
      company: 'Lloyd Construcciones S.A.',
      period: 'Enero 2024 – marzo 2026',
      intro:
        'Desarrollo de productos internos para digitalizar operaciones de campo y administración.',
      projects: [
        {
          name: 'Lloyd-Gestión',
          stack: 'React Native · Node.js · MySQL',
          points: [
            'Sistema para el control y registro del uso de automóviles de la empresa.',
            'Módulo de registro de uso con captura de imágenes.',
            'Digitalización del flujo operativo, reduciendo procesos manuales.',
          ],
          // Capturas: /public/experiences/lloyd/gestion/ (mismas rutas en public)
          gallery: {
            admin: [
            {
              src: '/experiences/lloyd/gestion/1.png',
              alt: 'Login',
              description: 'Pantalla de inicio de sesión.',
            },
            {
              src: '/experiences/lloyd/gestion/2.png',
              alt: 'Home',
              description: 'Home para Administrador con opciones de gestión de autos, herramientas y usuarios.',
            },
            {
              src: '/experiences/lloyd/gestion/3.png',
              alt: 'Lista de autos',
              description: 'Lista de autos registrados en la empresa, también muestra el estado de cada auto.',
            },
            {
              src: '/experiences/lloyd/gestion/4.png',
              alt: 'Solicitud de uso de auto',
              description: 'Solicitud de uso de auto con opciones de aprobar, rechazar y gestionar.',
            },
            {
              src: '/experiences/lloyd/gestion/5.png',
              alt: 'Gestión de uso actual de auto',
              description: 'El administrador puede ver imágenes que haya subido el usuario, así como comentarios (opcionales), además el administrador asigna fechas de salida y llegada del auto.',
            },
            {
              src: '/experiences/lloyd/gestion/7.png',
              alt: 'Lista de herramientas',
              description: 'Lista de herramientas registradas en la empresa, también muestra el estado de cada herramienta.',
            },
            {
              src: '/experiences/lloyd/gestion/8.png',
              alt: 'Solicitud de uso de herramienta',
              description: 'Solicitud de uso de herramienta con opciones de aprobar, rechazar y gestionar.',
            },
            {
              src: '/experiences/lloyd/gestion/9.png',
              alt: 'Gestión de uso actual de herramienta',
              description: 'El administrador puede ver imágenes que haya subido el usuario, así como comentarios (opcionales), además el administrador asigna fechas de uso y devolución de la herramienta.',
            },
            {
              src: '/experiences/lloyd/gestion/10.png',
              alt: 'Lista de historico de uso de auto',
              description: 'El administrador puede ver el historico de uso de autos, con opciones de buscar por fecha, auto, etc.',
            },
            {
              src: '/experiences/lloyd/gestion/11.png',
              alt: 'Detalle de histórico de uso de auto',
              description: 'El administrador puede ver información de el historico de uso de auto, como fecha de salida, llegada, usuario, auto, etc.',
            }, 
            {
              src: '/experiences/lloyd/gestion/12.png',
              alt: 'Lista de historico de uso de herramienta',
              description: 'El administrador puede ver el historico de uso de herramientas, con opciones de buscar por fecha, herramienta, etc.',
            },
            ],
            user: [
              {
                src: '/experiences/lloyd/gestion/u1.png',
                alt: 'Menú de usuario',
                description: 'Menú de usuario con opciones de solicitar uso de auto, herramienta, etc.',
              },
              {
                src: '/experiences/lloyd/gestion/u3.png',
                alt: 'Solicitud de uso de auto',
                description: 'Solicitud de uso de auto donde al seleccionar un auto le despliega un menú para subir imágenes o tomar foto del auto.',
              },
              {
                src: '/experiences/lloyd/gestion/u4.png',
                alt: 'Gestión del uso de auto',
                description: 'El usuario puede agregar comentarios previos al uso del auto donde puede mencionar alguna falla o algo, a su vez de subir imágenes una vez que el administrador le conceda permiso para subir imágenes.',
              },
              {
                src: '/experiences/lloyd/gestion/u5.png',
                alt: 'Solicitud de uso de herramienta',
                description: 'Solicitud de uso de herramienta donde al seleccionar una herramienta le despliega un menú para subir imágenes o tomar foto de la herramienta.',
              },
              {
                src: '/experiences/lloyd/gestion/u6.png',
                alt: 'Gestión del uso de herramienta',
                description: 'El usuario puede agregar comentarios previos al uso de la herramienta donde puede mencionar alguna falla o algo, a su vez de subir imágenes una vez que el administrador le conceda permiso para subir imágenes.',
              },
            ],
          },
        },
        {
          name: 'Lloyd-Asistencias',
          stack: 'Vite/React · React Native · Node.js · MySQL',
          points: [
            'Módulo de asistencias (web y móvil) para personal en obra.',
            'Sistema para control de presupuesto de obras.',
            'Exportación de información a reportes Excel.',
            'Mejora del tiempo de registro y reporte de asistencias en un 70 %.',
          ],
          // Capturas: /public/experiences/lloyd/asistencias/ (mismas rutas en public)
          platformGallery: true,
          gallery: {
            web: {
              admin: [
            {
              src: '/experiences/lloyd/asistencias/1.png',
              alt: 'Login',
              description: 'Pantalla de inicio de sesión.',
            },
            {
              src: '/experiences/lloyd/asistencias/2.png',
              alt: 'Home',
              description: 'Home para Administrador con opciones de gestión de CRUDS, historial de gastos, calendario de asistencias, etc.',
            },
            {
              src: '/experiences/lloyd/asistencias/3.png',
              alt: 'CRUDS',
              description: 'Gestión de CRUDs de obreros, cuadrilla de obreros, usuarios, presupuestos (obras), etc.',
            },
            {
              src: '/experiences/lloyd/asistencias/6.png',
              alt: 'Historial de gastos',
              description: 'Historial de gastos donde el administrador puedes hacer una búsqueda con un rango de fecha personalizado y le mostrará el costo total de los obrerosen ese rango, con opción de desplegar más detalles.',
            },
            {
              src: '/experiences/lloyd/asistencias/7.png',
              alt: 'Calendario de asistencias',
              description: 'Calendario de asistencias donde el administrador puede ver el calendario de asistencias filtrada con un rango de fecha de 7 días.',
            },
            {
              src: '/experiences/lloyd/asistencias/8.png',
              alt: 'Calendario de asistencias',
              description: 'Muestra a los obreros separados por cuadrilla, los dias de la semana y que registro de incidencias tiene cada uno, además de opción de exportar a Excel.',
            },
              ],
              user: [
            {
              src: '/experiences/lloyd/asistencias/u1.png',
              alt: 'Lista de presupuestos (obras)',
              description: 'En este apartado el usuario puede ver los presupuestos (obras) que tiene asignado.',
            },
            {
              src: '/experiences/lloyd/asistencias/u2.png',
              alt: 'Calendario de asistencias',
              description: 'Calendario de asistencias donde el usuario puede ver los dias que ya marcó asistencia y los que no ha registrado incidencias.',
            },
            {
              src: '/experiences/lloyd/asistencias/u4.png',
              alt: 'Toma de asistencia',
              description: 'El usuario puede tomar las asistencias filtrando por obreros, donde desplega una lista donde puede seleccionar el estado de incidencia (asistencia, retardo, vacaciones, discapacidad, falta).',
            },
            {
              src: '/experiences/lloyd/asistencias/u3.png',
              alt: 'Editar registro de incidencia',
              description: 'El usuario puede editar el registro de incidencia donde puede seleccionar el estado de incidencia (asistencia, retardo, vacaciones, discapacidad, falta) y agregar nuevos registros de incidencias.',
            },
              ],
            },
            mobile: {
              roles: ['user'],
              user: [
                {
                  src: '/experiences/lloyd/asistencias/m1.png',
                  alt: 'Login',
                  description: 'Pantalla de inicio de sesión.',
                },
                {
                  src: '/experiences/lloyd/asistencias/m2.png',
                  alt: 'Lista de presupuestos (obras)',
                  description: 'En este apartado el usuario puede ver los presupuestos (obras) que tiene asignado.',
                },
                {
                  src: '/experiences/lloyd/asistencias/m3.png',
                  alt: 'Calendario de asistencias',
                  description: 'Calendario de asistencias donde el usuario puede ver los dias que ya marcó asistencia y los que no ha registrado incidencias.',
                },
                {
                  src: '/experiences/lloyd/asistencias/m4.png',
                  alt: 'Calendario de asistencias',
                  description: 'El usuario puede tomar las asistencias filtrando por obreros, donde desplega una lista donde puede seleccionar el estado de incidencia (asistencia, retardo, vacaciones, discapacidad, falta).',
                },
                {
                  src: '/experiences/lloyd/asistencias/m5.png',
                  alt: 'Editar registro de incidencia',
                  description: 'El usuario puede editar el registro de incidencia donde puede seleccionar el estado de incidencia (asistencia, retardo, vacaciones, discapacidad, falta) y agregar nuevos registros de incidencias.',
                },

              ],
            },
          },
        },
      ],
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'Sushi Central',
      period: 'Enero 2026 – mayo 2026',
      intro:
        'Desarrollo de la plataforma interna de recursos humanos y digitalización de procesos administrativos.',
      projects: [
        {
          name: 'SushiCentralRH',
          stack: 'Vite/React · Node.js · MySQL',
          points: [
            'Digitalización de la gestión de personal con acceso multiusuario en tiempo real y reportes automatizados.',
            'Migración de un flujo basado en Excel a una plataforma web centralizada, mejorando integridad y concurrencia de datos.',
            'Diseño de base de datos relacional que sustituye hojas de cálculo, reduciendo duplicidad y errores manuales.',
          ],
          // Capturas: /public/experiences/sushi-central/rh/
          simpleGallery: true,
          gallery: [
            {
              src: '/experiences/sushi-central/rh/1.png',
              alt: 'Login',
              description: 'Pantalla de inicio de sesión.',
            },
            {
              src: '/experiences/sushi-central/rh/2.png',
              alt: 'Home',
              description: 'Home donde gestiona a los trabajadores, reclutados, sucursales, vacaciones y roles de usuario.',
              },
            {
              src: '/experiences/sushi-central/rh/3.png',
              alt: 'Dashboard',
              description: 'Dashboard donde se muestran a colaboradores con datos incompletos, que funciona como una alerta para el administrador.',
            },
            {
              src: '/experiences/sushi-central/rh/4.png',
              alt: 'Gestión de trabajadores',
              description: 'Gestión de trabajadores donde puede agregar, editar y eliminar y aplicar filtros de zonas y sucursales a los trabajadores, además de ver su información personal, contratos.',
            },
            {
              src: '/experiences/sushi-central/rh/5.png',
              alt: 'Gestión de trabajadores',
              description: 'En este apartado se muesta la vista completa donde se puede observar la cantidad de contratos y su respectivo estado, además de opciones de renovación de contrato, y opcion de subir archivos respectivos del trabajador (confidenciales) a la nube.',
            },
            {
              src: '/experiences/sushi-central/rh/6.png',
              alt: 'Gestión de trabajadores',
              description: 'Apartado de trabajadores dados de baja.',
            },
            {
              src: '/experiences/sushi-central/rh/7.png',
              alt: 'Gestión de reclutados',
              description: 'Apartado de trabajadores reclutados, en donde el administrador registrar a nuevos reclutados y tiene opción de de contratarlos o no.',
            },
            {
              src: '/experiences/sushi-central/rh/8.png',
              alt: 'Gestión de sueldos',
              description: 'Apartado de sueldo donde el administrador puede asignar sueldo para tener un histórico de los trabajadores, con opciones de buscar por trabajador, sucursal, etc.',
            },
            {
              src: '/experiences/sushi-central/rh/9.png',
              alt: 'Gestión de sucursales y zonas',
              description: 'Apartado de sucursales y zonas donde el administrador puede agregar, editar y eliminar sucursales y zonas, con el fin de tener a los trabajadores divididos por sucursales y zonas para una mejor organización.',
            },
            {
              src: '/experiences/sushi-central/rh/10.png',
              alt: 'Gestión de Vacaciones',
              description: 'Apartado de vacaciones donde el administrador puede agregar, editar y eliminar vacaciones para los trabajadores, a su vez se genera un reporte el cual debe ser subido a la nube de la empresa, la interfaz cuenta con opciones de buscar por trabajador, sucursal, etc.',
            },
          ],
        },
      ],
    },
  ],
  featured: [
    {
      name: 'Schedule - Escolar',
      stack: 'Java (escritorio) · PHP · Laravel (web)',
      points: [
        'Aplicación para la administración y consulta de horarios de profesores.',
        'Versión de escritorio desarrollada en Java para uso local y operación sin dependencia del navegador.',
        'Versión web con PHP y Laravel para acceso centralizado y gestión desde cualquier dispositivo.',
      ],
      period: '2022 - 2023',
    },
    {
      name: 'WorkSpace – Escolar',
      stack: 'Kotlin · JavaScript · MongoDB · Node.js · Express · C++ · hardware IoT',
      points: [
        'Aplicación móvil para crear entornos inteligentes con sensores y actuadores IoT (incluyendo tiras LED).',
        'Aporte: desarrollo de la app móvil, backend e integración de comandos ESP32 con tiras LED.',
      ],
      period: '2024 - 2025',
    },
  ],
  skills: {
    languages: ['JavaScript', 'Java', 'Kotlin', 'C#', 'C++', 'PHP'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL'],
    tools: ['Postman', 'Git', 'GitHub'],
    soft: [
      'Comunicación',
      'Trabajo en equipo',
      'Responsabilidad',
      'Resolución de problemas',
    ],
  },
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio' },
  ],
  cv: {
    href: encodeURI('/CV - Carlos Eduardo De La Cruz Juárez.pdf'),
    downloadName: 'CV-Carlos-Eduardo-De-La-Cruz-Juarez.pdf',
  },
}

const navLinks = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'cv', label: 'CV' },
  { id: 'educacion', label: 'Educación' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'competencias', label: 'Competencias' },
]

function Section({ id, title, eyebrow, children, className = '', delay = 0 }) {
  return (
    <ScrollReveal
      as="section"
      className={`section${className ? ` ${className}` : ''}`}
      delay={delay}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <header className="section-header">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 id={`${id}-title`}>{title}</h2>
      </header>
      <div className="section-body">{children}</div>
    </ScrollReveal>
  )
}

function TagList({ items }) {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function SiteHeader({ email }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`site-header${menuOpen ? ' site-header--open' : ''}`}
    >
      <div className="site-header__inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-name">Carlos De La Cruz</span>
        </a>

        <nav className="nav nav--desktop" aria-label="Secciones">
          <ul className="nav-list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle__bar" aria-hidden="true" />
          <span className="nav-toggle__bar" aria-hidden="true" />
          <span className="nav-toggle__bar" aria-hidden="true" />
        </button>
      </div>

      <div
        className="nav-backdrop"
        aria-hidden={!menuOpen}
        onClick={closeMenu}
        hidden={!menuOpen}
      />

      <nav
        id="mobile-nav"
        className="nav nav--mobile"
        aria-label="Secciones móvil"
        hidden={!menuOpen}
      >

        <ul className="nav-list nav-list--mobile">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}

function App() {

  const asunto = 'Contacto desde portafolio'
  const cuerpo = 'Hola Carlos,\n\nMe pongo en contacto contigo porque...'

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`

  return (
    <div className="page">
      <SiteHeader email={profile.email} />

      <main>
        <section className="hero" id="inicio" aria-label="Presentación">
          <div className="hero-grid">
            <ScrollReveal as="div" className="hero-copy">
              <p className="hero-eyebrow">Desarrollo de software</p>
              <h1>{profile.name}</h1>
              <p className="hero-headline">{profile.headline}</p>
              <p className="hero-summary">{profile.summary}</p>
              <ul className="contact-line">
                <li>
                  <span className="contact-label">Ubicación</span>
                  {profile.location}
                </li>
                <li>
                  <span className="contact-label">Teléfono</span>
                  <a href={profile.phoneHref}>{profile.phone}</a>
                </li>
                <li>
                  <span className="contact-label">Correo</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
              </ul>
              <div className="hero-actions">
                <a className="button primary" href={gmailUrl}>
                  Contactar por correo
                </a>
                <a
                  className="button ghost"
                  href={`whatsapp://send?phone=${profile.phone}&text=${cuerpo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a
                  className="button ghost"
                  href={profile.cv.href}
                  download={profile.cv.downloadName}
                >
                  Descargar CV
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal
              as="aside"
              className="hero-aside"
              aria-label="Resumen técnico"
              delay={120}
            >
              <dl className="hero-meta">
                <div>
                  <dt>Enfoque</dt>
                  <dd>Full Stack &amp; APIs RESTful</dd>
                </div>
                <div>
                  <dt>Stack habitual</dt>
                  <dd>React · React Native · Node.js · Kotlin</dd>
                </div>
              </dl>
            </ScrollReveal>
          </div>
        </section>

        <Section id="perfil" title="Perfil profesional">
          <p className="lead">{profile.summary}</p>
        </Section>

        <Section id="cv" title="Currículum vitae" /*eyebrow="Documento"*/>
          <div className="cv-card">
            <div className="cv-card__badge" aria-hidden="true">
              PDF
            </div>
            <div className="cv-card__body">
              <p className="lead cv-card__text">
                Descarga mi currículum en PDF con formación, experiencia y
                competencias actualizadas.
              </p>
              <div className="cv-card__actions">
                <a
                  className="button primary"
                  href={profile.cv.href}
                  download={profile.cv.downloadName}
                >
                  Descargar CV
                </a>
                <a
                  className="button ghost"
                  href={profile.cv.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en el navegador
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="educacion" title="Educación" >
          <ul className="timeline">
            {profile.education.map((item, index) => (
              <ScrollReveal
                as="li"
                key={item.title}
                className="timeline-item"
                delay={index * 90}
              >
                <div className="timeline-meta">
                  <span className="pill">{item.period}</span>
                </div>
                <div className="timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                </div>
              </ScrollReveal>
            ))}
          </ul>
        </Section>

        <Section
          id="experiencia"
          className="section--experience"
          title="Experiencia laboral"
          //eyebrow="Trayectoria"
        >
          <div className="experience-list">
            {profile.experiences.map((job, index) => (
              <ScrollReveal
                as="article"
                key={`${job.company}-${job.period}`}
                className="job-card"
                delay={index * 100}
              >
                <header className="job-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <span className="pill">{job.period}</span>
                </header>
                <p className="job-intro">{job.intro}</p>
                <section className="project-stack">
                  {job.projects.map((project) => (
                    <article key={project.name} className="subproject">
                      <header>
                        <h4>{project.name}</h4>
                        <p className="stack">{project.stack}</p>
                      </header>
                      <ul>
                        {project.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <ProjectGallery
                        gallery={project.gallery}
                        projectName={project.name}
                        platformToggle={project.platformGallery}
                        simpleGallery={project.simpleGallery}
                        emphasizeCaptures
                      />
                    </article>
                  ))}
                </section>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section
          id="proyectos"
          title="Proyectos relevantes"
          //eyebrow="Selección"
        >
          <div className="featured-grid">
            {profile.featured.map((project, index) => (
              <ScrollReveal
                as="article"
                key={project.name}
                className="featured-card"
                delay={index * 100}
              >
                <header>
                  <div className="featured-title-row">
                    <h3>{project.name}</h3>
                    {'period' in project && project.period ? (
                      <span className="pill subtle">{project.period}</span>
                    ) : null}
                  </div>
                  <p className="stack">{project.stack}</p>
                </header>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section
          id="competencias"
          title="Competencias e idiomas"
          //eyebrow="Habilidades"
        >
          <div className="skills-grid">
            <ScrollReveal as="div" className="skill-block">
              <h3>Técnicas</h3>
              <dl className="skill-dl">
                <div>
                  <dt>Lenguajes</dt>
                  <dd>
                    <TagList items={profile.skills.languages} />
                  </dd>
                </div>
                <div>
                  <dt>Bases de datos</dt>
                  <dd>
                    <TagList items={profile.skills.databases} />
                  </dd>
                </div>
                <div>
                  <dt>Herramientas</dt>
                  <dd>
                    <TagList items={profile.skills.tools} />
                  </dd>
                </div>
              </dl>
            </ScrollReveal>
            <ScrollReveal as="div" className="skill-block" delay={100}>
              <h3>Profesionales</h3>
              <TagList items={profile.skills.soft} />
              <h3 className="skills-subtitle">Idiomas</h3>
              <ul className="lang-list">
                {profile.languages.map((lang) => (
                  <li key={lang.name}>
                    <span>{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Section>
      </main>

      <ScrollReveal as="footer" className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Construido con React y
          Vite.
        </p>
              </ScrollReveal>
    </div>
  )
}

export default App
