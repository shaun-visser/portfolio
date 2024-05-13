import Hero from './components/Hero';
import { heroData } from './dummy/data';

export default function Home() {
  return (
    <main>
      <Hero {...heroData} />
    </main>
  );
}
