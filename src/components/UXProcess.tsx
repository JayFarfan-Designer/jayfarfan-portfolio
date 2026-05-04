import { useLanguage } from "@/lib/language";

export function UXProcess() {
  const { t } = useLanguage();
  const steps = [
    {
      es: "Problem Finding",
      en: "Problem Finding",
      d_es: "Detectar señales y entender el contexto.",
      d_en: "Detect signals and understand context.",
    },
    {
      es: "Problem Framing",
      en: "Problem Framing",
      d_es: "Ordenar restricciones y definir el problema.",
      d_en: "Organize constraints and define the problem.",
    },
    {
      es: "Solution Shaping",
      en: "Solution Shaping",
      d_es: "Explorar, prototipar y validar caminos.",
      d_en: "Explore, prototype and validate paths.",
    },
    {
      es: "Solution Delivery",
      en: "Solution Delivery",
      d_es: "Diseñar para implementación real.",
      d_en: "Design for real implementation.",
    },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4 text-lg">— {t("Proceso UX", "UX Process")}</div>
            <h2 className="headline-lg text-balance">
              {t(
                "Diseñar bien empieza por encontrar el problema correcto.",
                "Good design starts by finding the right problem."
              )}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-14">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-pretty max-w-xl">
              {t(
                "\nTrabajo con una mentalidad centrada en el usuario, combinando pensamiento sistémico, estrategia de producto, UX/UI e IA aplicada con criterio. \nMi proceso busca entender el contexto, definirproblemas y convertir decisiones complejas en soluciones digitales claras, útiles y viables.",
                "I work with a user-centric mindset, combining systems thinking, product strategy, UX/UI and responsible AI-assisted design. My process focuses on understanding context, organizing constraints and turning complex decisions into clear, useful and viable digital solutions."
              )}
            </p>
          </div>
        </div>

        {/* Chaos → clarity illustration */}
        <div className="mt-16 md:mt-20 rounded-3xl border border-hairline bg-gradient-to-b from-surface to-background p-8 md:p-14 overflow-hidden">
          <ChaosToClarity />

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-4 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-background p-6 md:p-7 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-muted-foreground tabular-nums text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block w-6 h-px bg-foreground/30" />
                </div>
                <div className="font-display text-base md:text-lg font-medium tracking-tight">
                  {t(s.es, s.en)}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {t(s.d_es, s.d_en)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChaosToClarity() {
  return (
    <svg
      viewBox="0 0 1000 220"
      className="w-full h-auto text-foreground"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="fade" x1="0" x2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Stage 1 — chaos: tangled scribble */}
      <g transform="translate(80,110)" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1">
        <path d="M -55 -40 C -20 -80, 40 -70, 55 -25 S 30 50, -10 35 S -70 -5, -25 -25 S 60 -10, 40 40 S -50 50, -60 0" />
        <path d="M -40 -20 C -10 -50, 30 -40, 35 -10 S 5 30, -20 20" />
        <path d="M 0 -45 C 25 -25, -15 30, 25 15" />
        <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.6" />
      </g>

      {/* Stage 2 — orbital framing */}
      <g transform="translate(310,110)" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1">
        <ellipse cx="0" cy="0" rx="65" ry="32" />
        <ellipse cx="0" cy="0" rx="65" ry="32" transform="rotate(60)" />
        <ellipse cx="0" cy="0" rx="65" ry="32" transform="rotate(-60)" />
        <circle cx="0" cy="0" r="4" fill="currentColor" />
      </g>

      {/* Stage 3 — grid forming */}
      <g transform="translate(540,75)" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1">
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => {
            const filled = (r + c) % 4 === 0;
            return (
              <rect
                key={`${r}-${c}`}
                x={c * 16}
                y={r * 16}
                width="10"
                height="10"
                rx="2"
                fill={filled ? "currentColor" : "none"}
                fillOpacity={filled ? 0.7 : 0}
              />
            );
          })
        )}
      </g>

      {/* Stage 4 — single resolved shape */}
      <g transform="translate(770,75)">
        <rect width="120" height="70" rx="14" stroke="currentColor" strokeOpacity="0.85" strokeWidth="1.2" />
        <rect x="14" y="14" width="44" height="6" rx="3" fill="currentColor" opacity="0.85" />
        <rect x="14" y="26" width="80" height="4" rx="2" fill="currentColor" opacity="0.45" />
        <rect x="14" y="34" width="64" height="4" rx="2" fill="currentColor" opacity="0.45" />
        <rect x="14" y="48" width="36" height="14" rx="7" fill="currentColor" opacity="0.9" />
      </g>

      {/* Connecting line */}
      <line
        x1="80"
        y1="180"
        x2="920"
        y2="180"
        stroke="url(#fade)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      {/* dots under each stage */}
      {[80, 310, 565, 830].map((x, i) => (
        <g key={i} transform={`translate(${x},180)`}>
          <circle r="3" fill="currentColor" opacity={0.4 + i * 0.15} />
        </g>
      ))}
    </svg>
  );
}
