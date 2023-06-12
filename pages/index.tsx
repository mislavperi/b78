import { Welcome } from '../components/Welcome/Welcome';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Menu } from '../components/Menu/Menu';
import { CardsCarousel } from '../components/Gallery/Gallery';
import { DesignCardsCarousel } from '../components/Design/Design';
import { Cook } from '../components/Cook/Cook'
import { Legal } from '../components/Legal/Legal'

export default function HomePage() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Welcome />
      <About />
      <Menu />
      <CardsCarousel />
      <Cook />
      <DesignCardsCarousel />
      <Contact />
      <Legal/>
    </div>
  );
}
