import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/process")({ component: ProcessPage });

const stages = [
  {
    n:"01",
    esName:"Entender", enName:"Understand",
    esSub:"Abrir el problema", enSub:"Open the problem",
    esWhat:"Empiezo hablando con usuarios, revisando datos y entendiendo cómo funciona hoy el producto. También necesito conocer las restricciones de negocio y tecnología antes de proponer una solución.",
    enWhat:"I start by talking to users, reviewing data and understanding how the product works today. I also need to know the business and technology constraints before proposing a solution.",
    esAi:"Claude me ayuda a ordenar entrevistas, detectar temas recurrentes y preparar síntesis. Después reviso los hallazgos y vuelvo a las fuentes antes de convertirlos en decisiones.",
    enAi:"Claude helps me organize interviews, spot recurring themes and prepare syntheses. Then I review the findings and go back to the sources before turning them into decisions.",
    esMe:"Qué investigar, con quién hablar y qué señales realmente importan.",
    enMe:"What to research, who to talk to and which signals really matter."
  },
  {
    n:"02",
    esName:"Enfocar", enName:"Focus",
    esSub:"Cerrar el problema", enSub:"Close the problem",
    esWhat:"Con la información suficiente, intento convertir todo lo aprendido en un problema concreto. Priorizo qué resolver ahora, qué dejar fuera y cómo sabremos si la solución funciona.",
    enWhat:"With enough information, I turn what I learned into a concrete problem. I prioritize what to solve now, what to leave out and how we will know if the solution works.",
    esAi:"La uso para comparar patrones, ordenar escenarios y explorar distintas formas de estructurar la información.",
    enAi:"I use it to compare patterns, organize scenarios and explore different ways of structuring information.",
    esMe:"La prioridad, el alcance y qué entra realmente en la primera versión.",
    enMe:"The priority, the scope and what really goes into the first version."
  },
  {
    n:"03",
    esName:"Explorar", enName:"Explore",
    esSub:"Abrir la solución", enSub:"Open the solution",
    esWhat:"Pruebo distintas maneras de resolver el problema antes de comprometerme con una sola. Trabajo con flujos, wireframes y prototipos hasta encontrar una dirección que tenga sentido para usuarios y equipo.",
    enWhat:"I try different ways of solving the problem before committing to one. I work with flows, wireframes and prototypes until I find a direction that makes sense for users and the team.",
    esAi:"Uso Claude Design y ChatGPT Sites para probar ideas rápidamente y Lookback Eureka AI para acelerar la revisión de sesiones de testing.",
    enAi:"I use Claude Design and ChatGPT Sites to test ideas quickly and Lookback Eureka AI to speed up the review of testing sessions.",
    esMe:"Qué ideas vale la pena probar, con quién probarlas y cuándo tenemos suficiente evidencia para avanzar.",
    enMe:"Which ideas are worth testing, with whom, and when we have enough evidence to move forward."
  },
  {
    n:"04",
    esName:"Construir", enName:"Build",
    esSub:"Cerrar la solución", enSub:"Close the solution",
    esWhat:"Cuando la dirección está clara, trabajo con desarrollo para convertirla en producto: estados, casos límite, comportamiento responsive y detalles que aparecen cuando una pantalla deja de ser un prototipo.",
    enWhat:"Once the direction is clear, I work with engineering to turn it into product: states, edge cases, responsive behavior and the details that appear when a screen stops being a prototype.",
    esAi:"Claude Design y ChatGPT Sites me sirven para construir prototipos funcionales y sitios más cercanos al producto real.",
    enAi:"Claude Design and ChatGPT Sites help me build functional prototypes and websites closer to the real product.",
    esMe:"Qué se especifica, qué puede simplificarse y cuándo una restricción técnica obliga a revisar el diseño.",
    enMe:"What gets specified, what can be simplified and when a technical constraint means the design needs another look."
  }
];

export function ProcessPage(){
  const {lang,t}=useLanguage();
  return <>
    <main className="latest-process">
      <section className="latest-section">
        <div className="latest-wrap">
          <div className="latest-eyebrow">{t("Proceso + IA","Process + AI")}</div>
          <h1>{t("Antes de diseñar, necesito entender qué problema estamos resolviendo.","Before designing, I need to understand which problem we’re solving.")}</h1>
          <div className="latest-process-intro">
            <p>{t("Antes de dedicarme al Diseño de productos digitales trabajé varios años como Ingeniero Civil. De esa etapa me traje tres formas de trabajar: pensar en cómo se conecta un sistema, diseñar dentro de límites reales y prestar atención a cómo las personas lo usan.","Before moving into digital product design, I worked for several years as a Civil Engineer. That experience shaped three ways of working: thinking about how a system connects, designing within real constraints and paying attention to how people use it.")}</p>
            <p>{t("Hoy las aplico al diseño: organizo información y flujos, priorizo soluciones viables con desarrollo y considero el contexto de uso y la accesibilidad desde el inicio.","Today I apply them to design: I organize information and flows, prioritize feasible solutions with engineering and consider the context of use and accessibility from the start.")}</p>
          </div>
        </div>
      </section>

      <section className="latest-section">
        <div className="latest-wrap">
          <div className="latest-eyebrow">{t("Doble diamante","Double diamond")}</div>
          <h2>{t("Cómo diseño, etapa por etapa","How I design, stage by stage")}</h2>
          <p className="latest-lead">{t("Uso el doble diamante como una referencia, no como una receta. Lo importante para mí es separar dos momentos: entender bien el problema y luego explorar cómo resolverlo.","I use the double diamond as a reference, not a recipe. What matters to me is separating two moments: understanding the problem well, and then exploring how to solve it.")}</p>
          <div className="latest-stages">{stages.map(s=><div className="latest-stage" key={s.n}><div className="latest-card-meta">{s.n} · {lang==="es"?s.esSub:s.enSub}</div><h3>{lang==="es"?s.esName:s.enName}</h3><p>{lang==="es"?s.esWhat:s.enWhat}</p><div className="lc-k">{t("Dónde uso IA","Where I use AI")}</div><p>{lang==="es"?s.esAi:s.enAi}</p><div className="lc-k">{t("Lo que decido yo","What I decide")}</div><p>{lang==="es"?s.esMe:s.enMe}</p></div>)}</div>
        </div>
      </section>

      <section className="latest-section">
        <div className="latest-wrap">
          <div className="latest-eyebrow">{t("Cómo uso la IA","How I use AI")}</div>
          <h2>{t("Uso IA para avanzar más rápido, no para que decida por mí.","I use AI to move faster, not to let it decide for me.")}</h2>
          <p className="latest-process-big">{t("La uso para ordenar research, explorar alternativas, resumir información y construir prototipos con más velocidad. Pero no tomo un resultado de IA como evidencia: vuelvo a los datos, lo contrasto con usuarios y con el equipo y decido qué tiene sentido conservar.","I use it to organize research, explore alternatives, summarize information and build prototypes faster. But I don’t take an AI result as evidence: I go back to the data, check it with users and the team and decide what makes sense to keep.")}</p>
          <div className="latest-actions"><Link to="/work" className="latest-btn primary">{t("Ver experiencia","See experience")} →</Link></div>
        </div>
      </section>
    </main>
    <SiteFooter/>
  </>
}
