import { useLanguage } from "@/lib/language";

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-hairline overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 60%)",
        }}
      />
      <div className="container-editorial relative">
        <div className="eyebrow mb-6">— Contact</div>
        <h2 className="headline-xl max-w-[20ch] text-balance">
          {t(
            "Abierto a nuevos retos, equipos y productos por construir.",
            "Open to new challenges, teams and products to build."
          )}
        </h2>
        <p className="mt-10 max-w-2xl text-base md:text-lg text-muted-foreground text-pretty">
          {t(
            "Actualmente estoy disponible para oportunidades full-time como Senior Product Designer, así como proyectos freelance donde pueda ayudar a ordenar problemas complejos y convertirlos en soluciones digitales claras, útiles y escalables.",
            "I'm currently available for full-time opportunities as a Senior Product Designer, as well as freelance projects where I can help organize complex problems and turn them into clear, useful and scalable digital solutions."
          )}
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl">
          {[
            { label: "LinkedIn", href: "#" },
            { label: "Email", href: "mailto:hello@jayfarfan.com" },
            { label: t("Descargar CV", "Download CV"), href: "#" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => l.href === "#" && e.preventDefault()}
              className="group flex items-center justify-between rounded-2xl border border-hairline px-6 py-5 hover:bg-surface-elevated transition-colors"
            >
              <span className="font-display text-xl">{l.label}</span>
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
