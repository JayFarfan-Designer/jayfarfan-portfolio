import { useLanguage } from "@/lib/language";

export function ContactSection() {
  const { t, lang } = useLanguage();
  const cvHref = lang === "es" ? "/CV_JayFarfan_ESP.pdf" : "/CV_JayFarfan_ENG.pdf";

  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jayfarfan/" },
    { label: "Email", href: "mailto:josem4n@gmail.com" },
    { label: t("Descargar CV", "Download CV"), href: cvHref, download: true },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 md:py-40 border-t border-hairline overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }}
      />
      <div className="container-editorial relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="eyebrow text-base md:text-lg mb-4 md:mb-6">— {t("Contacto", "Contact")}</div>
            <h2 className="headline-xl max-w-[20ch] text-balance text-4xl md:text-6xl">
              {t(
                "Abierto a nuevos retos, equipos y productos por construir",
                "Open to new challenges, teams and products to build."
              )}
            </h2>
            <p className="mt-6 md:mt-10 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
              {t(
                "Actualmente estoy disponible para oportunidades full-time como Senior Product Designer y/o Lider de equipos.\nTambién me interesan proyectos freelance donde pueda ayudarte a resolver problemas complejos y diseñar productos digitales increibles.",
                "I'm currently available for full-time opportunities as a Senior Product Designer, as well as freelance projects where I can help organize complex problems and turn them into clear, useful and scalable digital solutions."
              )}
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <div className="eyebrow text-base md:text-lg mb-4 md:mb-5">{t("Conversemos", "Let's talk")}</div>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  download={l.download ? true : undefined}
                  className="btn-base btn-tertiary justify-between !py-4 !px-5 group"
                >
                  <span className="font-display text-base md:text-lg font-medium">
                    {l.label}
                  </span>
                  <span className="text-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
