import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { latestCases } from "@/data/latestCases";
import { latestImages, latestImageBackgrounds } from "@/data/latestAssets";
import { useLanguage } from "@/lib/language";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/work")({ component: WorkPage });

function pick(v: any, lang: "es" | "en") {
  if (v && typeof v === "object" && "es" in v) return String(v[lang] ?? "");
  return String(v ?? "").replace(/\[\[|\]\]/g,"");
}
function WorkPage() {
  const { lang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // TanStack's file-route generator may nest work.$slug under /work.
  // When a case-study child route is active, render it here instead of
  // keeping the experience listing on screen.
  if (pathname !== "/work" && pathname !== "/work/") {
    return <Outlet />;
  }

  return (
    <>
      <main className="latest-work-page">
        <div className="latest-wrap">
          <div className="latest-eyebrow">{lang==="es"?"Experiencia":"Experience"}</div>
          <h1>{lang==="es"?"Proyectos donde diseñar también significó decidir.":"Projects where designing also meant deciding."}</h1>
          <div className="latest-work-intro">
            <p>{lang==="es"?"He trabajado en fintech, govtech, marketplaces y e-commerce.":"I’ve worked in fintech, govtech, marketplaces and e-commerce."}</p>
            <p>{lang==="es"?"En estos casos muestro cómo entendí el problema, qué decisiones tomé y qué impacto tuvieron en el producto.":"In these cases I show how I understood the problem, what decisions I made and what impact they had on the product."}</p>
          </div>
          <div className="latest-all-projects">
            {(latestCases as readonly any[]).map((c:any)=>{
              const key=c.slug==="diners" ? "diners_cover" : c.thumb;
              const img=(latestImages as any)[key];
              const bg=(latestImageBackgrounds as any)[key] || "#1b1f28";
              const body=<>
                <div className="latest-thumb" style={{background:bg}}>{img&&<img src={img} alt="" loading="lazy"/>}{c.comingSoon&&<span className="latest-coming">{lang==="es"?"Próximamente":"Coming soon"}</span>}</div>
                <div className="latest-card-body">
                  <div className="latest-card-meta">{c.num} · {pick(c.client,lang)}</div>
                  <h3>{pick(c.short,lang)}</h3>
                  <p>{(c.tags||[]).slice(0,3).join(" · ")}</p>
                  <span>{c.comingSoon ? (lang==="es"?"Caso de estudio en preparación":"Case study in preparation") : (lang==="es"?"Ver caso →":"View case →")}</span>
                </div>
              </>;
              return c.comingSoon
                ? <div key={c.slug} className="latest-card coming">{body}</div>
                : <Link key={c.slug} className="latest-card" to="/work/$slug" params={{slug:c.slug}}>{body}</Link>
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
