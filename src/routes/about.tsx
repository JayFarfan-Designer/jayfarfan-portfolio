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
          "Jay Farfan, Senior Product Designer with a background in civil engineering. Strategy, UX/UI and AI-assisted design.",
      },
      { property: "og:title", content: "About — Jay Farfan" },
      {
        property: "og:description",
        content:
          "Senior Product Designer focused on systems, strategy and responsible AI-assisted design.",
      },
    ],
  }),
});

function AboutPage() {
  const { t } = useLanguage();

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
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl">
            <p>
              {t(
                "Soy Senior Product Designer con una base poco tradicional: vengo de la ingeniería civil, y eso marcó mi forma de diseñar. Antes de pensar en pantallas, necesito entender el sistema: qué problema estamos resolviendo, qué restricciones existen, qué necesita el usuario y qué tiene sentido para el negocio.",
                "I'm a Senior Product Designer with a non-traditional foundation: I come from civil engineering, and that shaped the way I design. Before thinking about screens, I need to understand the system: what problem we are solving, what constraints exist, what the user needs and what makes sense for the business."
              )}
            </p>
            <p>
              {t(
                "Me gusta trabajar en productos desde cero y en rediseños donde UX y UI tienen que encontrarse con estrategia, tecnología y ejecución real. Disfruto ordenar problemas complejos, convertir información dispersa en decisiones claras y diseñar soluciones simples, útiles y escalables.",
                "I enjoy working on products from scratch and on redesigns where UX and UI need to meet strategy, technology and real execution. I like organizing complex problems, turning scattered information into clear decisions and designing simple, useful and scalable solutions."
              )}
            </p>
            <p>
              {t(
                "Uso herramientas de inteligencia artificial como ChatGPT, Claude y Lovable para acelerar exploración, síntesis, wireframes, contenido y prototipado. Pero no las uso para reemplazar criterio: las uso para pensar mejor, probar más rápido y llegar con más claridad a soluciones que puedan implementarse.",
                "I use artificial intelligence tools like ChatGPT, Claude and Lovable to accelerate exploration, synthesis, wireframes, content and prototyping. But I don't use them to replace judgment: I use them to think better, test faster and reach clearer solutions that can actually be implemented."
              )}
            </p>
            <p>
              {t(
                "También me gusta liderar desde la práctica: facilitar talleres, compartir conocimiento y ayudar a equipos multidisciplinarios a tomar mejores decisiones desde el diseño.",
                "I also enjoy leading through practice: facilitating workshops, sharing knowledge and helping multidisciplinary teams make better decisions through design."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial py-20 md:py-28">
        <div className="eyebrow text-lg mb-10">— {t("Principios", "Principles")}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {blocks.map((b, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-hairline bg-surface/40 p-8 md:p-10 transition-all duration-300 hover:border-foreground/25 hover:bg-surface"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-muted-foreground tabular-nums text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block w-6 h-px bg-foreground/30" />
                <span className="eyebrow text-lg">{b.label}</span>
              </div>
              <div className="font-display text-xl md:text-2xl leading-snug font-medium tracking-tight text-foreground/95 text-pretty">
                {b.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <a href="#" onClick={(e) => e.preventDefault()} className="btn-base btn-primary group">
            LinkedIn
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="btn-base btn-secondary group">
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
