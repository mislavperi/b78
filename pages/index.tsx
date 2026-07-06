import { Welcome } from '../components/Welcome/Welcome';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Menu } from '../components/Menu/Menu';
import { CardsCarousel } from '../components/Gallery/Gallery';
import { DesignCardsCarousel } from '../components/Design/Design';
import { Legal } from '../components/Legal/Legal';

export default function HomePage() {
  return (
    <main>
      <section id="landing">
        <Welcome />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="gallery" style={{ overflowX: 'hidden' }}>
        <CardsCarousel />
        <DesignCardsCarousel />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Legal />
    </main>
  );
}
