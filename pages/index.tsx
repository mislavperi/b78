import { Welcome } from '../components/Welcome/Welcome';
import { Cuisine } from '../components/Cuisine/Cuisine';

export default function HomePage() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Welcome />
      <Cuisine />
    </div>
  );
}
