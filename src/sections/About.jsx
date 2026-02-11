export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about__grid">
        <div>
          <p className="about__kicker animate-in delay-1">Sobre mí</p>

          <h2 className="about__title animate-in delay-2">HOLA, SOY ALEX</h2>

          <p className="about__text animate-in delay-3">
            FRONT-END DEVELOPER JUNIOR EN ESPAÑA. GRADUADO EN DESARROLLO DE APLICACIONES WEB
            Y BOOTCAMP FULL-STACK (4GEEKS). ME GUSTA CONSTRUIR PRODUCTOS DIGITALES QUE SE SIENTEN
            CLAROS, RÁPIDOS Y BIEN REMATADOS.
            <br /><br />
            ME CENTRO EN LA PARTE VISUAL: ENTENDER LO QUE NECESITA EL CLIENTE, PROPONER UNA ESTRUCTURA
            LIMPIA, DISEÑAR CON CRITERIO Y LLEVARLO A CÓDIGO CON BUENOS DETALLES. TRABAJO CÓMODO CON REACT
            Y MAQUETACIÓN MODERNA, CUIDANDO RESPONSIVE, CONSISTENCIA Y USABILIDAD.
            <br /><br />
            BUSCO MI PRIMERA OPORTUNIDAD COMO FRONT-END DEVELOPER JUNIOR DONDE PUEDA APORTAR DISEÑO,
            COMUNICACIÓN Y GANAS DE MEJORAR CON UN EQUIPO REAL.
          </p>
        </div>

        <figure className="about__photo animate-in delay-3">
          <img src="/about-me.jpg" alt="Foto de Alex Picazo" />
        </figure>
      </div>
    </section>
  );
}
