import { useEffect } from "react";

function clamp01(n){ return Math.max(0, Math.min(1, n)); }
function smoothstep(a, b, x){
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}

export default function ScrollFade(){
  useEffect(() => {
    const root = document.documentElement;

    const getTop = (el) => {
      const r = el.getBoundingClientRect();
      return r.top + window.scrollY;
    };

    let raf = 0;
    let last = 0;

    let heroEnd = 0;
    let aboutTop = 0;
    let skillsTop = 0;
    let skillsEnd = 0;
    let worksTop = 0;

    const measure = () => {
      const heroEl =
        document.querySelector(".hero") ||
        document.getElementById("home") ||
        document.getElementById("top");

      const aboutEl = document.getElementById("about");
      const skillsEl = document.getElementById("skills");
      const worksEl = document.getElementById("works");

      if (!heroEl || !aboutEl || !skillsEl || !worksEl) return;

      const heroTop = getTop(heroEl);
      heroEnd = heroTop + heroEl.offsetHeight;

      aboutTop = getTop(aboutEl);
      skillsTop = getTop(skillsEl);
      skillsEnd = skillsTop + skillsEl.offsetHeight;

      worksTop = getTop(worksEl);
    };

    const update = () => {
      raf = 0;
      if (!heroEnd || !aboutTop || !skillsTop || !skillsEnd || !worksTop) measure();

      const vh = window.innerHeight;
      const y = window.scrollY + vh * 0.55; // “punto de lectura”

      /* A) Fade IN: Hero -> About */
      const fadeInStart = heroEnd - vh * 0.40;
      const fadeInEnd   = aboutTop - vh * 0.10;

      /* B) HOLD: negro sólido durante About + Skills */
      const holdEnd = skillsEnd + vh * 0.20;

      /**
       * C) Fade OUT LARGO (negro -> fondo):
       * - empieza después de Skills, pero no justo al final (un poco antes del “cambio” visual)
       * - termina cuando Works ya está bastante dentro
       */
      const fadeOutStart = holdEnd;            // empieza tras skills
      const fadeOutEnd   = worksTop + vh * 0.5; // termina ya con works bien dentro (MUCHO más largo)

      let target = 0;

      if (y <= fadeInStart) {
        target = 0;
      } else if (y < fadeInEnd) {
        target = smoothstep(fadeInStart, fadeInEnd, y); // 0 -> 1
      } else if (y < fadeOutStart) {
        target = 1; // negro sólido
      } else if (y < fadeOutEnd) {
        target = 1 - smoothstep(fadeOutStart, fadeOutEnd, y); // 1 -> 0 (largo)
      } else {
        target = 0;
      }

      // suavizado (anti flash) — un pelín más lento para que “respire”
      last = last + (target - last) * 0.10;

      root.style.setProperty("--scroll-fade", last.toFixed(3));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();

    const t1 = setTimeout(() => { measure(); update(); }, 120);
    const t2 = setTimeout(() => { measure(); update(); }, 500);
    const t3 = setTimeout(() => { measure(); update(); }, 1200);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="scrollFade" aria-hidden="true" />;
}
