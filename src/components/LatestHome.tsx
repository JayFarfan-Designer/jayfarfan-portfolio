import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import minsaHero from "@/assets/minsa-hero.png";
import certeziaHero from "@/assets/certezia-hero.webp";
import pabloHero from "@/assets/pablo-hero.png";
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
    let raf = 0, t = 0, w = 0, h = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const rnd = (i:number) => { const n = Math.sin(i * 127.1 + 31.7) * 43758.5453; return n - Math.floor(n); };
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      const d = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w*d); canvas.height = Math.round(h*d);
      ctx.setTransform(d,0,0,d,0,0);
    };
    const draw = () => {
      if (!w || !h) return;
      const cols = w < 600 ? 3 : 4, rows = w < 600 ? 5 : 7;
      const points = Array.from({length: cols*rows},(_,i)=>({
        x:w*.43+(w*.52)*(rnd(i+1)*.55+(i%cols)/(cols-1)*.45)+Math.sin(t*.45+i)*2,
        y:34+(h-80)*(rnd(i+50)*.55+Math.floor(i/cols)/(rows-1)*.45)+Math.cos(t*.4+i)*2
      }));
      ctx.clearRect(0,0,w,h);
      for(let i=0;i<points.length;i++) for(let j=i+1;j<points.length;j++){
        const a=points[i],b=points[j], neighbor=(j===i+1&&Math.floor(i/cols)===Math.floor(j/cols))||j===i+cols;
        if(!neighbor && Math.hypot(a.x-b.x,a.y-b.y)>90) continue;
        ctx.strokeStyle="rgba(200,208,216,.18)";ctx.lineWidth=.75;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      }
      points.forEach((p,i)=>{ctx.fillStyle=i===Math.min(19,points.length-1)?"#8B87FF":"rgba(228,233,238,.45)";ctx.beginPath();ctx.arc(p.x,p.y,i%7===0?2.3:1.35,0,Math.PI*2);ctx.fill();});
      const g=ctx.createLinearGradient(0,0,w,0);g.addColorStop(0,"#0B0F12");g.addColorStop(.4,"#0B0F12");g.addColorStop(1,"rgba(11,15,18,.03)");ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
    };
    const loop=()=>{t+=.025;draw();if(!reduce.matches)raf=requestAnimationFrame(loop)};
    resize();draw();if(!reduce.matches)raf=requestAnimationFrame(loop);
    const ro=new ResizeObserver(resize);ro.observe(canvas);
    return()=>{cancelAnimationFrame(raf);ro.disconnect()};
  },[]);
  return <canvas ref={ref} className="latest-hero-motion" aria-hidden="true" />;
}

