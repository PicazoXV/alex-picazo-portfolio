import Navbar from "../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Skills from "../sections/Skills.jsx";
import Works from "../sections/Works.jsx";
import Contact from "../sections/Contact.jsx";
import ScrollFade from "../components/ScrollFade.jsx";

export default function App() {
  return (
    <>
      {/* Overlay dinámico: normal al inicio + inverso dentro de Works */}
      <ScrollFade />

      <Navbar />

      <main>
        {/* id="top" */}
        <Hero />

        {/* id="about" */}
        <About />

        {/* id="skills" */}
        <Skills />

        {/* id="works" */}
        <Works />

        {/* id="contacto" */}
        <Contact />

        
      </main>
    </>
  );
}
