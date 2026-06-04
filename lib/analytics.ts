"use client";

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const payload = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined)
  );

  const win = window as Window & {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props: EventParams }) => void;
    umami?: { track?: (eventName: string, data?: EventParams) => void };
    clarity?: (...args: unknown[]) => void;
  };

  try {
    win.gtag?.("event", name, payload);
    win.plausible?.(name, { props: payload });
    win.umami?.track?.(name, payload);
    win.clarity?.("event", name);
  } catch {
    // Tracking should not interrupt user-facing interactions.
  }
}
