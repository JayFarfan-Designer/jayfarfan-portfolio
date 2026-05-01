import { useLanguage } from "@/lib/language";

export function UXProcess() {
  const { t } = useLanguage();
  const steps = [
    { es: "Problem Finding", en: "Problem Finding" },
    { es: "Problem Framing", en: "Problem Framing" },
    { es: "Solution Shaping", en: "Solution Shaping" },
    { es: "Solution Delivery", en: "Solution Delivery" },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">— UX Process</div>
            <h2 className="headline-lg text-balance">
              {t(
                "Diseñar bien empieza por encontrar el problema correcto.",
                "Good design starts by finding the right problem."
              )}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-xl">
              {t(
                "Trabajo con una mentalidad user-centric, combinando pensamiento sistémico, estrategia de producto, UX/UI e IA aplicada con criterio. Mi proceso busca entender el contexto, ordenar restricciones y convertir decisiones complejas en soluciones digitales claras, útiles y viables.",
                "I work with a user-centric mindset, combining systems thinking, product strategy, UX/UI and responsible AI-assisted design. My process focuses on understanding context, organizing constraints and turning complex decisions into clear, useful and viable digital solutions."
              )}
            </p>

            {/* Process visual: chaos → clarity */}
            <div className="mt-14 rounded-2xl border border-hairline bg-surface p-8 md:p-12">
              <ProcessIllustration />
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-display text-lg leading-tight">
                      {t(s.es, s.en)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessIllustration() {
  return (
    <svg viewBox="0 0 800 160" className="w-full h-auto" fill="none">
      {/* knot */}
      <g transform="translate(40,80)" stroke="currentColor" strokeWidth="1.2" opacity="0.85">
        <path d="M 0 0 C -10 -30, 30 -40, 40 -10 S 10 30, -10 20 S -30 -10, 10 -20 S 50 0, 30 25" />
        <path d="M -15 -10 C 5 -30, 25 10, 5 25" />
        <path d="M 5 -25 C 30 -10, -10 35, 25 15" />
      </g>
      {/* loops becoming structured */}
      <g transform="translate(220,80)" stroke="currentColor" strokeWidth="1.2" opacity="0.7">
        <circle cx="0" cy="0" r="18" />
        <circle cx="22" cy="0" r="14" />
        <circle cx="40" cy="0" r="10" />
      </g>
      {/* grid forming */}
      <g transform="translate(380,50)" stroke="currentColor" strokeWidth="1" opacity="0.6">
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <rect key={`${r}-${c}`} x={c * 18} y={r * 18} width="12" height="12" />
          ))
        )}
      </g>
      {/* shaped solution: single rounded rect */}
      <g transform="translate(540,55)">
        <rect width="80" height="50" rx="10" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="40" cy="25" r="4" fill="currentColor" />
      </g>
      {/* arrow / final dot */}
      <g transform="translate(700,80)">
        <line x1="-20" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1.2" />
        <polyline points="32,-6 40,0 32,6" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="60" cy="0" r="5" fill="currentColor" />
      </g>
    </svg>
  );
}
