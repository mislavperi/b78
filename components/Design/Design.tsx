import { Carousel } from '@mantine/carousel';
import { rem, Image } from '@mantine/core';

interface CardProps {
  image: string;
  title: string;
}

function Card({ image, title }: CardProps) {
  return <Image src={image} alt={title} height="80vh" fit="cover" />;
}

const data = [
  { image: '/assets/interior1.webp', title: 'Interior of Boket78 restaurant in Bol, Brač' },
  { image: '/assets/interior3.webp', title: 'Secret garden seating at Boket78 restaurant' },
  { image: '/assets/interior4.webp', title: 'Cozy dining space at Boket78 in Bol' },
  { image: '/assets/interior5.webp', title: 'Ambient interior design at Boket78 restaurant' },
  { image: '/assets/interior6.webp', title: 'Restaurant atmosphere at Boket78, Brač island' },
  { image: '/assets/interior7.webp', title: 'Boket78 restaurant decor and seating in Bol' },
];

export function DesignCardsCarousel() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={1}
      loop
      withIndicators
    >
      {slides}
    </Carousel>
  );
}
