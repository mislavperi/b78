import { CONSENT_COOKIE_NAME, hasAnalyticsConsent, readConsent, saveConsent } from './consent';

const clearConsentCookie = () => {
  document.cookie = `${CONSENT_COOKIE_NAME}=; max-age=0; path=/`;
};

describe('consent', () => {
  beforeEach(clearConsentCookie);
  afterEach(clearConsentCookie);

  it('reports no stored choice by default', () => {
    expect(readConsent()).toBeNull();
    expect(hasAnalyticsConsent()).toBe(false);
  });

  it('round-trips a saved choice through the cookie', () => {
    saveConsent('granted');

    expect(readConsent()).toEqual({ version: 1, analytics: 'granted' });
    expect(hasAnalyticsConsent()).toBe(true);
  });

  it('ignores a cookie written by an older consent version', () => {
    document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
      JSON.stringify({ version: 0, analytics: 'granted' })
    )}; path=/`;

    expect(readConsent()).toBeNull();
  });

  it('ignores a malformed cookie instead of throwing', () => {
    document.cookie = `${CONSENT_COOKIE_NAME}=not-json; path=/`;

    expect(readConsent()).toBeNull();
  });

  it('updates Google consent mode when a choice is saved', () => {
    const gtag = jest.fn();
    window.gtag = gtag;

    saveConsent('granted');

    expect(gtag).toHaveBeenCalledWith(
      'consent',
      'update',
      expect.objectContaining({ analytics_storage: 'granted' })
    );
  });
});
