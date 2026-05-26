import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { SiteFooter } from "@/components/SiteFooter";
import jayPortrait from "@/assets/jay-portrait.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Jay Farfan" },
      {
        name: "description",
        content:
          "Jay Farfan, Senior Product Designer with a background in civil engineering. Strategy, UX/UI and AI-assisted design.",
      },
      { property: "og:title", content: "About — Jay Farfan" },
      {
        property: "og:description",
        content:
          "Senior Product Designer focused on systems, strategy and responsible AI-assisted design.",
      },
      { property: "og:url", content: "https://jayfarfan.com/about" },
    ],
    links: [
      { rel: "canonical", href: "https://jayfarfan.com/about" },
      { rel: "alternate", hrefLang: "es", href: "https://jayfarfan.com/about" },
      { rel: "alternate", hrefLang: "en", href: "https://jayfarfan.com/about" },
      { rel: "alternate", hrefLang: "x-default", href: "https://jayfarfan.com/about" },
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
      <section className="container-editorial pt-12 md:pt-24 pb-12 md:pb-28">
        <div className="eyebrow text-base md:text-lg mb-4 md:mb-6">— About</div>
        <h1 className="headline-xl max-w-[16ch] text-balance whitespace-pre-line text-4xl md:text-7xl">
          {t(
            "Diseñador de producto.\nPensamiento de ingeniero.\nCriterio humano.",
            "Product designer.\nEngineer's mindset.\nHuman judgment."
          )}
        </h1>
      </section>

      <section className="border-y border-hairline">
        <div className="container-editorial py-12 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface/40 aspect-[3/4] max-w-sm">
              <img
                src={jayPortrait}
                alt="Jay Farfan — Senior Product Designer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
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

      <section className="container-editorial py-12 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-8 md:mb-20">
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
              className="group border-b border-hairline py-6 md:py-10 grid grid-cols-12 gap-3 md:gap-10 items-baseline"
            >
              <div className="col-span-12 md:col-span-3 flex items-center gap-4">
                <span className="font-mono text-muted-foreground tabular-nums text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow text-xs md:text-sm">{b.label}</span>
              </div>
              <div className="col-span-12 md:col-span-9 font-display text-xl md:text-3xl leading-[1.15] tracking-tight font-medium text-foreground/95 text-pretty">
                {b.body}
              </div>
            </li>
          ))}
        </ul>

      </section>

      <section className="border-t border-hairline">
        <div className="container-editorial py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="eyebrow text-sm mb-5">— {t("Contacto", "Contact")}</div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.1] font-medium text-foreground/95 max-w-[20ch] text-balance">
                {t("Trabajemos juntos.", "Let's work together.")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
                {t(
                  "Disponible para oportunidades full-time como Senior Product Designer y para proyectos freelance donde pueda aportar criterio, estrategia y diseño.",
                  "Available for full-time Senior Product Designer roles and freelance projects where I can bring judgment, strategy and design."
                )}
              </p>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/jayfarfan/" },
                  { label: "Email", href: "mailto:josem4n@gmail.com" },
                  { label: t("Descargar CV", "Download CV"), href: cvHref, download: cvFile },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    download={l.download ?? undefined}
                    className="btn-base btn-tertiary justify-between !py-3 !px-4 group"
                  >
                    <span className="font-display text-sm md:text-base font-medium">{l.label}</span>
                    <span className="text-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
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