const projects = [
  {
    slug:"minsa",
    image:minsaHero,
    number:"01",
    client:"MINSA Perú · DIGITAL-HUMANS",
    es:"Carné de vacunación usado por más de 10M de personas",
    en:"Vaccination card used by more than 10M people",
    tags:"GovTech · Accesibilidad · Design System",
    bg:"#E1E9EC"
  },
  {
    slug:"certezia",
    image:certeziaHero,
    number:"02",
    client:"Certezia · DIGITAL-HUMANS",
    es:"Firma digital con DNIe: menos pasos y 8/10 de NPS",
    en:"eID digital signing: fewer steps and 8/10 NPS",
    tags:"GovTech · Firma digital · NFC",
    bg:"#E8E5F1"
  },
  {
    slug:"pablo",
    image:pabloHero,
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
  {img:solangie,name:"Solangie Chuica de la Cruz",role:"Product Owner · Pacífico Seguros",url:"https://www.linkedin.com/in/solangie-chuica-de-la-cruz-180a5243/",es:"Jay siempre mantuvo el foco en el usuario, transformando flujos complejos en experiencias simples, intuitivas y fáciles de usar.",en:"Jay always kept the focus on the user, transforming complex flows into simple, intuitive and easy-to-use experiences."},
  {img:null,name:"Rodrigo Solís",role:"CEO/Founder · Pablo IA",url:"https://www.linkedin.com/in/rodrigo-solis-1958751bb/",es:"Fue un placer trabajar con Jay. Siempre pone al usuario en el centro y tiene la capacidad de ayudar al equipo a entenderlo en profundidad.",en:"It was a pleasure working with Jay. He always puts the user at the center and helps the team understand users in depth."},
  {img:willington,name:"Willington Jesús Ortiz Maurtua",role:"Software Engineer · Inetum",url:"https://www.linkedin.com/in/willington-jesus-ortiz-maurtua-a96163145/",es:"Lo que más destaco de Jay es su capacidad para mantener siempre al usuario como prioridad, transformando necesidades complejas en experiencias claras y funcionales.",en:"What I highlight most about Jay is his ability to keep the user as a priority, turning complex needs into clear, functional experiences."}
];

export function LatestHome() {
  const { lang, t } = useLanguage();
  const cv = lang === "es" ? "/CV_JayFarfan_ESP.pdf" : "/CV_JayFarfan_ENG.pdf";
  return (
    <div className="latest-home">
      <section className="latest-section latest-hero">
        <HeroMotion />
        <div className="latest-wrap latest-hero-inner">
          <div className="latest-availability"><span className="latest-dot"/>{t("Disponible para roles full-time y proyectos freelance","Available for full-time roles and freelance projects")}</div>
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
          <p className="latest-lead">{t("He trabajado en productos de fintech, govtech y marketplaces, como parte de equipos de diseño y liderando proyectos. Mi base en Ingeniería Civil se refleja en cómo conecto sistemas, trabajo con restricciones y considero el uso real de cada producto.","I’ve worked on fintech, govtech and marketplace products, as part of design teams and leading projects. My Civil Engineering background shapes how I connect systems, work within constraints and consider how people actually use each product.")}</p>
          <div className="latest-projects">{projects.map(p=><ProjectCard key={p.slug} p={p} lang={lang}/>)}</div>
          <div className="latest-actions"><Link className="latest-btn primary" to="/">{t("Ver toda mi experiencia","See all my experience")} →</Link></div>
        </div>
      </section>

      <section className="latest-section latest-band">
        <div className="latest-wrap latest-band-grid">
          <div><div className="latest-eyebrow">{t("Proceso + IA","Process + AI")}</div><h3>{t("Cómo trabajo y dónde uso IA","How I work and where I use AI")}</h3></div>
          <div className="latest-band-copy"><p>{t("Uso Claude y ChatGPT para research y exploración, y Claude Design y ChatGPT Sites para prototipos funcionales y sitios.","I use Claude and ChatGPT for research and exploration, and Claude Design and ChatGPT Sites for functional prototypes and websites.")}</p><p>{t("Las decisiones de diseño las tomo con usuarios, métricas y necesidades de negocio.","I make design decisions based on users, metrics and business needs.")}</p><Link to="/about" className="latest-inline-link">{t("Ver mi proceso","See my process")} →</Link></div>
        </div>
      </section>

      <section className="latest-section">
        <div className="latest-wrap">
          <div className="latest-eyebrow">{t("Recomendaciones","Endorsements")}</div>
          <h2 className="latest-quotes-title">{t("Lo que dicen las personas con las que he trabajado","What people I’ve worked with say")}</h2>
          <div className="latest-quotes">{quotes.map(q=><figure className="latest-quote" key={q.name}><p>“{lang==="es"?q.es:q.en}”</p><div className="latest-who">{q.img?<img src={q.img} alt=""/>:<div className="latest-avatar-fallback">RS</div>}<div><a href={q.url} target="_blank" rel="noreferrer">{q.name}</a><span>{q.role}</span></div></div></figure>)}</div>
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
  return <Link to="/work/$slug" params={{slug:p.slug}} className="latest-card"><div className="latest-thumb" style={{background:p.bg}}><img src={p.image} alt=""/></div><div className="latest-card-body"><div className="latest-card-meta">{p.number} · {p.client}</div><h3>{lang==="es"?p.es:p.en}</h3><p>{p.tags}</p><span>{lang==="es"?"Ver caso":"View case"} →</span></div></Link>
}
