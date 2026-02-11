import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll(); // aplica estado al cargar
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__inner">
        <div className="nav__left">
          <a className="brand" href="#top">Alex Picazo</a>
          <div className="role">Front-end Developer / UX-UI</div>
        </div>

        <nav className="nav__links" aria-label="Navegación principal">
          {/* IDs reales */}
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contacto">Contact</a>
        </nav>
      </div>
    </header>
  );
}
