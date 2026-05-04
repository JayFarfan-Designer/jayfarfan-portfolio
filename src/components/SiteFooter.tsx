import { useLanguage } from "@/lib/language";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-hairline mt-16">
      <div className="container-editorial py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="inline-flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background font-display text-[0.78rem] font-semibold">
            JF
          </span>
          <span className="font-display text-sm font-medium tracking-tight">
            Jay Farfan
          </span>
        </div>
        <div className="eyebrow text-lg">
          © {new Date().getFullYear()} —{" "}
          {t(
            "Diseñado y construido por Jay Farfan",
            "Designed & built by Jay Farfan"
          )}
        </div>
        <div className="flex items-center gap-6 eyebrow text-lg">
          <a
            href="https://www.linkedin.com/in/jayfarfan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground link-underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:josem4n@gmail.com"
            className="hover:text-foreground link-underline"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
