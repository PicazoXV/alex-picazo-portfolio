import Section from "../components/Section.jsx";

export default function Works() {
  const works = [
    {
      name: "Sparo",
      url: "https://sparo.pro",
      desc: "Plataforma de análisis de vídeo con IA para deportes de combate. Detecta errores recurrentes, analiza patrones de movimiento y realiza seguimiento de la progresión técnica. Desarrollo full-stack como parte del equipo de Sparo.",
      img: "/sparo.jpg",
      tag: "AI, VIDEO ANALYSIS",
    },
    {
      name: "VLC Real State",
      url: "https://vlcrealestateinmobiliaria.com",
      desc: "Página web para venta de inmuebles creada desde cero con WordPress. Mejora de presencia online mediante SEO, diseño web y analítica. Diseño con Elementor Pro y WPBakery. Optimización SEO con Yoast SEO.",
      img: "/vlcrealstate.jpg",
      tag: "UX/UI, DEVELOPMENT",
    },
    {
      name: "Ori",
      url: "https://oriacademy.es",
      desc: "Desarrollo del sitio web de Oriacademy con formularios inteligentes, contacto automatizado y despliegue en la nube. Front-end con Next.js, React y Tailwind CSS. API Routes con Resend. Deploy en Vercel con CI/CD.",
      img: "/oriacademy.jpg",
      tag: "LANDING, CONVERSION",
    },
    {
      name: "MiPrimer Issue",
      url: "https://miprimerissue.dev",
      desc: "Plataforma para ayudar a desarrolladores junior a empezar en open source de forma guiada. Next.js, TailwindCSS y Supabase con auth de GitHub. Incluye selección de tareas, sistema de solicitudes e integración de IA.",
      img: "/polmat.jpg",
      tag: "WEB APP, OPEN SOURCE",
    },
  ];

  return (
    <Section
      id="works"
      title="Works"
      subtitle="Selección de páginas web desarrolladas por mí"
    >
      <div className="stackedWorks">
        {works.map((p, idx) => (
          <div
            key={p.name}
            className="stackCard"
            style={{ "--i": idx }}
          >
            <a
              className="stackCard__inner"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="stackCard__media">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>

              <div className="stackCard__text">
                <span className="stackCard__num">0{idx + 1}</span>
                <span className="stackCard__tag">{p.tag}</span>
                <h3 className="stackCard__title">{p.name}</h3>
                <p className="stackCard__desc">{p.desc}</p>
                <span className="stackCard__cta">Ver proyecto →</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
