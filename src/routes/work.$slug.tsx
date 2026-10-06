import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { getLatestCase } from "@/data/latestCases";
import { LatestCaseStudy } from "@/components/LatestCaseStudy";

export const Route = createFileRoute("/work/$slug")({
  component: ProjectDetail,
  head: ({ params }) => {
    const c: any = getLatestCase(params.slug);
    const url = `https://jayfarfan.com/work/${params.slug}`;
    const social: Record<string, { title: string; description: string; image: string; alt: string }> = {
      minsa: {
        title: "MINSA — GovTech Product Redesign for 10M+ Users | Jay Farfán",
        description:
          "Redesign of Peru’s digital vaccination certificate used by 10M+ people, focused on clearer user flows, accessibility, responsive design and a scalable design system.",
        image: "https://jayfarfan.com/og-minsa.jpg",
        alt: "MINSA GovTech case study by Jay Farfán",
      },
      certezia: {
        title: "Certezia — Digital Signature Product Redesign | Jay Farfán",
        description:
          "Product redesign focused on simplifying a complex digital signature experience, improving usability, clarity and task completion across the user journey.",
        image: "https://jayfarfan.com/og-certezia.jpg",
        alt: "Certezia digital signature case study by Jay Farfán",
      },
    };
    const s = social[params.slug];
    const title = s?.title ?? (c ? `${c.title?.es || "Case Study"} · Jay Farfán` : "Case Study · Jay Farfán");
    const description = s?.description ?? (c?.summary?.es || "Case study by Jay Farfán, Product Designer.");
    const imageMeta = s
      ? [
          { property: "og:image", content: s.image },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
          { property: "og:image:alt", content: s.alt },
          { name: "twitter:image", content: s.image },
          { name: "twitter:image:alt", content: s.alt },
        ]
      : [];
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        ...imageMeta,
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
});

function ProjectDetail() {
  const { slug } = useParams({ from: "/work/$slug" });
  const c: any = getLatestCase(slug);

  if (!c || c.comingSoon) {
    return (
      <div className="latest-wrap" style={{ padding: "8rem 1.5rem", textAlign: "center" }}>
        <h1 className="headline-lg">{c ? "Case study coming soon" : "Project not found"}</h1>
        <Link to="/work" className="latest-btn secondary" style={{ marginTop: "2rem" }}>← Back to work</Link>
      </div>
    );
  }

  return <LatestCaseStudy caseData={c} />;
}
