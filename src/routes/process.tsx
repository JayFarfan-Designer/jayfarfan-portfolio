import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { SiteFooter } from "@/components/SiteFooter";
import { LatestContactSection } from "@/components/LatestSharedSections";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/process")({ component: ProcessPage });

const stages = [
  { n:"01", name:{es:"Entender",en:"Understand"}, sub:{es:"Abrir el problema",en:"Open the problem"},
    what:{es:"Empiezo hablando con usuarios, revisando datos y entendiendo cómo funciona hoy el producto. También necesito conocer las restricciones de negocio y tecnología antes de proponer una solución.",en:"I start by talking to users, reviewing data and understanding how the product works today. I also need to know the business and technology constraints before proposing a solution."},
    ai:{es:"Claude me ayuda a ordenar entrevistas, detectar temas recurrentes y preparar síntesis. Después reviso los hallazgos y vuelvo a las fuentes antes de convertirlos en decisiones.",en:"Claude helps me organize interviews, spot recurring themes and prepare syntheses. Then I review the findings and go back to the sources before turning them into decisions."},
    me:{es:"Qué investigar, con quién hablar y qué señales realmente importan.",en:"What to research, who to talk to and which signals really matter."},
    ev:[["diners",{es:"17 entrevistas, 50+ fricciones",en:"17 interviews, 50+ frictions"}],["certezia",{es:"Benchmark de 6 referentes",en:"Benchmark of 6 references"}]] },
  { n:"02", name:{es:"Enfocar",en:"Focus"}, sub:{es:"Cerrar el problema",en:"Close the problem"},
    what:{es:"Con la información suficiente, intento convertir todo lo aprendido en un problema concreto. Priorizo qué resolver ahora, qué dejar fuera y cómo sabremos si la solución funciona.",en:"With enough information, I try to turn everything I’ve learned into a concrete problem. I prioritize what to solve now, what to leave out and how we’ll know the solution works."},
    ai:{es:"La uso para comparar patrones, ordenar escenarios y explorar distintas formas de estructurar la información.",en:"I use it to compare patterns, organize scenarios and explore different ways of structuring information."},
    me:{es:"La prioridad, el alcance y qué entra realmente en la primera versión.",en:"The priority, the scope and what really goes into the first version."},
    ev:[["certezia",{es:"Arquetipos y alcance del Release 1",en:"Archetypes and Release 1 scope"}],["karway",{es:"Roadmap",en:"Roadmap"}]] },
  { n:"03", name:{es:"Explorar",en:"Explore"}, sub:{es:"Abrir la solución",en:"Open the solution"},
    what:{es:"Pruebo distintas maneras de resolver el problema antes de comprometerme con una sola. Trabajo con flujos, wireframes y prototipos hasta encontrar una dirección que tenga sentido para usuarios y equipo.",en:"I try different ways of solving the problem before committing to one. I work with flows, wireframes and prototypes until I find a direction that makes sense for users and the team."},
    ai:{es:"Uso Claude Design y ChatGPT Sites para probar ideas rápidamente y Lookback Eureka AI para acelerar la revisión de sesiones de testing.",en:"I use Claude Design and ChatGPT Sites to test ideas quickly and Lookback Eureka AI to speed up the review of testing sessions."},
    me:{es:"Qué ideas vale la pena probar, con quién probarlas y cuándo tenemos suficiente evidencia para avanzar.",en:"Which ideas are worth testing, with whom, and when we have enough evidence to move forward."},
    ev:[["certezia",{es:"5 sesiones · NPS 8/10",en:"5 sessions · NPS 8/10"}],["pablo",{es:"Conversación, dashboard y landing",en:"Conversation, dashboard and landing"}]] },
  { n:"04", name:{es:"Construir",en:"Build"}, sub:{es:"Cerrar la solución",en:"Close the solution"},
    what:{es:"Cuando la dirección está clara, trabajo con desarrollo para convertirla en producto: estados, casos límite, comportamiento responsive y detalles que suelen aparecer cuando una pantalla deja de ser un prototipo.",en:"Once the direction is clear, I work with engineering to turn it into a product: states, edge cases, responsive behavior and the details that tend to show up when a screen stops being a prototype."},
    ai:{es:"Claude Design y ChatGPT Sites me sirven para construir prototipos funcionales y sitios que permiten discutir una idea con algo más cercano al producto real.",en:"Claude Design and ChatGPT Sites help me build functional prototypes and websites, so we can discuss an idea with something closer to the real product."},
    me:{es:"Qué se especifica, qué puede simplificarse y cuándo una restricción técnica obliga a revisar el diseño.",en:"What gets specified, what can be simplified and when a technical constraint means the design needs another look."},
    ev:[["certezia",{es:"24 preguntas técnicas",en:"24 technical questions"}],["minsa",{es:"Design System escalable",en:"Scalable Design System"}]] },
] as const;

