export default function Skills() {
  const skills = [
    "HTML","CSS","JavaScript","Typescript","React","Node.js","Vite","Tailwind",
    "Bootstrap","Figma","WordPress","Divi","Elementor","Flask","PHP","APIs",
    "Python","MySQL","PostgreSQL","MongoDB","Supabase","Resend","Vercel",
    "Netlify","Cloudflare","Git","GitHub","Claude","Claude Code","Cursor","v0",
  ];

  return (
    <section className="section skills" id="skills">
      <div className="skills-wrap">
        <p className="skills-kicker animate-in delay-1">Stack</p>
        <h2 className="skills-title animate-in delay-2">HERRAMIENTAS</h2>

        <p className="skills-sub animate-in delay-3">
          TECNOLOGÍAS Y HERRAMIENTAS QUE UTILIZO PARA CREAR INTERFACES LIMPIAS,
          RESPONSIVE Y ESCALABLES.
        </p>

        <div className="skillsMarquee2 animate-in delay-3" aria-label="Stack carousel">
          <div className="marqueeRow">
            <div className="marqueeTrack">
              {skills.concat(skills).map((s, i) => (
                <span key={`r1-${s}-${i}`} className="pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="marqueeRow reverse">
            <div className="marqueeTrack">
              {skills.concat(skills).map((s, i) => (
                <span key={`r2-${s}-${i}`} className="pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="marqueeRow">
            <div className="marqueeTrack">
              {skills.concat(skills).map((s, i) => (
                <span key={`r3-${s}-${i}`} className="pill">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
