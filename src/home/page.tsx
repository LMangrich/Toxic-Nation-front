import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { DiscoverMapSection } from './sections/DiscoverMapSection';
import { CreativeTeamSection } from './sections/CreativeTeamSection';
import { StayConnectedSection } from './sections/StayConnectedSection';
import HeroSection from './sections/HeroSection';

const Home = () => {
  return (
    <>
    <Header />
    <main>
        <HeroSection />
        <DiscoverMapSection />
        <CreativeTeamSection />
        <StayConnectedSection />
    </main>
    <Footer />
    </>
  );
};

export default Home;
