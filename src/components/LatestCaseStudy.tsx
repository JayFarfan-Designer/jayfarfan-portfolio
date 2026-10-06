import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { latestCases, type LatestCase } from "@/data/latestCases";
import { latestImages, latestImageBackgrounds } from "@/data/latestAssets";
import { SiteFooter } from "@/components/SiteFooter";

type AnyObj = Record<string, any>;

function pick(value: any, lang: "es" | "en"): string {
  if (value == null) return "";
  if (typeof value === "object" && "es" in value && "en" in value) return String(value[lang] ?? "");
  return String(value);
}
function clean(value: any, lang: "es" | "en") {
  return pick(value, lang).replace(/\[\[|\]\]/g, "");
}
function Html({ value, lang, className = "" }: { value: any; lang: "es" | "en"; className?: string }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: clean(value, lang) }} />;
}
function imageSrc(key?: string) {
  if (!key) return "";
  return (latestImages as AnyObj)[key] || "";
}
function imageBg(key?: string) {
  if (!key) return "#1b1f28";
  return (latestImageBackgrounds as AnyObj)[key] || "#1b1f28";
}

function CaseFigure({ item, lang, hero = false }: { item: AnyObj; lang: "es" | "en"; hero?: boolean }) {
  if (!item) return null;
  if (item.ph) {
    return <div className="lc-placeholder"><b>{lang === "es" ? "Imagen pendiente" : "Image pending"}</b><span>{clean(item.ph, lang)}</span></div>;
  }
  const key = item.key;
  return (
    <figure className={item.wide ? "lc-figure wide" : "lc-figure"}>
      <div className={hero ? "lc-frame hero" : "lc-frame"} style={{ background: imageBg(key) }}>
        <img src={imageSrc(key)} alt={clean(item.cap, lang)} loading={hero ? "eager" : "lazy"} />
        {key === "diners_confidential" && (
          <div className="lc-confidential">
            <strong>{lang === "es" ? "Contenido protegido por confidencialidad" : "Content protected by confidentiality"}</strong>
            <span>Diners Club · {lang === "es" ? "Acuerdo de confidencialidad" : "Confidentiality agreement"}</span>
          </div>
        )}
      </div>
      {item.cap && <figcaption><Html value={item.cap} lang={lang} />{item.capH && <strong>{clean(item.capH, lang)}</strong>}</figcaption>}
    </figure>
  );
}

function Block({ block, index, lang }: { block: AnyObj; index: number; lang: "es" | "en" }) {
  const body: React.ReactNode[] = [];
  if (block.p) block.p.forEach((p: any, i: number) => body.push(<Html key={"p"+i} value={p} lang={lang} className="lc-p" />));
  if (block.list) body.push(<ul key="list">{block.list.map((x: any, i: number) => <li key={i}><Html value={x} lang={lang} /></li>)}</ul>);
  if (block.callouts) body.push(<div key="callouts" className="lc-callouts">{block.callouts.map((c: AnyObj, i: number) => <div className="lc-callout" key={i}><strong>{clean(c.h,lang)}</strong>{c.p && <Html value={c.p} lang={lang} />}</div>)}</div>);
  if (block.callout) body.push(<div key="callout" className="lc-callout single"><Html value={block.callout} lang={lang} /></div>);
  if (block.cells) body.push(<div key="cells" className="lc-cells">{block.cells.map((c: AnyObj, i: number) => <div className="lc-cell" key={i}><div className="lc-num">{clean(c.n,lang)}</div><h4>{clean(c.h,lang)}</h4><Html value={c.p} lang={lang}/></div>)}</div>);
  if (block.capText) body.push(<div key="cap" className="lc-caption"><Html value={block.capText} lang={lang}/></div>);
  if (block.img) body.push(<CaseFigure key="img" item={block.img} lang={lang}/>);
  if (block.imgs) body.push(<div key="imgs" className="lc-images">{block.imgs.map((it: AnyObj, i: number) => <CaseFigure key={i} item={it} lang={lang}/>)}</div>);

  if (block.t === "decisions") {
    body.length = 0;
    body.push(<div key="decisions" className="lc-decisions">{block.items.map((d: AnyObj, i: number) => <div className="lc-decision" key={i}><h4><span>{String(i+1).padStart(2,"0")}</span>{clean(d.h,lang)}</h4><Html value={d.p} lang={lang}/>{d.w && <div className="lc-trade"><em>{block.wLabel ? clean(block.wLabel,lang) : (lang==="es"?"Decisión":"Decision")}</em><Html value={d.w} lang={lang}/></div>}</div>)}</div>);
  }
  if (block.t === "ai") {
    body.length = 0;
    body.push(<p key="intro" className="lc-p">{lang==="es"?"Uso IA para acelerar, no para decidir. Esto es lo que hice con ella y lo que seguí decidiendo yo.":"I use AI to speed up, not to decide. This is what I did with it and what I kept deciding myself."}</p>);
    body.push(<div key="ai" className="lc-twocol"><div><div className="lc-k">{lang==="es"?"Usé IA para":"I used AI for"}</div><ul>{block.used.map((u:any,i:number)=><li key={i}><Html value={u} lang={lang}/></li>)}</ul></div><div><div className="lc-k">{lang==="es"?"Lo que decidí yo":"What I decided myself"}</div><ul>{block.mine.map((u:any,i:number)=><li key={i}><Html value={u} lang={lang}/></li>)}</ul></div></div>);
    if (block.img) body.push(<CaseFigure key="aiimg" item={block.img} lang={lang}/>);
  }
  if (block.t === "twocol") {
    const intro = block.p ? block.p.map((p:any,i:number)=><Html key={i} value={p} lang={lang} className="lc-p"/>) : [];
    body.length = 0;
    body.push(...intro);
    body.push(<div key="cols" className="lc-twocol">{block.cols.map((c:AnyObj,i:number)=><div key={i}><div className="lc-k">{clean(c.k,lang)}</div>{c.paras ? c.paras.map((p:any,j:number)=><Html key={j} value={p} lang={lang} className="lc-p"/>) : <ul>{c.items.map((it:AnyObj,j:number)=><li key={j}>{it.p?<><strong>{clean(it.h,lang)}</strong><Html value={it.p} lang={lang}/></>:<Html value={it.h} lang={lang}/>}</li>)}</ul>}</div>)}</div>);
    if (block.callout) body.push(<div key="tc" className="lc-callout single"><Html value={block.callout} lang={lang}/></div>);
    if (block.imgs) body.push(<div key="ti" className="lc-images">{block.imgs.map((it:AnyObj,i:number)=><CaseFigure key={i} item={it} lang={lang}/>)}</div>);
  }

  return <section className="lc-block"><div className="lc-block-head"><span>{String(index+1).padStart(2,"0")}</span><h2>{clean(block.h,lang)}</h2></div><div className="lc-block-body">{body}</div></section>;
}

