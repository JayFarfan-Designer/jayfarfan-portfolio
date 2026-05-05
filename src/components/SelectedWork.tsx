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
            <div className="eyebrow mb-4 text-lg">
              — {t("Proyectos seleccionados", "Selected work")}
            </div>
            <h2 className="headline-lg max-w-[18ch] text-balance">
              {t(
                "Diseño que conecta estrategia, diseño y ejecución",
                "Design that connects strategy, design and execution."
              )}
            </h2>
          </div>
          <div className="hidden md:block eyebrow text-lg text-muted-foreground">
            {String(projects.length).padStart(2, "0")} —{" "}
            {t("casos", "cases")}
          </div>
        </div>

        <div className="space-y-5 md:space-y-6">
          {projects.map((p) => {
            const content = lang === "es" ? p.es : p.en;
            const inner = (
              <article
                className={
                  "relative rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 " +
                  (p.comingSoon ? "" : "group-hover:-translate-y-1 group-hover:border-white/20")
                }
                style={{
                  background: `linear-gradient(135deg, ${p.accentVar} 0%, color-mix(in oklab, ${p.accentVar} 70%, black) 100%)`,
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.18) 0%, transparent 55%), radial-gradient(circle at 10% 90%, rgba(0,0,0,0.25) 0%, transparent 50%)",
                  }}
                />
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-6 p-8 md:p-12 lg:p-14 flex flex-col text-white">
                    <div className="flex items-center justify-between mb-10 md:mb-14">
                      <div className="flex items-center gap-3 text-lg">
                        <span className="font-mono tracking-[0.2em] opacity-80 text-lg">
                          {p.number}
                        </span>
                        <span className="block w-6 h-px bg-white/50" />
                        <span className="font-mono tracking-[0.2em] opacity-80 uppercase text-lg">
                          {p.client}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display md:text-3xl lg:text-[2rem] leading-[1.1] font-medium tracking-tight text-white max-w-[22ch] mb-6 text-balance md:text-5xl font-medium tracking-tight leading-none text-4xl">
                      {content.title}
                    </h3>
                    <p className="text-white/85 text-base md:text-[1.05rem] leading-relaxed max-w-md text-pretty">
                      {content.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {p.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.72rem] font-medium tracking-wide px-2.5 py-1 rounded-full bg-white/10 text-white/85 border border-white/15 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10 md:mt-12">
                      {p.comingSoon ? (
                        <span className="font-mono tracking-[0.2em] uppercase text-sm text-white/80">
                          {t("Próximamente", "Coming soon")}
                        </span>
                      ) : (
                        <span className="btn-base btn-secondary group/btn">
                          {t("Ver proyecto", "View project")}
                          <span className="inline-block transition-transform group-hover/btn:translate-x-1">
                            →
                          </span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto md:min-h-[360px] flex items-center justify-center">
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.18) 100%)",
                      }}
                    />
                    <ProjectVisual
                      project={p}
                      imageSrc={p.media?.hero}
                      className="relative z-10 p-6 md:p-8"
                    />
                  </div>
                </div>
              </article>
            );
            return p.comingSoon ? (
              <div key={p.slug} className="block">
                {inner}
              </div>
            ) : (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
