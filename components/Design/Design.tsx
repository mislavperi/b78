import { Carousel } from '@mantine/carousel';
import { rem, Image } from '@mantine/core';

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
      '/assets/interior1.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/interior3.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/interior4.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/interior5.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/interior6.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '/assets/interior7.webp',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
];

export function DesignCardsCarousel() {
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
