import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { getLatestCase } from "@/data/latestCases";
import { LatestCaseStudy } from "@/components/LatestCaseStudy";

export const Route = createFileRoute("/work/$slug")({
  component: ProjectDetail,
  head: ({ params }) => {
    const c: any = getLatestCase(params.slug);
    const title = c ? `${c.title?.es || "Case Study"} · Jay Farfán` : "Case Study · Jay Farfán";
    const description = c?.summary?.es || "Case study by Jay Farfán, Product Designer.";
    const url = `https://jayfarfan.com/work/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
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
