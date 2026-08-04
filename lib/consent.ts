import { getCookie, setCookie } from 'cookies-next';

// Self-hosted cookie consent state. This replaces the third-party CookieHub
// widget, so there is no external script or plan quota involved: the visitor's
// choice lives in a first-party cookie and is read straight from the browser.

export const CONSENT_COOKIE_NAME = 'boket78-consent';

// Bump this when the categories below change so visitors are asked again.
export const CONSENT_VERSION = 1;

// Remember the choice for six months, then ask again (GDPR guidance).
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

export type ConsentStatus = 'granted' | 'denied';

export interface ConsentState {
  version: number;
  analytics: ConsentStatus;
}

// Dispatched on `window` when a choice is saved, so the app can start or stop
// loading analytics without a reload.
export const CONSENT_CHANGE_EVENT = 'boket78:consent-change';

// Dispatched to bring the banner back up, e.g. from the footer link.
export const CONSENT_OPEN_EVENT = 'boket78:consent-open';

// Returns null when nothing valid is stored yet, which means "still to ask".
export const readConsent = (): ConsentState | null => {
  if (typeof window === 'undefined') return null;

  const raw = getCookie(CONSENT_COOKIE_NAME);
  if (typeof raw !== 'string') return null;

  try {
    const stored = JSON.parse(raw) as Partial<ConsentState>;
    if (stored.version !== CONSENT_VERSION) return null;
    if (stored.analytics !== 'granted' && stored.analytics !== 'denied') return null;
    return { version: CONSENT_VERSION, analytics: stored.analytics };
  } catch {
    return null;
  }
};

export const hasAnalyticsConsent = () => readConsent()?.analytics === 'granted';

// Google Consent Mode v2 update. The defaults are set to "denied" in
// pages/_document.tsx, so this only ever relaxes them after an explicit accept.
const updateGoogleConsent = (analytics: ConsentStatus) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: analytics,
  });
};

export const saveConsent = (analytics: ConsentStatus): ConsentState => {
  const state: ConsentState = { version: CONSENT_VERSION, analytics };

  setCookie(CONSENT_COOKIE_NAME, JSON.stringify(state), {
    maxAge: CONSENT_MAX_AGE,
    path: '/',
    sameSite: 'lax',
  });

  updateGoogleConsent(analytics);
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_CHANGE_EVENT, { detail: state }));

  return state;
};

export const openConsentSettings = () => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
};
