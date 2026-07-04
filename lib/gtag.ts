// Google Analytics 4 helper.
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. "G-XXXXXXXXXX") in your environment
// to enable analytics. When it is empty, all calls below are no-ops so the
// site works fine in development or before an ID is provisioned.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

export const isAnalyticsEnabled = () =>
  typeof window !== 'undefined' && GA_MEASUREMENT_ID.length > 0 && typeof window.gtag === 'function';

// Track a page view (used on client-side route changes).
export const pageview = (url: string) => {
  if (!isAnalyticsEnabled()) return;
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
};

export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Track a custom event, e.g. a menu button or social link click.
export const event = ({ action, category, label, value }: GAEvent) => {
  if (!isAnalyticsEnabled()) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

// Convenience helper for click tracking used throughout the site.
export const trackClick = (label: string, category = 'engagement') =>
  event({ action: 'click', category, label });

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
