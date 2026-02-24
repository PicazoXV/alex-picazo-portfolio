import Section from "../components/Section.jsx";

export default function Works() {
  const works = [
    {
      name: "VLC Real State",
      url: "https://vlcrealestateinmobiliaria.com",
      desc: "WordPress desde 0: diseño + implementación.",
      img: "/vlcrealstate.jpg",
      tag: "UX/UI DESIGN, DEVELOPMENT",
      ratio: "16 / 9",
    },
    {
      name: "Ori",
      url: "https://oriacademy.es",
      desc: "Web/landing enfocada a conversión.",
      img: "/oriacademy.jpg",
      tag: "LANDING, CONVERSION",
      ratio: "16 / 9",
    },
    {
      name: "Polmat",
      url: "https://polmat.es",
      desc: "Web corporativa desde 0, estructura y maquetación.",
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
          // Alterna: 0 izquierda (imagen izq / texto dcha), 1 derecha, 2 izquierda...
          const isRight = idx % 2 === 1;

          return (
            <article
              key={p.name}
              className={`workItem ${isRight ? "is-right" : "is-left"}`}
              style={{ "--ratio": p.ratio }}
            >
              <a className="workLink" href={p.url} target="_blank" rel="noreferrer">
                <div className="workMedia">
                  <img src={p.img} alt={`Preview de ${p.name}`} loading="lazy" />
                </div>

                <div className="workText">
                  <h3 className="workTitle">{p.name}</h3>
                  <p className="workTag">{p.tag}</p>
                  <p className="workDesc">{p.desc}</p>
                  <span className="workCta">Ver proyecto</span>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
