import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const cvHref = lang === "es" ? "/CV_JayFarfan_ESP.pdf" : "/CV_JayFarfan_ENG.pdf";
  const cvFile = lang === "es" ? "CV_JayFarfan_ESP.pdf" : "CV_JayFarfan_ENG.pdf";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/#work", label: t("Proyectos", "Work") },
    { href: "/about", label: t("Sobre mí", "About") },
    { href: "/#contact", label: t("Contacto", "Contact") },
  ];

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-hairline"
          : "bg-transparent")
      }
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="group inline-flex items-center gap-2.5 leading-none">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background font-display text-[0.78rem] font-semibold tracking-tight">
            JF
          </span>
          <span className="font-display font-medium tracking-tight text-3xl">
            Jay Farfan
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-foreground/75 hover:text-foreground transition-colors link-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href={cvHref}
            download={cvFile}
            className="text-sm text-foreground/75 hover:text-foreground transition-colors link-underline"
          >
            {t("Descargar CV", "Download CV")}
          </a>
          <LangToggle lang={lang} setLang={setLang} />
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Menu"
        >
          <span className={"w-5 h-px bg-foreground transition-transform " + (open ? "translate-y-[3px] rotate-45" : "")} />
          <span className={"w-5 h-px bg-foreground transition-opacity " + (open ? "opacity-0" : "")} />
          <span className={"w-5 h-px bg-foreground transition-transform " + (open ? "-translate-y-[3px] -rotate-45" : "")} />
        </button>
      </div>

      <div
        className={
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500 border-t border-hairline " +
          (open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <div className="container-editorial py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-medium"
            >
              {item.label}
            </a>
          ))}
          <a href={cvHref} download={cvFile} onClick={() => setOpen(false)} className="font-display text-2xl font-medium">
            {t("Descargar CV", "Download CV")}
          </a>
          <div className="pt-4">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </div>
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: "es" | "en";
  setLang: (l: "es" | "en") => void;
}) {
  return (
    <div className="inline-flex items-center font-mono text-[0.68rem] tracking-[0.18em] uppercase border border-hairline rounded-full p-0.5">
      <button
        onClick={() => setLang("es")}
        className={
          "px-2.5 py-1 rounded-full transition-colors " +
          (lang === "es"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground")
        }
      >
        ESP
      </button>
      <button
        onClick={() => setLang("en")}
        className={
          "px-2.5 py-1 rounded-full transition-colors " +
          (lang === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground")
        }
      >
        ENG
      </button>
    </div>
  );
}
