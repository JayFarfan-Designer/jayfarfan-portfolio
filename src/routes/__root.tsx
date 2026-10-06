import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/language";
import { SiteHeader } from "@/components/SiteHeader";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jay Farfan — Senior Product Designer & UX/UI Designer" },
      {
        name: "description",
        content:
          "Portfolio of Jay Farfan, Senior Product Designer combining strategy, human judgment and AI to craft simple, scalable digital products.",
      },
      { name: "author", content: "Jay Farfan" },
      { property: "og:site_name", content: "Jay Farfan" },
      { property: "og:title", content: "Jay Farfan — Senior Product Designer & UX/UI Designer" },
      {
        property: "og:description",
        content:
          "Portfolio of Jay Farfan, Senior Product Designer combining strategy, human judgment and AI to craft simple, scalable digital products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jay Farfan — Senior Product Designer & UX/UI Designer" },
      {
        name: "twitter:description",
        content:
          "Portfolio of Jay Farfan, Senior Product Designer combining strategy, human judgment and AI to craft simple, scalable digital products.",
      },
      { name: "google-site-verification", content: "7pI76bHu-5652vK2mFbyxtROZr5CqZZKPdcpNGsopEA" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jay Farfan",
          url: "https://jayfarfan.com",
          jobTitle: "Senior Product Designer",
          sameAs: ["https://www.linkedin.com/in/jayfarfan/"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Jay Farfan",
          url: "https://jayfarfan.com",
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main className="">
        <Outlet />
      </main>
    </LanguageProvider>
  );
}
