export default function Contact() {
  const pills = [
    "UX/UI DESIGN",
    "FULLSTACK DEVELOPMENT",
    "REACT + NODE",
    "API INTEGRATION",
    "DESIGN SYSTEMS",
    "ACCESSIBILITY",
    "FIGMA TO CODE",
    "WORDPRESS",
    "PERFORMANCE",
    "NEW PROJECTS",
  ];

  return (
    <section className="section" id="contacto">
      <div className="contactHero">
        <div className="contactHero__grid">
          <h2 className="contactBig animate-in delay-1">LET’S CONNECT</h2>

          <div className="contactPills animate-in delay-2">
            {pills.map((t) => (
              <span key={t} className="contactPill">{t}</span>
            ))}
          </div>
        </div>

        <div className="contactBar">
          <p className="contactBar__ask animate-in delay-2">
            ¿Hablamos de un proyecto o una oportunidad junior?
          </p>

          <a className="contactBtn animate-in delay-3" href="mailto:TU_EMAIL@dominio.com">
            Contact me
          </a>

          <div className="contactLinks animate-in delay-3">
            <a href="https://github.com/PicazoXV" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/alex-picazo-huerta-265723240/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:TU_EMAIL@dominio.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
