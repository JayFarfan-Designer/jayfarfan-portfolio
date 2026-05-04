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
                "Diseño que conecta estrategia, diseño y ejecución.",
                "Design that connects strategy, design and execution."
              )}
            </h2>
          </div>
...
                      <div className="flex items-center justify-between mb-10 md:mb-14">
                        <div className="flex items-center gap-3">
                          <span className="font-mono tracking-[0.2em] opacity-80 text-xl">
                            {p.number}
                          </span>
                          <span className="block w-6 h-px bg-white/50" />
                          <span className="font-mono tracking-[0.2em] opacity-80 uppercase text-xl">
                            {p.client}
                          </span>
                        </div>
                        <span className="font-mono tracking-[0.2em] uppercase opacity-70 px-2.5 py-1 rounded-full border border-white/25 text-xs">
                          {p.comingSoon
                            ? t("Próximamente", "Coming soon")
                            : "Case Study"}
                        </span>
                      </div>

                      <h3 className="font-display md:text-3xl lg:text-[2rem] leading-[1.1] font-medium tracking-tight text-white max-w-[22ch] mb-6 text-balance text-4xl">
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
                        <span className="inline-flex items-center gap-2 text-white font-medium link-underline text-xl">
                          {p.comingSoon
                            ? t("Próximamente", "Coming soon")
                            : t("Ver caso", "View case study")}
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto md:min-h-[440px] flex items-center justify-center">
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
                        className="relative z-10 p-8 md:p-10"
                      />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
