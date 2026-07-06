import { CSSProperties, useState } from 'react';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import { trackClick } from '../../lib/gtag';

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#landing' },
  { label: 'About us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact us', href: '#contact' },
  { label: 'Information', href: '/info', external: true },
];

// Plain inline styles keep the overlay reliable: it mounts only on the client
// (Mantine's emotion styles are extracted at SSR time and would not be present
// for a client-only-mounted component), so we avoid Mantine style props here.
const linkStyle: CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: 'clamp(28px, 5vw, 48px)',
  fontWeight: 400,
  padding: '8px 0',
  marginTop: 20,
};

export function Navigation() {
  const [toggled, setToggled] = useState(false);

  const handleNavClick = (label: string) => {
    trackClick(`nav:${label}`, 'navigation');
    setToggled(false);
  };

  return (
    <>
      {/* Hamburger toggle — fixed on top of everything so the menu is always reachable. */}
      <div style={{ position: 'fixed', top: 10, left: 10, zIndex: 100 }}>
        <Hamburger
          toggled={toggled}
          toggle={setToggled}
          color="#ffffff"
          label="Toggle navigation menu"
          size={28}
        />
      </div>

      <nav
        aria-hidden={!toggled}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 90,
          backgroundColor: '#02323C',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          transform: toggled ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 400ms ease',
          visibility: toggled ? 'visible' : 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 'clamp(40px, 8vw, 100px)',
          }}
        >
          {navItems.map((item) =>
            item.external ? (
              <Link
                key={item.label}
                href={item.href}
                style={linkStyle}
                onClick={() => handleNavClick(item.label)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                style={linkStyle}
                onClick={() => handleNavClick(item.label)}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </nav>
    </>
  );
}
