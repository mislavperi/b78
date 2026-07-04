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
  { image: '/assets/food1.webp', title: 'Dalmatian dish served at Boket78 restaurant in Bol' },
  { image: '/assets/food2.webp', title: 'Fresh Adriatic seafood plate at Boket78' },
  { image: '/assets/food3.webp', title: 'Traditional Dalmatian cuisine with a modern twist at Boket78' },
  { image: '/assets/food4.webp', title: 'Locally sourced dish from Boket78 in Bol, Brač' },
  { image: '/assets/food5.webp', title: 'Seasonal specialty served at Boket78 restaurant' },
  { image: '/assets/food6.webp', title: 'Chef-prepared dish at Boket78, Bol' },
  { image: '/assets/food7.webp', title: 'Dessert at Boket78 restaurant in Bol, Brač' },
];

export function CardsCarousel() {
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
