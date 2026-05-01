import { useLanguage } from "@/lib/language";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="container-editorial py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="font-display text-2xl">
          Jay Farfan<span className="text-muted-foreground">.</span>
        </div>
        <div className="eyebrow">
          © {new Date().getFullYear()} — {t("Diseñado y construido por Jay Farfan", "Designed & built by Jay Farfan")}
        </div>
        <div className="flex items-center gap-6 eyebrow">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-foreground link-underline">LinkedIn</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-foreground link-underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
