import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/language";
import { ProjectVisual } from "./ProjectVisual";

export function SelectedWork() {
  const { t, lang } = useLanguage();

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex items-end justify-between mb-12 md:mb-20 gap-6">
          <div>
            <div className="eyebrow mb-4">— {t("Proyectos seleccionados", "Selected work")}</div>
            <h2 className="headline-lg max-w-[16ch] text-balance">
              {t(
                "Trabajo que conecta estrategia, diseño y ejecución.",
                "Work that connects strategy, design and execution."
              )}
            </h2>
          </div>
          <div className="hidden md:block eyebrow text-muted-foreground">
            {projects.length} {t("casos", "cases")}
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((p, idx) => {
            const content = lang === "es" ? p.es : p.en;
            return (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <article
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-hairline transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ backgroundColor: p.accentVar }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    {/* Text */}
                    <div className="md:col-span-6 p-8 md:p-10 lg:p-14 flex flex-col text-white relative">
                      <div className="flex items-center justify-between mb-8 md:mb-12">
                        <span className="font-mono text-xs tracking-[0.2em] opacity-80">
                          {p.number} / {String(projects.length).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-xs tracking-[0.2em] uppercase opacity-80">
                          {p.comingSoon ? t("Próximamente", "Coming soon") : "Case Study"}
                        </span>
                      </div>

                      <div className="eyebrow text-white/70 mb-3">{p.client}</div>
                      <h3 className="headline-md text-white max-w-[20ch] mb-5 text-balance">
                        {content.title}
                      </h3>
                      <p className="text-white/85 text-sm md:text-base max-w-md text-pretty">
                        {content.description}
                      </p>

                      <div className="mt-auto pt-10 flex flex-wrap gap-x-2 gap-y-2 text-xs">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full border border-white/30 text-white/85"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-10">
                        <span className="inline-flex items-center gap-2 text-white text-sm font-medium link-underline">
                          {p.comingSoon
                            ? t("Próximamente", "Coming soon")
                            : t("Ver caso", "View case study")}
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>

                    {/* Visual slot — modular, easily swappable for final PNG */}
                    <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto md:min-h-[420px] flex items-center justify-center bg-black/15">
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.18) 0%, transparent 50%)",
                        }}
                      />
                      <ProjectVisual project={p} className="relative z-10 p-6" />
                    </div>
                  </div>
                </article>
                {/* index overlay reveal */}
                <div className="sr-only">{idx + 1}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
