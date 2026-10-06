import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contacto · Jay Farfán" },
      { name: "description", content: "Contacta a Jay Farfán para oportunidades de Product Design, UX/UI y proyectos freelance." },
      { property: "og:url", content: "https://jayfarfan.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://jayfarfan.com/contact" }],
  }),
});

function ContactPage() {
  const { lang, t } = useLanguage();
  const cv = lang === "es" ? "/CV_JayFarfan_ESP.pdf" : "/CV_JayFarfan_ENG.pdf";

  return (
    <>
      <main className="latest-contact-page">
        <section className="latest-section">
          <div className="latest-wrap latest-contact-page-grid">
            <div>
              <div className="latest-eyebrow">{t("Contacto","Contact")}</div>
              <h1>{t("Trabajemos juntos. Conversemos.","Let’s work together. Let’s talk.")}</h1>
            </div>

            <div className="latest-contact-copy">
              <p>
                {t(
                  "Trabajo desde Quito, Ecuador, y estoy abierto a oportunidades como Product Designer / UX/UI Designer y a proyectos freelance. Colaboro en remoto con equipos de cualquier parte del mundo.",
                  "I’m based in Quito, Ecuador, and open to Product Designer / UX/UI Designer opportunities and freelance projects. I collaborate remotely with teams anywhere in the world."
                )}
              </p>

              <div className="latest-contact-options">
                <a href="mailto:josem4n@gmail.com">
                  <span>Email</span>
                  <strong>josem4n@gmail.com</strong>
                  <b>↗</b>
                </a>
                <a href="https://www.linkedin.com/in/jayfarfan/" target="_blank" rel="noreferrer">
                  <span>LinkedIn</span>
                  <strong>linkedin.com/in/jayfarfan</strong>
                  <b>↗</b>
                </a>
              </div>

              <div className="latest-actions">
                <a className="latest-btn primary" href="mailto:josem4n@gmail.com">{t("Conversemos","Let’s talk")} ↗</a>
                <a className="latest-btn secondary" href={cv} download>{t("Descargar CV","Download CV")} ↓</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
