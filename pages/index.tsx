import { Welcome } from '../components/Welcome/Welcome';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';

export default function HomePage() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Welcome />
      <About />
      <Contact />
    </div>
  );
}
