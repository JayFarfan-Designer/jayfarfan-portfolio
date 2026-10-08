import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { latestImages } from "@/data/latestAssets";
import eliana from "@/assets/eliana.jpg";
import solangie from "@/assets/solangie.jpg";
import willington from "@/assets/willington.jpg";

function HeroMotion() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let time = 0;
    let frame: number | null = null;
    let last = 0;
    let visible = true;
    let alive = true;

    const random = (i: number) => {
      const n = Math.sin(i * 127.1 + 31.7) * 43758.5453;
      return n - Math.floor(n);
    };
    const smooth = (x: number) => x * x * (3 - 2 * x);

    const draw = () => {
      if (!width || !height) return;

      const cycle = time % 15;
      const amount = media.matches
        ? 1
        : cycle < 2
          ? 0
          : cycle < 7
            ? smooth((cycle - 2) / 5)
            : cycle < 12
              ? 1
              : 1 - smooth((cycle - 12) / 3);

      const mobile = width < 600;
      const columns = mobile ? 3 : 4;
      const rows = mobile ? 5 : 7;
      const startX = width * (mobile ? 0.37 : 0.43);
      const spanX = width - startX - 30;
      const startY = 36;
      const spanY = Math.max(1, height - 82);

      const points = Array.from({ length: columns * rows }, (_, i) => ({
        x:
          startX +
          spanX *
            (random(i + 1) * (1 - amount) +
              ((i % columns) / (columns - 1)) * amount) +
          Math.sin(time * 0.8 + i) * 2.5,
        y:
          startY +
          spanY *
            (random(i + 50) * (1 - amount) +
              (Math.floor(i / columns) / (rows - 1)) * amount) +
          Math.cos(time * 0.7 + i) * 2.5,
      }));

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const neighbor =
            (j === i + 1 &&
              Math.floor(i / columns) === Math.floor(j / columns)) ||
            j === i + columns;

          if (
            !neighbor &&
            !(amount < 0.7 && Math.hypot(a.x - b.x, a.y - b.y) < 95)
          ) {
            continue;
          }

          ctx.strokeStyle = `rgba(200,208,216,${0.16 + amount * 0.1})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      points.forEach((point, i) => {
        ctx.fillStyle =
          i === Math.min(19, points.length - 1)
            ? "#8B87FF"
            : `rgba(228,233,238,${i % 7 === 0 ? 0.65 : 0.37})`;
        ctx.beginPath();
        ctx.arc(
          point.x,
          point.y,
          i % 7 === 0 || i === 19 ? 2.4 : 1.4,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      });

      const mask = ctx.createLinearGradient(0, 0, width, 0);
      mask.addColorStop(0, "#0B0F12");
      mask.addColorStop(0.38, "#0B0F12");
      mask.addColorStop(0.72, "rgba(11,15,18,.74)");
      mask.addColorStop(1, "rgba(11,15,18,.02)");
      ctx.fillStyle = mask;
      ctx.fillRect(0, 0, width, height);

      const bottom = ctx.createLinearGradient(0, height * 0.68, 0, height);
      bottom.addColorStop(0, "rgba(11,15,18,0)");
      bottom.addColorStop(1, "#0B0F12");
      ctx.fillStyle = bottom;
      ctx.fillRect(0, height * 0.68, width, height * 0.32);
    };

    const stop = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      last = 0;
    };

    const tick = (stamp: number) => {
      frame = null;
      if (!alive || !visible || document.hidden || media.matches) return;

      const delta = last ? Math.min((stamp - last) / 1000, 0.05) : 0;
      last = stamp;
      time += delta;
      draw();
      frame = requestAnimationFrame(tick);
    };

    const sync = () => {
      stop();
      if (!alive) return;
      if (media.matches) {
        draw();
      } else if (visible && !document.hidden) {
        frame = requestAnimationFrame(tick);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
      sync();
    });
    intersection.observe(canvas);

    document.addEventListener("visibilitychange", sync);
    media.addEventListener("change", sync);

    resize();
    sync();

    return () => {
      alive = false;
      stop();
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", sync);
      media.removeEventListener("change", sync);
    };
  }, []);

  return <canvas ref={ref} className="latest-hero-motion" aria-hidden="true" />;
}

const projects = [
  {
    slug:"minsa",
    image:latestImages.minsa_cover,
    number:"01",
    client:"MINSA Perú · DIGITAL-HUMANS",
    es:"Carné de vacunación usado por más de 10M de personas",
    en:"Vaccination card used by more than 10M people",
    tags:"GovTech · Accesibilidad · Design System",
    bg:"#E1E9EC"
  },
  {
    slug:"certezia",
    image:latestImages.certezia_cover,
    number:"02",
    client:"Certezia · DIGITAL-HUMANS",
    es:"Firma digital con DNIe: menos pasos y 8/10 de NPS",
    en:"eID digital signing: fewer steps and 8/10 NPS",
    tags:"GovTech · Firma digital · NFC",
    bg:"#E8E5F1"
  },
  {
    slug:"pablo",
    image:latestImages.pablo_cover,
    number:"03",
    client:"Pablo · Komu AI",
    es:"Pablo: +150% de adopción del plan de pago",
    en:"Pablo: +150% paid-plan adoption",
    tags:"Fintech · Producto con IA · UX conversacional",
    bg:"#E9E6F4"
  }
];

const quotes = [
  {img:eliana,name:"Eliana Campos del Valle",role:"Design Lead · Produbanco",url:"https://www.linkedin.com/in/eliana-campos-designer/",es:"Destaco su habilidad para conectar diseño, negocio y tecnología, entendiendo profundamente las necesidades de los usuarios para proponer soluciones claras y valiosas.",en:"I highlight his ability to connect design, business and technology, deeply understanding user needs to propose clear and valuable solutions."},
  {img:solangie,name:"Solangie Chuica de la Cruz",role:"Product Owner · Pacífico Seguros",url:"https://www.linkedin.com/in/solangie-chuica-de-la-cruz-180a5243/",es:"Jay siempre mantuvo el foco en el usuario, transformando flujos complejos en experiencias simples, intuitivas y fáciles de usar. Además, destacó por su comunicación y coordinación con distintas áreas del equipo.",en:"Jay always kept the focus on the user, transforming complex flows into simple, intuitive, and easy-to-use experiences. Furthermore, he stood out for his communication and coordination with different areas of the team."},
  {img:latestImages.rodrigo,name:"Rodrigo Solís",role:"CEO/Founder · Pablo IA",url:"https://www.linkedin.com/in/rodrigo-solis-1958751bb/",es:"Fue un placer trabajar con Jay. Siempre pone al usuario en el centro y tiene la capacidad de ayudar al equipo a entenderlo en profundidad. En Pablo nos ayudó a conectar las necesidades del usuario con el producto y a construir el flujo inicial de la experiencia.",en:"It was a pleasure working with Jay. He always puts the user at the center and has the ability to help the team understand them in depth. At Pablo he helped us connect user needs with the product and build the initial flow of the experience."},
  {img:willington,name:"Willington Jesús Ortiz Maurtua",role:"Software Engineer · Inetum",url:"https://www.linkedin.com/in/willington-jesus-ortiz-maurtua-a96163145/",es:"Lo que más destaco de Jay es su capacidad para mantener siempre al usuario como prioridad, transformando necesidades complejas en experiencias claras, funcionales y bien resueltas.",en:"What I highlight most about Jay is his ability to always keep the user as a priority, transforming complex needs into clear, functional, and well-resolved experiences."}
];

function RobotIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.6"
      height="17.6"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="latest-ai-badge-icon"
    >
      <circle cx="12" cy="2.5" r="1.5"/>
      <path d="M11 3h2v4h-2z"/>
      <rect x="3" y="6" width="18" height="16" rx="5"/>
      <rect x=".5" y="11" width="3" height="6" rx="1.5"/>
      <rect x="20.5" y="11" width="3" height="6" rx="1.5"/>
      <circle cx="8" cy="12" r="2" fill="#0B0F12"/>
      <circle cx="16" cy="12" r="2" fill="#0B0F12"/>
      <rect x="8" y="17" width="8" height="2" rx="1" fill="#0B0F12"/>
    </svg>
  );
}

export function LatestHome() {
  const { lang, t } = useLanguage();
  const cv = lang === "es" ? "/CV_JayFarfan_ESP.pdf" : "/CV_JayFarfan_ENG.pdf";
  return (
    <div className="latest-home">
      <section className="latest-section latest-hero">
        <HeroMotion />
        <div className="latest-wrap latest-hero-inner">
          <div className="latest-hero-pills">
            <div className="latest-availability"><span className="latest-dot"/>{t("Disponible para roles full-time y proyectos freelance","Available for full-time roles and freelance projects")}</div>
            <div className="latest-ai-badge"><RobotIcon/>{t("Portafolio creado íntegramente con IA","Portfolio built entirely with AI")}</div>
          </div>
          <h1>{t("Resuelvo problemas complejos combinando estrategia, criterio humano e inteligencia artificial.","I solve complex problems by combining strategy, human judgment and artificial intelligence.")}</h1>
          <div className="latest-facts"><span>{t("Product Designer peruano en Quito","Peruvian Product Designer based in Quito")}</span><span>{t("+5 años de experiencia","5+ years of experience")}</span></div>
          <div className="latest-actions"><a className="latest-btn primary" href="#work">{t("Ver experiencia","See experience")} ↓</a><a className="latest-btn secondary" href={cv} download>{t("Descargar CV","Download CV")} ↓</a></div>
          <div className="latest-metrics">
            <Metric value="+10M" text={t("de personas usaron una app pública de salud que rediseñé","people used a public health app I redesigned")} />
            <Metric value="8/10" text={t("de NPS en pruebas con usuarios de una firma digital","NPS in user tests of a digital signature flow")} />
            <Metric value="+150%" text={t("de adopción del plan de pago de un asistente financiero","paid-plan adoption of a financial assistant")} />
            <Metric value="+55%" text={t("de conversión en un marketplace automotriz rediseñado","conversion in a redesigned automotive marketplace")} />
          </div>
        </div>
      </section>

      <section className="latest-section" id="work">
        <div className="latest-wrap">
          <div className="latest-eyebrow">{t("Experiencia","Experience")}</div>
          <h2>{t("Proyectos destacados","Featured projects")}</h2>
          <p className="latest-lead">{t("He trabajado en productos de fintech, govtech y marketplaces, como parte de equipos de diseño y liderando proyectos. Mi base en Ingeniería Civil se refleja en cómo conecto sistemas, trabajo con restricciones y considero el uso real de cada producto. Estos casos muestran mi trabajo desde research y definición del problema hasta diseño, validación y colaboración con desarrollo.","I’ve worked on fintech, govtech and marketplace products, as part of design teams and leading projects. My Civil Engineering background shapes how I connect systems, work within constraints and consider how people actually use each product. These cases show my work from research and problem definition through design, validation and collaboration with engineering.")}</p>
          <div className="latest-projects">{projects.map(p=><ProjectCard key={p.slug} p={p} lang={lang}/>)}</div>
          <div className="latest-actions"><Link className="latest-btn primary" to="/work">{t("Ver toda mi experiencia","See all my experience")} →</Link></div>
        </div>
      </section>

      <section className="latest-section latest-band">
        <div className="latest-wrap latest-band-grid">
          <div><div className="latest-eyebrow">{t("Proceso + IA","Process + AI")}</div><h3>{t("Cómo trabajo y dónde uso IA","How I work and where I use AI")}</h3></div>
          <div className="latest-band-copy"><p>{t("Uso Claude y ChatGPT para research y exploración, y Claude Design y ChatGPT Sites para prototipos funcionales y sitios.","I use Claude and ChatGPT for research and exploration, and Claude Design and ChatGPT Sites for functional prototypes and websites.")}</p><p>{t("Las decisiones de diseño las tomo con usuarios, métricas y necesidades de negocio.","I make design decisions based on users, metrics and business needs.")}</p><Link to="/process" className="latest-inline-link">{t("Ver mi proceso","See my process")} →</Link></div>
        </div>
      </section>

      <section className="latest-section">
        <div className="latest-wrap">
          <div className="latest-eyebrow">{t("Recomendaciones","Endorsements")}</div>
          <h2 className="latest-quotes-title">{t("Lo que dicen las personas con las que he trabajado","What people I’ve worked with say")}</h2>
          <div className="latest-quotes">{quotes.map(q=><figure className="latest-quote" key={q.name}><p>“{lang==="es"?q.es:q.en}”</p><div className="latest-who">{q.img?<img src={q.img} alt="" loading="lazy" decoding="async"/>:<div className="latest-avatar-fallback">RS</div>}<div><a href={q.url} target="_blank" rel="noreferrer">{q.name}</a><span>{q.role}</span></div></div></figure>)}</div>
        </div>
      </section>

      <section className="latest-section" id="contact">
        <div className="latest-wrap latest-contact-grid">
          <div><div className="latest-eyebrow">{t("Contacto","Contact")}</div><h2>{t("Trabajemos juntos. Conversemos.","Let’s work together. Let’s talk.")}</h2></div>
          <div><p className="latest-lead">{t("Trabajo desde Quito, Ecuador, y estoy abierto a oportunidades como Product Designer / UX/UI Designer y a proyectos freelance. Colaboro en remoto con equipos de cualquier parte del mundo.","I’m based in Quito, Ecuador, and open to Product Designer / UX/UI Designer opportunities and freelance projects. I collaborate remotely with teams anywhere in the world.")}</p><div className="latest-actions"><a className="latest-btn primary" href="mailto:josem4n@gmail.com">{t("Conversemos","Let’s talk")} ↗</a><a className="latest-btn secondary" href={cv} download>{t("Descargar CV","Download CV")} ↓</a><a className="latest-btn secondary" href="https://www.linkedin.com/in/jayfarfan/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
        </div>
      </section>
    </div>
  );
}

function Metric({value,text}:{value:string;text:string}){return <div className="latest-metric"><b>{value}</b><span>{text}</span></div>}
function ProjectCard({p,lang}:{p:(typeof projects)[number];lang:"es"|"en"}){
  return <Link to="/work/$slug" params={{slug:p.slug}} className="latest-card"><div className="latest-thumb" style={{background:p.bg}}><img src={p.image} alt="" loading="lazy" decoding="async"/></div><div className="latest-card-body"><div className="latest-card-meta">{p.number} · {p.client}</div><h3>{lang==="es"?p.es:p.en}</h3><p>{p.tags}</p><span>{lang==="es"?"Ver caso":"View case"} →</span></div></Link>
}