export function LatestCaseStudy({ caseData }: { caseData: LatestCase }) {
  const { lang } = useLanguage();
  const c = caseData as AnyObj;
  const available = (latestCases as readonly AnyObj[]).filter(x=>!x.comingSoon);
  const idx = available.findIndex(x=>x.slug===c.slug);
  const next = available[(idx+1)%available.length];
  const heroKey = c.hero || c.thumb;
  const heroItem = heroKey ? { key: heroKey, cap: c.title, wide: true } : null;

  return (
    <>
      <article className="latest-case">
        <div className="latest-wrap">
          <header className="lc-head">
            <Link to="/work" className="lc-back">← {lang==="es"?"Mi experiencia":"My experience"}</Link>
            <div className="latest-eyebrow">{c.eyebrow ? clean(c.eyebrow,lang) : `${c.num} · ${clean(c.client,lang)}`}</div>
            <h1>{clean(c.title,lang)}</h1>
            <Html value={c.summary} lang={lang} className="lc-summary"/>
            {c.summary2 && <Html value={c.summary2} lang={lang} className="lc-summary second"/>}
            {c.nda && <div className="lc-note"><b>{lang==="es"?"Sobre la confidencialidad":"About confidentiality"}</b>{lang==="es"?"Este proyecto está bajo acuerdo de confidencialidad. El caso se centra en el problema, mis decisiones y lo que cambió.":"This project is under a confidentiality agreement. The case focuses on the problem, my decisions and what changed."}</div>}
          </header>
          {heroItem && <CaseFigure item={heroItem} lang={lang} hero/>}

          <div className="lc-meta">{c.meta?.map((m:any,i:number)=><div key={i}><div className="lc-k">{clean(m[0],lang)}</div><div>{clean(m[1],lang)}</div></div>)}</div>

          {c.tldr?.one ? <div className="lc-tldr one"><Html value={c.tldr.one} lang={lang}/></div> :
            c.tldr && <div className="lc-tldr">
              <div><div className="lc-k">{c.tldr.kProblem ? clean(c.tldr.kProblem,lang):(lang==="es"?"El problema":"The problem")}</div><Html value={c.tldr.problem} lang={lang}/></div>
              <div><div className="lc-k">{c.tldr.kRole ? clean(c.tldr.kRole,lang):(lang==="es"?"Mi rol":"My role")}</div><Html value={c.tldr.role} lang={lang}/></div>
              <div><div className="lc-k">{lang==="es"?"Resultado":"Outcome"}</div><Html value={c.tldr.result} lang={lang}/></div>
            </div>}

          {!!c.metrics?.length && <div className="lc-results">{c.metrics.map((m:any,i:number)=><div key={i}><b>{clean(m[0],lang)}</b><span>{clean(m[1],lang)}</span></div>)}</div>}

          {c.blocks?.map((b:AnyObj,i:number)=><Block key={i} block={b} index={i} lang={lang}/>)}

          <div className="lc-next"><div><div className="latest-eyebrow">{lang==="es"?"Siguiente caso":"Next case"}</div><h3>{clean(next.short,lang)}</h3></div><Link className="latest-btn secondary" to="/work/$slug" params={{slug:next.slug}}>{lang==="es"?"Ver caso":"View case"} →</Link></div>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
