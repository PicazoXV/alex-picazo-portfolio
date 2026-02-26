import Section from "../components/Section.jsx";

export default function Works() {
  const works = [
    {
      name: "VLC Real State",
      url: "https://vlcrealestateinmobiliaria.com",
      desc: "Página web para venta de inmuebles creada desde cero con WordPress. Mejora de presencia online mediante SEO, diseño web, analítica y otras estrategias. VLC Real State. Diseño de la página con Elementor Pro y WPBakery Page Builder. Gestión de formularios y contacto con WPForms y JoinChat. Optimización SEO con Yoast SEO y All in One SEO. Analítica de datos con WP Google Analytics.", 
      img: "/vlcrealstate.jpg",
      tag: "UX/UI DESIGN, DEVELOPMENT",
      ratio: "16/8",
    },
    {
      name: "Ori",
      url: "https://oriacademy.es",
      desc: "Desarrollo del sitio web de Oriacademy, plataforma tecnológica, con formularios inteligentes, contacto automatizado y despliegue en la nube con React y Next.js. Desarrollo front-end con Next.js (App Router), React y Tailwind CSS, creando componentes reutilizables y formularios dinámicos con validación. Creación e integración de API Routes y envío de correos con Resend. Despliegue en Vercel con CI/CD automatizado, configuraciones seguras y gestión de variables de entorno. Control de versiones y optimización del flujo de trabajo con Git y GitHub.", 
      img: "/oriacademy.jpg",
      tag: "LANDING, CONVERSION",
      ratio: "16 / 9",
    },
    {
      name: "Job Hunter",
      url: "https://github.com/PicazoXV/Job-Hunter",
      desc: "Aplicación web Job Hunter para gestionar postulaciones con sistema kanban, que permite manejar candidaturas en diversas fases. Desarrollo front-end con React.js, JavaScript, HTML5 y CSS3, creando interfaces modernas, responsive y centradas en UX/UI. Gestión de estado, renderizado dinámico e integración con APIs y autenticación JWT. Implementación de funcionalidades CRUD en cliente y control de versiones con Git y GitHub.", 
      img: "/polmat.jpg",
      tag: "WEB DESIGN, DEVELOPMENT",
      ratio: "16 / 9",
    },
  ];

  return (
    <Section
      id="works"
      title="Works"
      subtitle="Selección de páginas web desarrolladas por mí (Obviando proyectos personales)"
    >
      <div className="worksAlt">
        {works.map((p, idx) => {
          const isRight = idx % 2 === 1;

          return (
            <article
              key={p.name}
              className={`workItem ${isRight ? "is-right" : "is-left"}`}
              style={{ "--ratio": p.ratio }}
            >
              <a
                className="workLink"
                href={p.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="workMedia">
                  <img src={p.img} alt={`Preview de ${p.name}`} loading="lazy" />
                </div>

                <div className="workText">
                  <div className="workTop">
                    <h3 className="workTitle">{p.name}</h3>
                    <p className="workTag">{p.tag}</p>
                  </div>

                  <div className="workBottom">
                    <span className="workCta">Ver proyecto</span>

                    {/* Descripción debajo del CTA */}
                    <p className="workDescBelow">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}