const skills = [
  {h:{es:"Estrategia de producto",en:"Product strategy"},s:["Pensamiento sistémico|Systems thinking","Product discovery","Priorización (MoSCoW)|Prioritisation (MoSCoW)","Roadmap","Definición de MVP|MVP definition","Alineación negocio-usuario|Business–user alignment"],ev:[["certezia","Certezia"],["karway","Karway"]]},
  {h:{es:"Research",en:"Research"},s:["Entrevistas y trabajo de campo|Interviews and fieldwork","Usability testing","Journey mapping","Benchmarking","Arquetipos|Archetypes","Priorización de insights|Insight prioritisation"],ev:[["diners","Diners"],["certezia","Certezia"]]},
  {h:{es:"UX / UI",en:"UX / UI"},s:["User flows","Arquitectura de información|Information architecture","Prototipos de alta fidelidad|High-fidelity prototypes","Design Systems","Accesibilidad|Accessibility","Contexto de uso|Context of use","UX Writing"],ev:[["minsa","MINSA"],["certezia","Certezia"]]},
  {h:{es:"Colaboración con ingeniería",en:"Working with engineering"},s:["Estados y casos límite|States and edge cases","Handoff con desarrollo|Handoff with engineering","Diseño bajo restricciones|Design within constraints","Preguntas técnicas antes de decidir|Technical questions before deciding","Agile / Scrum","Facilitación de talleres|Workshop facilitation"],ev:[["certezia","Certezia"],["diners","Diners"]]},
  {h:{es:"IA aplicada al diseño",en:"AI applied to design"},s:["Claude","ChatGPT","Claude Design","ChatGPT Sites","Lookback Eureka AI","Síntesis y prototipado asistidos|Assisted synthesis and prototyping"],ev:[["certezia","Certezia"],["diners","Diners"]],tool:true},
  {h:{es:"Base técnica",en:"Technical base"},s:["HTML","CSS","JavaScript básico|Basic JavaScript","Git/GitHub","Figma: components, Auto Layout, handoff"],ev:[["certezia","Certezia"]]},
] as const;

function bi(v:string, lang:"es"|"en"){ const [es,en]=v.split("|"); return lang==="es"?es:(en||es); }

function StageCard({s,lang}:{s:(typeof stages)[number];lang:"es"|"en"}){
  return <div className="latest-process-cell">
    <div className="latest-card-meta">{s.n} · {s.sub[lang]}</div>
    <h4>{s.name[lang]}</h4>
    <p>{s.what[lang]}</p>
    <div className="lc-k">{lang==="es"?"Dónde uso IA":"Where I use AI"}</div><p>{s.ai[lang]}</p>
    <div className="lc-k">{lang==="es"?"Lo que decido yo":"What I decide"}</div><p>{s.me[lang]}</p>
    <div className="latest-cell-reference"><div className="lc-k">{lang==="es"?"Evidencia":"Evidence"}</div><div>{s.ev.map((e,i)=><span key={e[0]}>{i>0?" · ":null}<Link to="/work/$slug" params={{slug:e[0]}} onClick={()=>trackEvent("case_open",{ project:e[0], language:lang, target:"process_evidence" })}>{e[1][lang]}</Link></span>)}</div></div>
  </div>
}

