import type { Project } from "@/data/projects";

/**
 * ProjectVisual — modular illustration slot.
 * To replace with a final PNG later, simply pass an `imageSrc` prop, or
 * swap the rendered SVG with an <img>. The container/aspect-ratio remains stable.
 */
type Props = {
  project: Project;
  imageSrc?: string;
  className?: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
};

export function ProjectVisual({ project, imageSrc, className, imageClassName, imageWrapperClassName }: Props) {
  return (
    <div
      className={
        "relative w-full h-full flex items-center overflow-hidden " +
        (imageWrapperClassName ?? "justify-center ") +
        (className ?? "")
      }
      data-visual-slot={project.slug}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={project.client}
          className={imageClassName ?? "w-full h-full object-contain"}
        />
      ) : (
        <Illustration kind={project.illustration} accent={project.accentVar} />
      )}
    </div>
  );
}

function Illustration({
  kind,
  accent,
}: {
  kind: Project["illustration"];
  accent: string;
}) {
  switch (kind) {
    case "phone":
      return <PhoneMock accent={accent} label="Sign with DNIe" />;
    case "chat":
      return <ChatMock accent={accent} />;
    case "marketplace":
      return <LaptopMock accent={accent} variant="marketplace" />;
    case "ecommerce":
      return <LaptopMock accent={accent} variant="ecommerce" />;
    case "dashboard":
      return <DashboardMock accent={accent} />;
    case "publicservice":
      return <PhoneMock accent={accent} label="Vaccination Certificate" variant="public" />;
  }
}

/* ---------- Mockups ---------- */

