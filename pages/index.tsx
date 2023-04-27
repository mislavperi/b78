import { Welcome } from '../components/Welcome/Welcome';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Menu } from '../components/Menu/Menu';

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
      <Contact />
    </div>
  );
}
