import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem, Image } from '@mantine/core';


interface CardProps {
  image: string;
  title: string;
}

function Card({ image, title }: CardProps) {
  return (
    <Image 
        src={image}
        alt={title}
        height="100vh"
    />
  );
}

const data = [
  {
    image:
      '/assets/food1.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/food2.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/food3.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/food4.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/food5.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/food6.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/food7.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
];

export function CardsCarousel() {
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
