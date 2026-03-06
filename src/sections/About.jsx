import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about__grid">
        <div>
          <p className="about__kicker animate-in delay-1">Sobre mí</p>

          <h2 className="about__title animate-in delay-2">HOLA, SOY ALEX</h2>

          <p className="about__text animate-in delay-3">
            DESARROLLADOR FULL-STACK JUNIOR EN ESPAÑA. GRADUADO EN DESARROLLO DE
APLICACIONES WEB Y FORMADO COMO FULL-STACK DEVELOPER EN 4GEEKS ACADEMY.
ME GUSTA CONSTRUIR PRODUCTOS DIGITALES CLAROS, FUNCIONALES Y BIEN
CUIDADOS, TANTO EN EL FRONTEND COMO EN EL BACKEND.
<br />
<br />
DISFRUTO CONVIRTIENDO IDEAS EN APLICACIONES REALES. TRABAJO CON REACT
PARA CREAR INTERFACES LIMPIAS Y RESPONSIVAS, Y TAMBIÉN DESARROLLO APIS,
GESTIONO BASES DE DATOS Y CONECTO SERVICIOS EN EL LADO DEL SERVIDOR.
ME INTERESA ESCRIBIR CÓDIGO ORDENADO, ENTENDER BIEN LOS PROBLEMAS Y
CONSTRUIR SOLUCIONES QUE FUNCIONEN BIEN EN EL DÍA A DÍA.
<br />
<br />
ACTUALMENTE BUSCO MI PRIMERA OPORTUNIDAD COMO DESARROLLADOR
FULL-STACK JUNIOR DONDE PUEDA SEGUIR APRENDIENDO, APORTAR MIS
CONOCIMIENTOS Y CRECER DENTRO DE UN EQUIPO DE DESARROLLO.
          </p>
        </div>

        <motion.figure
          className="about__photo"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.8 }}
        >
          <img src="/about-me.jpg" alt="Foto de Alex Picazo" />
        </motion.figure>
      </div>
    </section>
  );
}
