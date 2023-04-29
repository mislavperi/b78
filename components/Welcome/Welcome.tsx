import { Container, Image, Affix, Transition, Button, rem, keyframes, createStyles } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';

export function Welcome() {
  const [scroll, scrollTo] = useWindowScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(!visible), 4000);
  }, [visible]);

  const bounce = keyframes({
    'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
    '40%, 43%': { transform: 'translate3d(0, -1.875rem, 0)' },
    '70%': { transform: 'translate3d(0, -0.9375rem, 0)' },
    '90%': { transform: 'translate3d(0, -0.25rem, 0)' },
  });

  const useStyles = createStyles((theme) => ({
    container: {
      animation: `${bounce} 2s ease-in-out infinite`,
    },
  }));

  const { classes } = useStyles();

  return (
    <Container fluid m={0} p={0} pos="relative" id="landing" bg="#659499">
      <Container
        fluid
        pos="absolute"
        bottom={0}
        left="50%"
        style={{ zIndex: 60 }}
        ml={-20}
      >
        <IconArrowDown size={40} color="white" className={classes.container} />
      </Container>
      <Image src="/assets/landing.jpg" height="100vh" style={{ filter: 'brightness(50%);' }} />
      <Image
        src="/assets/logo.png"
        pos="absolute"
        top="50%"
        left="50%"
        width={600}
        ml={-300}
        mt={-300}
        style={{
          opacity: visible ? 0 : 1,
          transition: '2s',
        }}
      />
      <Image
        src="/assets/illustration.png"
        pos="absolute"
        top="50%"
        left="50%"
        width={500}
        ml={-250}
        mt={-175}
        style={{
          opacity: visible ? 1 : 0,

          transition: '2s',
        }}
      />
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Return to top
            </Button>
          )}
        </Transition>
      </Affix>
    </Container>
  );
}
