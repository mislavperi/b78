import { useEffect, useState } from 'react';
import { Button, Flex, Group, Paper, Text } from '@mantine/core';
import { CONSENT_OPEN_EVENT, ConsentStatus, readConsent, saveConsent } from '../../lib/consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The cookie can only be read in the browser, so the banner starts hidden
    // and is revealed here — that also keeps the server and client markup in
    // sync during hydration.
    if (!readConsent()) setVisible(true);

    const handleOpen = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, handleOpen);
  }, []);

  const choose = (analytics: ConsentStatus) => () => {
    saveConsent(analytics);
    setVisible(false);
  };

  // Rendered on every page and only toggled with `display`: Mantine extracts
  // its styles while rendering on the server, so a banner that first appeared
  // after hydration would come out unstyled in a production build.
  return (
    <Paper
      role="dialog"
      aria-label="Cookie consent"
      radius={0}
      p="md"
      bg="#02323C"
      style={{
        display: visible ? 'block' : 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Flex wrap="wrap" align="center" justify="space-between" gap="md">
        <Text size="sm" maw={620}>
          We only store a cookie to remember this choice. Analytics cookies, used to see which parts
          of the site people visit, stay switched off unless you accept them.
        </Text>
        <Group spacing="sm">
          <Button
            onClick={choose('denied')}
            styles={{
              root: {
                backgroundColor: 'transparent',
                border: '1px solid #B3852D',
                color: 'white',
              },
            }}
          >
            Decline
          </Button>
          <Button onClick={choose('granted')}>Accept</Button>
        </Group>
      </Flex>
    </Paper>
  );
}
