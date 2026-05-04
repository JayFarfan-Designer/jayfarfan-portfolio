import { useLanguage } from "@/lib/language";
import { NodeNetwork } from "./NodeNetwork";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-hairline">
      <NodeNetwork className="opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, transparent 0%, var(--color-background) 78%)",
        }}
      />
      <div className="container-editorial relative w-full pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-12 xl:col-span-12 max-w-[1400px]">
            <div className="flex items-center gap-3 mb-10 animate-fade-up">
              <span className="block w-8 h-px bg-foreground/60" />
              <span className="eyebrow text-base">Senior Product Designer</span>
            </div>

            <h1
              className="headline-xl text-balance max-w-[22ch] animate-fade-up text-7xl"
              style={{ animationDelay: "100ms" }}
            >
              {t(
                "Resuelvo problemas complejos combinando estrategia, criterio humano e inteligencia artificial",
                "I solve complex problems by combining strategy, human judgment and artificial intelligence."
              )}
            </h1>

            <div
              className="mt-12 animate-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              <div className="eyebrow text-lg text-foreground/70 leading-relaxed whitespace-nowrap overflow-x-auto">
                Product Design <span className="text-muted-foreground/50 mx-1.5">·</span>
                UX Strategy <span className="text-muted-foreground/50 mx-1.5">·</span>
                Product Thinking <span className="text-muted-foreground/50 mx-1.5">·</span>
                AI-assisted Design
              </div>
            </div>

            <div
              className="mt-14 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              <a href="#work" className="btn-base btn-primary group text-xl">
                {t("Ver proyectos", "View work")}
                <span className="inline-block transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="btn-base btn-secondary group text-xl"
              >
                {t("Descargar CV", "Download CV")}
                <span className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-center gap-3">
        <span className="eyebrow text-lg rotate-90 origin-center mb-6">Scroll</span>
        <span className="block w-px h-10 bg-foreground/30 animate-pulse" />
      </div>
    </section>
  );
}
