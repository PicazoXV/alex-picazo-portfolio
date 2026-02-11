export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <div className="hero__grid">
          <div className="hero__left">
            <div className="hero__pill animate-in delay-1">Junior</div>

            <h1 className="hero__title animate-in delay-2">
              <span className="under">Designer</span>
              <br />
              <span className="under">Developer</span>
            </h1>
          </div>

          <div className="hero__right">
            <p className="hero__desc animate-in delay-2">
              CONSTRUYO INTERFACES LIMPIAS Y RESPONSIVE CON REACT Y UN FUERTE SENTIDO DEL DISEÑO.
TRANSFORMO LOS REQUISITOS EN INTERFACES USABLES.
            </p>

            <div className="hero__actions animate-in delay-3">
              <a className="btn" href="#contacto">Contact me</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll animate-in delay-3">Scroll</div>
    </section>
  );
}
