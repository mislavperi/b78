import { act, fireEvent, render, screen } from '@testing-library/react';
import { CookieConsent } from './CookieConsent';
import {
  CONSENT_COOKIE_NAME,
  CONSENT_VERSION,
  hasAnalyticsConsent,
  openConsentSettings,
} from '../../lib/consent';

const clearConsentCookie = () => {
  document.cookie = `${CONSENT_COOKIE_NAME}=; max-age=0; path=/`;
};

const storeConsent = (analytics: 'granted' | 'denied') => {
  const value = encodeURIComponent(JSON.stringify({ version: CONSENT_VERSION, analytics }));
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/`;
};

describe('CookieConsent', () => {
  beforeEach(clearConsentCookie);
  afterEach(clearConsentCookie);

  it('asks for consent when nothing has been stored yet', () => {
    render(<CookieConsent />);

    expect(screen.getByRole('dialog', { name: /cookie consent/i })).toBeInTheDocument();
  });

  it('stays hidden when a choice is already stored', () => {
    storeConsent('denied');
    render(<CookieConsent />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('grants analytics consent when accepted', () => {
    render(<CookieConsent />);
    fireEvent.click(screen.getByRole('button', { name: /accept/i }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(hasAnalyticsConsent()).toBe(true);
  });

  it('keeps analytics off when declined', () => {
    render(<CookieConsent />);
    fireEvent.click(screen.getByRole('button', { name: /decline/i }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(hasAnalyticsConsent()).toBe(false);
  });

  it('reopens so the visitor can change their choice', () => {
    render(<CookieConsent />);
    fireEvent.click(screen.getByRole('button', { name: /accept/i }));

    act(() => openConsentSettings());

    expect(screen.getByRole('dialog', { name: /cookie consent/i })).toBeInTheDocument();
  });
});
