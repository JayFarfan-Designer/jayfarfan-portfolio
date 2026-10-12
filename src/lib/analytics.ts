export type AnalyticsValue = string | number | boolean;
export type AnalyticsData = Record<string, AnalyticsValue | undefined>;

type UmamiClient = {
  track: (event: string, data?: Record<string, AnalyticsValue>) => void;
};

declare global {
  interface Window {
    umami?: UmamiClient;
  }
}

export function sourcePage() {
  if (typeof window === "undefined") return "";
  return window.location.pathname || "/";
}

export function trackEvent(event: string, data: AnalyticsData = {}) {
  if (typeof window === "undefined" || !window.umami?.track) return;

  const cleanData = Object.fromEntries(
    Object.entries({ source_page: sourcePage(), ...data }).filter(
      (entry): entry is [string, AnalyticsValue] => entry[1] !== undefined,
    ),
  );

  window.umami.track(event, cleanData);
}
