import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/#work" as const, label: t("Proyectos", "Work") },
    { to: "/about" as const, label: "About" },
    { to: "/#contact" as const, label: "Contact" },
  ];

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-hairline"
          : "bg-transparent")
      }
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl md:text-2xl tracking-tight leading-none">
          Jay Farfan<span className="text-muted-foreground">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              className="eyebrow hover:text-foreground transition-colors link-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="eyebrow hover:text-foreground transition-colors link-underline"
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

      {/* Mobile menu */}
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
              href={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-2xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="font-display text-2xl"
          >
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
    <div className="inline-flex items-center gap-0 font-mono text-[0.7rem] tracking-[0.18em] uppercase border border-hairline rounded-full p-1">
      <button
        onClick={() => setLang("es")}
        className={
          "px-3 py-1 rounded-full transition-colors " +
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
          "px-3 py-1 rounded-full transition-colors " +
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
