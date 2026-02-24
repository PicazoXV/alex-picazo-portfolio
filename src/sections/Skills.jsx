export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "React",
    "Node.js",
    "Vite",
    "Tailwind",
    "Bootstrap",
    "Figma",
    "WordPress",
    "Flask",
    "PHP",
    "APIs",
    "Python",
    "MySQL",
    "Resend",
    "Vercel",
    "Git","GitHub"
  ];

  return (
    <section className="section skills" id="skills">
      <div className="skills-wrap">
        <p className="skills-kicker animate-in delay-1">Stack</p>

        <h2 className="skills-title animate-in delay-2">
          HERRAMIENTAS
        </h2>

        <p className="skills-sub animate-in delay-3">
          TECNOLOGÍAS Y HERRAMIENTAS QUE UTILIZO PARA CREAR
          INTERFACES LIMPIAS, RESPONSIVE Y ESCALABLES.
        </p>

        <div className="pills animate-in delay-3">
          {skills.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}