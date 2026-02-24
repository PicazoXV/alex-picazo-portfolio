import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about__grid">
        <div>
          <p className="about__kicker animate-in delay-1">Sobre mí</p>

          <h2 className="about__title animate-in delay-2">HOLA, SOY ALEX</h2>

          <p className="about__text animate-in delay-3">
            FULL-STACK DEVELOPER JUNIOR EN ESPAÑA. GRADUADO EN DESARROLLO DE
            APLICACIONES WEB Y BOOTCAMP FULL-STACK EN 4GEEKS ACADEMY. ME GUSTA
            CONSTRUIR PRODUCTOS DIGITALES QUE SE SIENTEN CLAROS, RÁPIDOS Y BIEN
            REMATADOS, TANTO EN EL FRONTEND COMO EN EL BACKEND.
            <br />
            <br />
            ME CENTRO EN ENTENDER LO QUE NECESITA EL CLIENTE, PROPONER UNA
            ESTRUCTURA LIMPIA, DISEÑAR CON CRITERIO Y LLEVARLO A CÓDIGO CON
            BUENOS DETALLES. TRABAJO CÓMODO CON REACT Y MAQUETACIÓN MODERNA EN
            EL LADO VISUAL, Y TAMBIÉN DESARROLLANDO APIS, GESTIONANDO BASES DE
            DATOS Y CONECTANDO SERVICIOS EN EL LADO DEL SERVIDOR. CUIDO EL
            RESPONSIVE, LA CONSISTENCIA, EL RENDIMIENTO Y LA EXPERIENCIA DE
            USUARIO DE PRINCIPIO A FIN.
            <br />
            <br />
            BUSCO MI PRIMERA OPORTUNIDAD COMO FULL-STACK DEVELOPER JUNIOR DONDE
            PUEDA APORTAR VISIÓN GLOBAL, CAPACIDAD TÉCNICA Y GANAS DE CRECER
            DENTRO DE UN EQUIPO REAL.
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