function PhoneMock({
  accent,
  label,
  variant = "default",
}: {
  accent: string;
  label: string;
  variant?: "default" | "public";
}) {
  return (
    <svg viewBox="0 0 320 420" className="h-full w-auto max-h-[88%]" fill="none">
      <defs>
        <linearGradient id="ph-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.06" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="80" y="20" width="170" height="380" rx="28" fill="#0f0f10" stroke="white" strokeOpacity="0.18" />
      <rect x="88" y="28" width="154" height="364" rx="22" fill="#1a1a1c" />
      <rect x="142" y="34" width="46" height="6" rx="3" fill="#000" />
      {/* header */}
      <circle cx="108" cy="68" r="8" fill={accent} />
      <rect x="124" y="62" width="60" height="6" rx="2" fill="white" fillOpacity="0.85" />
      <rect x="124" y="74" width="36" height="4" rx="2" fill="white" fillOpacity="0.4" />

      {/* card */}
      <rect x="100" y="100" width="130" height="92" rx="10" fill="url(#ph-bg)" stroke="white" strokeOpacity="0.12" />
      <rect x="110" y="112" width="62" height="6" rx="2" fill="white" fillOpacity="0.7" />
      <rect x="110" y="124" width="100" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="110" y="132" width="86" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="110" y="160" width="60" height="22" rx="11" fill={accent} />
      <rect x="120" y="170" width="40" height="3" rx="1.5" fill="#0a0a0a" />

      {variant === "public" ? (
        <>
          <rect x="100" y="206" width="130" height="60" rx="8" fill="white" fillOpacity="0.05" />
          <circle cx="120" cy="236" r="10" fill={accent} fillOpacity="0.4" />
          <rect x="138" y="226" width="80" height="5" rx="2" fill="white" fillOpacity="0.7" />
          <rect x="138" y="236" width="60" height="4" rx="2" fill="white" fillOpacity="0.35" />
          <rect x="138" y="244" width="70" height="4" rx="2" fill="white" fillOpacity="0.35" />
        </>
      ) : (
        <>
          {/* signature pad */}
          <rect x="100" y="206" width="130" height="84" rx="8" fill="white" fillOpacity="0.05" />
          <path
            d="M110 260 C 130 240, 150 280, 170 254 S 210 230, 220 260"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}

      {/* footer */}
      <rect x="100" y="304" width="130" height="34" rx="17" fill="white" />
      <rect x="135" y="316" width="60" height="6" rx="2" fill="#0a0a0a" />
      <rect x="100" y="348" width="60" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="170" y="348" width="60" height="4" rx="2" fill="white" fillOpacity="0.25" />

      <text x="165" y="392" textAnchor="middle" fontSize="6" fill="white" fillOpacity="0.4" fontFamily="monospace">
        {label}
      </text>
    </svg>
  );
}

function ChatMock({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 420" className="h-full w-auto max-h-[88%]" fill="none">
      <rect x="80" y="20" width="170" height="380" rx="28" fill="#0f0f10" stroke="white" strokeOpacity="0.18" />
      <rect x="88" y="28" width="154" height="364" rx="22" fill="#0d231a" />
      {/* WA header */}
      <rect x="88" y="28" width="154" height="38" rx="22" fill={accent} fillOpacity="0.85" />
      <circle cx="108" cy="50" r="9" fill="white" fillOpacity="0.95" />
      <rect x="124" y="44" width="54" height="5" rx="2" fill="white" />
      <rect x="124" y="54" width="36" height="3" rx="1.5" fill="white" fillOpacity="0.7" />

      {/* incoming bubble */}
      <rect x="98" y="82" width="120" height="34" rx="10" fill="white" fillOpacity="0.08" />
      <rect x="106" y="92" width="100" height="4" rx="2" fill="white" fillOpacity="0.7" />
      <rect x="106" y="102" width="70" height="4" rx="2" fill="white" fillOpacity="0.5" />

      {/* outgoing */}
      <rect x="120" y="128" width="114" height="44" rx="10" fill={accent} fillOpacity="0.4" />
      <rect x="128" y="138" width="96" height="4" rx="2" fill="white" />
      <rect x="128" y="148" width="80" height="4" rx="2" fill="white" fillOpacity="0.85" />
      <rect x="128" y="158" width="50" height="4" rx="2" fill="white" fillOpacity="0.85" />

      {/* card / widget */}
      <rect x="98" y="186" width="144" height="80" rx="10" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" />
      <rect x="108" y="196" width="60" height="5" rx="2" fill="white" fillOpacity="0.8" />
      <rect x="108" y="208" width="124" height="3" rx="1.5" fill="white" fillOpacity="0.3" />
      <rect x="108" y="216" width="100" height="3" rx="1.5" fill="white" fillOpacity="0.3" />
      <rect x="108" y="232" width="60" height="20" rx="4" fill={accent} />
      <rect x="178" y="232" width="54" height="20" rx="4" fill="white" fillOpacity="0.1" />

      {/* AI suggestion */}
      <rect x="98" y="278" width="144" height="28" rx="10" fill="white" fillOpacity="0.04" stroke={accent} strokeOpacity="0.5" strokeDasharray="3 3" />
      <circle cx="112" cy="292" r="4" fill={accent} />
      <rect x="124" y="288" width="100" height="3.5" rx="1.5" fill="white" fillOpacity="0.7" />
      <rect x="124" y="296" width="70" height="3.5" rx="1.5" fill="white" fillOpacity="0.4" />

      {/* input */}
      <rect x="98" y="354" width="120" height="22" rx="11" fill="white" fillOpacity="0.08" />
      <circle cx="230" cy="365" r="11" fill={accent} />
    </svg>
  );
}

function LaptopMock({
  accent,
  variant,
}: {
  accent: string;
  variant: "marketplace" | "ecommerce";
}) {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto max-w-[92%]" fill="none">
      {/* laptop body */}
      <rect x="40" y="30" width="440" height="270" rx="12" fill="#0f0f10" stroke="white" strokeOpacity="0.18" />
      <rect x="52" y="42" width="416" height="246" rx="6" fill="#16161a" />
      <path d="M20 300 H500 L490 320 H30 Z" fill="#0a0a0a" stroke="white" strokeOpacity="0.18" />
      <rect x="230" y="304" width="60" height="4" rx="2" fill="white" fillOpacity="0.2" />

      {/* nav */}
      <rect x="64" y="54" width="72" height="6" rx="2" fill="white" fillOpacity="0.85" />
      <circle cx="448" cy="58" r="6" fill={accent} />

      {variant === "marketplace" ? (
        <>
          {/* hero search */}
          <rect x="64" y="78" width="392" height="50" rx="8" fill={accent} fillOpacity="0.18" />
          <rect x="76" y="96" width="120" height="6" rx="2" fill="white" fillOpacity="0.9" />
          <rect x="76" y="108" width="180" height="4" rx="2" fill="white" fillOpacity="0.5" />
          <rect x="320" y="92" width="124" height="22" rx="11" fill="white" />
          {/* car cards */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${64 + i * 100}, 144)`}>
              <rect width="92" height="120" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" />
              <rect x="8" y="8" width="76" height="56" rx="4" fill={accent} fillOpacity={0.25 + i * 0.1} />
              {/* car silhouette */}
              <path
                d="M16 56 L24 44 L62 44 L72 56 L72 60 H16 Z"
                fill="white"
                fillOpacity="0.4"
              />
              <rect x="8" y="74" width="60" height="5" rx="2" fill="white" fillOpacity="0.8" />
              <rect x="8" y="84" width="44" height="3.5" rx="1.5" fill="white" fillOpacity="0.4" />
              <rect x="8" y="100" width="36" height="10" rx="3" fill={accent} />
            </g>
          ))}
        </>
      ) : (
        <>
          {/* editorial e-commerce */}
          <rect x="64" y="78" width="184" height="200" rx="6" fill={accent} fillOpacity="0.35" />
          <rect x="80" y="232" width="80" height="6" rx="2" fill="white" />
          <rect x="80" y="244" width="120" height="4" rx="2" fill="white" fillOpacity="0.6" />
          <rect x="80" y="256" width="50" height="4" rx="2" fill="white" fillOpacity="0.8" />

          {[0, 1, 2, 3].map((i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            return (
              <g key={i} transform={`translate(${264 + col * 100}, ${78 + row * 102})`}>
                <rect width="92" height="92" rx="6" fill="white" fillOpacity={0.04 + i * 0.02} stroke="white" strokeOpacity="0.1" />
                <rect x="8" y="8" width="76" height="56" rx="4" fill={accent} fillOpacity={0.2 + i * 0.06} />
                <rect x="8" y="72" width="50" height="4" rx="2" fill="white" fillOpacity="0.7" />
                <rect x="8" y="80" width="30" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
              </g>
            );
          })}
        </>
      )}
    </svg>
  );
}

function DashboardMock({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto max-w-[92%]" fill="none">
      <rect x="20" y="20" width="480" height="320" rx="12" fill="#0f0f10" stroke="white" strokeOpacity="0.18" />
      {/* sidebar */}
      <rect x="20" y="20" width="100" height="320" rx="12" fill="#16161a" />
      <rect x="36" y="40" width="60" height="6" rx="2" fill="white" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="36" y={70 + i * 22} width={i === 1 ? 70 : 56} height="4" rx="2" fill="white" fillOpacity={i === 1 ? 0.9 : 0.4} />
      ))}
      <rect x="20" y={70 + 22} width="3" height="14" fill={accent} />

      {/* topbar */}
      <rect x="136" y="36" width="160" height="8" rx="2" fill="white" fillOpacity="0.85" />
      <rect x="136" y="50" width="220" height="4" rx="2" fill="white" fillOpacity="0.4" />

      {/* KPI cards */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${136 + i * 122}, 76)`}>
          <rect width="110" height="64" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" />
          <rect x="12" y="14" width="44" height="4" rx="2" fill="white" fillOpacity="0.5" />
          <rect x="12" y="26" width="60" height="14" rx="2" fill={i === 1 ? accent : "white"} fillOpacity={i === 1 ? 1 : 0.9} />
          <rect x="12" y="48" width="36" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
        </g>
      ))}

      {/* chart */}
      <rect x="136" y="156" width="232" height="160" rx="8" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" />
      <polyline
        points="150,290 180,260 210,270 240,230 270,240 300,200 330,210 355,180"
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M150,290 180,260 210,270 240,230 270,240 300,200 330,210 355,180 L355,310 L150,310 Z"
        fill={accent}
        fillOpacity="0.15"
      />

      {/* side list */}
      <rect x="380" y="156" width="100" height="160" rx="8" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <circle cx="394" cy={178 + i * 26} r="5" fill={i % 2 ? accent : "white"} fillOpacity={i % 2 ? 1 : 0.6} />
          <rect x="406" y={174 + i * 26} width="60" height="4" rx="2" fill="white" fillOpacity="0.7" />
          <rect x="406" y={182 + i * 26} width="40" height="3" rx="1.5" fill="white" fillOpacity="0.35" />
        </g>
      ))}
    </svg>
  );
}
