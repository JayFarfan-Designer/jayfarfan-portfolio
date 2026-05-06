import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Jay Farfan" },
      {
        name: "description",
        content:
          "Jay Farfan, SENIOR PRODUCT DESIGNER - SENIOR UX/UI DESIGNER with a background in civil engineering. Strategy, UX/UI and AI-assisted design.",
      },
      { property: "og:title", content: "About — Jay Farfan" },
      {
        property: "og:description",
        content:
          "SENIOR PRODUCT DESIGNER - SENIOR UX/UI DESIGNER focused on systems, strategy and responsible AI-assisted design.",
      },
    ],
  }),
});

function AboutPage() {
  const { t, lang } = useLanguage();
  const cvHref = lang === "es" ? "/CV_JayFarfan_ESP.pdf" : "/CV_JayFarfan_ENG.pdf";
  const cvFile = lang === "es" ? "CV_JayFarfan_ESP.pdf" : "CV_JayFarfan_ENG.pdf";

  const blocks = [
    {
      label: t("Cómo pienso", "How I think"),
      body: t("Sistema primero. Interfaz después.", "System first. Interface second."),
    },
    {
      label: t("Cómo diseño", "How I design"),
      body: t(
        "Estrategia, usuario, negocio y tecnología trabajando juntos.",
        "Strategy, users, business and technology working together."
      ),
    },
    {
      label: t("Cómo uso IA", "How I use AI"),
      body: t(
        "Para acelerar exploración y prototipado sin perder criterio humano.",
        "To accelerate exploration and prototyping without losing human judgment."
      ),
    },
    {
      label: t("Cómo colaboro", "How I collaborate"),
      body: t(
        "Facilitando claridad entre diseño, producto, desarrollo y stakeholders.",
        "Creating clarity between design, product, development and stakeholders."
      ),
    },
  ];

  return (
    <>
      <section className="container-editorial pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="eyebrow text-lg mb-6">— About</div>
        <h1 className="headline-xl max-w-[16ch] text-balance">
          {t(
            "Diseñador de producto. Pensamiento de ingeniero. Criterio humano.",
            "Product designer. Engineer's mindset. Human judgment."
          )}
        </h1>
      </section>

      <section className="border-y border-hairline">
        <div className="container-editorial py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <AboutMark />
          </div>
          <div className="lg:col-span-7 space-y-7 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl">
            {lang === "es" ? (
              <>
                <p>
                  Soy <span className="text-foreground">Jay</span>, Product Designer con una base poco tradicional: vengo de la ingeniería civil, y eso marcó mi forma de diseñar.
                </p>
                <p>
                  Antes de pensar en pantallas, necesito <span className="text-foreground">entender el sistema</span>: qué problema estamos resolviendo, qué necesita el usuario y qué tiene sentido para el negocio.
                </p>
                <p>
                  Me gusta trabajar en <span className="text-foreground">productos desde cero</span> y en rediseños donde UX y UI se cruzan con estrategia, tecnología y ejecución real. Disfruto ordenar problemas complejos y convertir información dispersa en <span className="text-foreground">soluciones simples, útiles y escalables</span>.
                </p>
                <p>
                  Uso herramientas de inteligencia artificial como ChatGPT, Claude y Lovable para acelerar exploración, síntesis, wireframes, contenido y prototipado. Pero <span className="text-foreground">no las uso para reemplazar criterio</span>: las uso para pensar mejor, iterar más rápido y llegar con mayor claridad a soluciones implementables.
                </p>
                <p>
                  También disfruto <span className="text-foreground">liderar desde la práctica</span>: facilitar talleres, compartir conocimiento y ayudar a equipos multidisciplinarios a tomar mejores decisiones desde diseño.
                </p>
              </>
            ) : (
              <>
                <p>
                  I'm <span className="text-foreground">Jay</span>, a Product Designer with a non-traditional foundation: I come from civil engineering, and that shaped the way I design.
                </p>
                <p>
                  Before thinking about screens, I need to <span className="text-foreground">understand the system</span>: what problem we are solving, what the user needs and what makes sense for the business.
                </p>
                <p>
                  I enjoy working on <span className="text-foreground">products from scratch</span> and on redesigns where UX and UI meet strategy, technology and real execution. I like organizing complex problems and turning scattered information into <span className="text-foreground">simple, useful and scalable solutions</span>.
                </p>
                <p>
                  I use AI tools like ChatGPT, Claude and Lovable to accelerate exploration, synthesis, wireframes, content and prototyping. But <span className="text-foreground">I don't use them to replace judgment</span>: I use them to think better, iterate faster and reach implementable solutions with more clarity.
                </p>
                <p>
                  I also enjoy <span className="text-foreground">leading through practice</span>: facilitating workshops, sharing knowledge and helping multidisciplinary teams make better decisions through design.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow text-lg mb-4">— {t("Principios", "Principles")}</div>
            <h2 className="headline-lg text-balance max-w-[14ch]">
              {t("Cómo trabajo.", "How I work.")}
            </h2>
          </div>
          <div className="lg:col-span-8 lg:pt-12">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl text-pretty">
              {t(
                "Cuatro convicciones que guían cada proyecto.",
                "Four convictions that guide every project."
              )}
            </p>
          </div>
        </div>

        <ul className="border-t border-hairline">
          {blocks.map((b, i) => (
            <li
              key={i}
              className="group border-b border-hairline py-8 md:py-10 grid grid-cols-12 gap-6 md:gap-10 items-baseline"
            >
              <div className="col-span-12 md:col-span-3 flex items-center gap-4">
                <span className="font-mono text-muted-foreground tabular-nums text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow text-xs md:text-sm">{b.label}</span>
              </div>
              <div className="col-span-12 md:col-span-9 font-display text-2xl md:text-3xl leading-[1.15] tracking-tight font-medium text-foreground/95 text-pretty">
                {b.body}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap gap-4">
          <a href="https://www.linkedin.com/in/jayfarfan/" target="_blank" rel="noopener noreferrer" className="btn-base btn-primary group">
            LinkedIn
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a href={cvHref} download={cvFile} className="btn-base btn-secondary group">
            {t("Descargar CV", "Download CV")}
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function AboutMark() {
  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-xs h-auto" fill="none">
      <circle cx="160" cy="160" r="120" stroke="currentColor" strokeOpacity="0.2" />
      <circle cx="160" cy="160" r="80" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="160" cy="160" r="40" stroke="currentColor" strokeOpacity="0.55" />
      <line x1="20" y1="160" x2="300" y2="160" stroke="currentColor" strokeOpacity="0.18" />
      <line x1="160" y1="20" x2="160" y2="300" stroke="currentColor" strokeOpacity="0.18" />
      <circle cx="160" cy="160" r="4" fill="currentColor" />
      <circle cx="240" cy="160" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="160" cy="80" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="80" cy="160" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="160" cy="240" r="3" fill="currentColor" opacity="0.7" />
      <text x="160" y="305" textAnchor="middle" className="font-mono" fontSize="9" fill="currentColor" opacity="0.5">
        SYSTEM · USER · BUSINESS · TECH
      </text>
    </svg>
  );
}
