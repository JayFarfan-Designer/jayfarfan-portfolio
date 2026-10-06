import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { latestImages } from "@/data/latestAssets";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre mí · Jay Farfán" },
      { name: "description", content: "Product Designer peruano basado en Quito, con experiencia previa en Ingeniería Civil." },
      { property: "og:url", content: "https://jayfarfan.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://jayfarfan.com/about" }],
  }),
});

const principles = [
  ["Pensar en el sistema","Think in systems","Conecto información, tareas y decisiones del usuario para diseñar el recorrido completo.","I connect information, tasks and user decisions to design the complete journey."],
  ["Diseñar con restricciones reales","Design within real constraints","Con producto, negocio y desarrollo, priorizo lo viable sin perder de vista la experiencia.","With product, business and engineering, I prioritize what is feasible while protecting the experience."],
  ["Diseñar para personas reales","Design for real people","Observo el uso real y las barreras para crear experiencias claras y accesibles.","I observe real usage and barriers to create clear, accessible experiences."],
  ["Usar IA sin delegar el criterio","Use AI without outsourcing judgment","La uso para explorar y avanzar más rápido. Las decisiones las tomo con el equipo.","I use it to explore and move faster. I make decisions together with the team."]
] as const;

function AboutPage(){
  const {lang,t}=useLanguage();
  const cv=lang==="es"?"/CV_JayFarfan_ESP.pdf":"/CV_JayFarfan_ENG.pdf";
  const portrait=(latestImages as any).jay_portrait;
  return <>
    <main className="latest-about">
      <section className="latest-section">
        <div className="latest-wrap latest-about-top">
          <div className="latest-portrait"><img src={portrait} alt="Jay Farfán" loading="eager"/></div>
          <div>
            <div className="latest-eyebrow">{t("Sobre mí","About me")}</div>
            <h1>{t("Cambié de profesión. Conservé la forma de resolver problemas.","I changed careers. I kept my approach to solving problems.")}</h1>
            <div className="latest-about-copy">
              <p>{t("Soy peruano, vivo en Quito y trabajé varios años como Ingeniero Civil. Durante la pandemia empecé a aprender programación y encontré mi camino hacia el diseño de productos digitales.","I’m Peruvian, based in Quito, and spent several years working as a Civil Engineer. During the pandemic, I started learning programming and found my way into digital product design.")}</p>
              <p>{t("De la ingeniería me traje tres formas de mirar los problemas: pensamiento sistémico, diseño bajo restricciones y atención a las personas. Hoy las aplico para conectar información y flujos, tomar decisiones viables y crear experiencias accesibles.","Engineering gave me three ways to approach problems: systems thinking, design within constraints and attention to people. Today, I apply them to connect information and flows, make feasible decisions and create accessible experiences.")}</p>
              <p>{t("Antes de diseñar, observo cómo las personas usan el producto y alineo sus necesidades con el negocio y las posibilidades del equipo. Hoy soy cofundador de DIGITAL-HUMANS y trabajo en fintech, govtech y marketplaces entre Perú y Ecuador.","Before designing, I observe how people use the product and align their needs with business goals and what the team can build. Today, I’m a cofounder of DIGITAL-HUMANS, working across fintech, govtech and marketplaces in Peru and Ecuador.")}</p>
            </div>
            <div className="latest-actions"><a href={cv} download className="latest-btn primary">{t("Descargar CV","Download CV")} ↓</a><Link to="/work" className="latest-btn secondary">{t("Ver experiencia","View experience")} →</Link></div>
          </div>
        </div>
      </section>

      <section className="latest-section">
        <div className="latest-wrap">
          <div className="latest-eyebrow">{t("Principios","Principles")}</div>
          <h2>{t("Cómo trabajo","How I work")}</h2>
          <p className="latest-lead">{t("Cada proyecto es un reto distinto. En todos los casos, estos principios guían mis decisiones de Diseño.","Every project is a different challenge. In every case, these principles guide my design decisions.")}</p>
          <div className="latest-principles">{principles.map((p,i)=><div className="latest-stage" key={i}><div className="latest-card-meta">0{i+1}</div><h3>{lang==="es"?p[0]:p[1]}</h3><p>{lang==="es"?p[2]:p[3]}</p></div>)}</div>
        </div>
      </section>

      <section className="latest-section">
        <div className="latest-wrap latest-outside">
          <div><div className="latest-eyebrow">{t("Fuera del trabajo","Outside work")}</div><h2>{t("Lo que hago cuando cierro Figma","What I do when I close Figma")}</h2></div>
          <div>
            <p>{t("Soy peruano y vivo en Quito, así que buena parte de mi tiempo fuera del trabajo gira alrededor de la comida. Me gusta cocinar, probar restaurantes y encontrar lugares que me recuerden a Perú. 🇵🇪","I’m Peruvian and live in Quito, so much of my time outside work revolves around food. I enjoy cooking, trying restaurants and finding places that remind me of Peru. 🇵🇪")}</p>
            <p>{t("Cuando viajo, busco dónde comen los locales, pruebo algo nuevo y casi siempre termino comparándolo con algún plato peruano. 🍽️","When I travel, I look for where locals eat, try something new and almost always end up comparing it with a Peruvian dish. 🍽️")}</p>
            <p>{t("De ahí salió una idea que quiero desarrollar algún día: Jama, un directorio de restaurantes peruanos en el extranjero.","That inspired an idea I want to build someday: Jama, a directory of Peruvian restaurants abroad.")}</p>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter/>
  </>
}
