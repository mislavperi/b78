import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
}

function Card({ image, title }: CardProps) {
  return (
    <Image 
        src={image}
        alt="title"
        height="100vh"
    />
  );
}

const data = [
  {
    image:
      '/assets/Boket_72.jpg',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/Boket_79.jpg',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/Boket_96.jpg',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
];

export function DesignCardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}
