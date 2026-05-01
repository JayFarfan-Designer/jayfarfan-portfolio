import { useLanguage } from "@/lib/language";
import { NodeNetwork } from "./NodeNetwork";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden border-b border-hairline">
      <NodeNetwork className="opacity-60" />
      {/* radial fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, transparent 0%, var(--color-background) 75%)",
        }}
      />
      <div className="container-editorial relative w-full pb-16 md:pb-24 pt-32">
        <div className="flex items-center gap-3 mb-10 animate-fade-up" style={{ animationDelay: "0ms" }}>
          <span className="block w-8 h-px bg-foreground/60" />
          <span className="eyebrow">Senior Product Designer</span>
        </div>

        <div className="eyebrow text-foreground/80 mb-6 animate-fade-up" style={{ animationDelay: "60ms" }}>
          Jay Farfan
        </div>

        <h1 className="headline-xl text-balance max-w-[18ch] animate-fade-up" style={{ animationDelay: "120ms" }}>
          {t(
            "Resuelvo problemas complejos combinando estrategia, criterio humano e inteligencia artificial.",
            "I solve complex problems by combining strategy, human judgment and artificial intelligence."
          )}
        </h1>

        <p
          className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground text-pretty animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          {t(
            "Diseño productos digitales que conectan usuarios, negocio y tecnología para crear soluciones simples, escalables y listas para implementarse.",
            "I design digital products that connect users, business and technology to create simple, scalable and implementation-ready solutions."
          )}
        </p>

        <div
          className="mt-10 eyebrow text-foreground/70 animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          Product Design <span className="text-muted-foreground/60 mx-2">·</span>
          UX Strategy <span className="text-muted-foreground/60 mx-2">·</span>
          Product Thinking <span className="text-muted-foreground/60 mx-2">·</span>
          AI-assisted Design
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "320ms" }}>
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-foreground text-background rounded-full px-6 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            {t("Ver proyectos", "View work")}
            <span className="inline-block transition-transform group-hover:translate-x-1">↓</span>
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-3 border border-hairline rounded-full px-6 py-3.5 text-sm font-medium transition-colors hover:bg-surface-elevated"
          >
            {t("Descargar CV", "Download CV")}
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-center gap-3">
        <span className="eyebrow rotate-90 origin-center mb-6">Scroll</span>
        <span className="block w-px h-10 bg-foreground/30 animate-pulse" />
      </div>
    </section>
  );
}