function ProcessPage(){
  const {lang,t}=useLanguage();
  return <>
    <main className="latest-process">
      <section className="latest-section">
        <div className="latest-wrap">
          <div className="latest-eyebrow">{t("Proceso + IA","Process + AI")}</div>
          <h1 className="latest-process-title">{t("Antes de diseñar, necesito entender qué problema estamos resolviendo.","Before designing, I need to understand which problem we’re solving.")}</h1>
          <div className="latest-process-intro">
            <p>{lang==="es"?<>Antes de dedicarme al <strong>Diseño de productos digitales</strong> trabajé varios años como Ingeniero Civil. De esa etapa me traje tres formas de trabajar: pensar en cómo se conecta un sistema, diseñar dentro de límites reales y prestar atención a cómo las personas lo usan.</>:<>Before moving into <strong>digital product design</strong>, I worked for several years as a Civil Engineer. That experience shaped three ways of working: thinking about how a system connects, designing within real constraints and paying attention to how people use it.</>}</p>
            <p>{t("Hoy las aplico al diseño: organizo información y flujos, priorizo soluciones viables con desarrollo y considero el contexto de uso y la accesibilidad desde el inicio.","Today I apply them to design: I organize information and flows, prioritize feasible solutions with engineering and consider the context of use and accessibility from the start.")}</p>
          </div>
        </div>
      </section>

      <section className="latest-section">
        <div className="latest-wrap">
          <div className="latest-process-heading"><div><div className="latest-eyebrow">{t("Doble diamante","Double diamond")}</div><h2>{t("Cómo diseño, etapa por etapa","How I design, stage by stage")}</h2></div><div className="latest-diamond-intro"><p>{t("Uso el doble diamante como una referencia, no como una receta.","I use the double diamond as a reference, not a recipe.")}</p><p>{t("Algunos proyectos requieren más research, otros más iteración con desarrollo.","Some projects need more research, others more iteration with engineering.")}</p><p>{t("Lo importante para mí es separar dos momentos: entender bien el problema y luego explorar cómo resolverlo.","What matters to me is separating two moments: understanding the problem well, and then exploring how to solve it.")}</p></div></div>
          <div className="latest-diamonds">
            <div><div className="latest-diamond-label">{t("Diamante 1 · Entender el problema","Diamond 1 · Understand the problem")}</div><div className="latest-process-grid">{stages.slice(0,2).map(s=><StageCard key={s.n} s={s} lang={lang}/>)}</div></div>
            <div><div className="latest-diamond-label">{t("Diamante 2 · Construir la solución","Diamond 2 · Build the solution")}</div><div className="latest-process-grid">{stages.slice(2).map(s=><StageCard key={s.n} s={s} lang={lang}/>)}</div></div>
          </div>
        </div>
      </section>

      <section className="latest-section"><div className="latest-wrap"><div className="latest-process-criterion"><div className="latest-eyebrow">{t("Cómo uso la IA","How I use AI")}</div><h2>{t("Uso IA para avanzar más rápido, no para que decida por mí.","I use AI to move faster, not to let it decide for me.")}</h2><p>{t("La uso para ordenar research, explorar alternativas, resumir información y construir prototipos con más velocidad. Pero no tomo un resultado de IA como evidencia: vuelvo a los datos, lo contrasto con usuarios y con el equipo y decido qué tiene sentido conservar.","I use it to organize research, explore alternatives, summarize information and build prototypes faster. But I don’t take an AI result as evidence: I go back to the data, check it with users and the team and decide what makes sense to keep.")}</p></div></div></section>

      <section className="latest-section"><div className="latest-wrap"><div className="latest-process-heading"><div><div className="latest-eyebrow">Skillset</div><h2>{t("Lo que sé hacer","What I do")}</h2></div><p>{t("Trabajo principalmente entre research, estrategia de producto y diseño de interfaces. Según el proyecto, puedo moverme desde discovery hasta una solución lista para desarrollo.","I work mainly across research, product strategy and interface design. Depending on the project, I can move from discovery to a solution ready for development.")}</p></div><div className="latest-skill-grid">{skills.map((g)=><div className="latest-process-cell" key={g.h.es}><h4>{g.h[lang]}</h4><div className="latest-skill-tags">{g.s.map(k=><span className={g.tool?"tool":""} key={k}>{bi(k,lang)}</span>)}</div><div className="latest-cell-reference"><div className="lc-k">{t("En proyectos como","In projects like")}</div><div>{g.ev.map((e,i)=><span key={e[0]}>{i>0?" · ":null}<Link to="/work/$slug" params={{slug:e[0]}} onClick={()=>trackEvent("case_open",{ project:e[0], language:lang, target:"skillset_evidence" })}>{e[1]}</Link></span>)}</div></div></div>)}</div></div></section>

      <LatestContactSection />
    </main>
    <SiteFooter/>
  </>
}
