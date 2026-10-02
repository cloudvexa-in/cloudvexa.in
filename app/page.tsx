import HeroSection from '@/components/sections/HeroSection';
import AboutOverview from '@/components/sections/AboutOverview';
import BentoGrid from '@/components/sections/BentoGrid'; // This contains the Tabbed ServicesGrid
import Industries from '@/components/sections/Industries';
import Pipeline from '@/components/sections/Pipeline';
import TechStackMarquee from '@/components/sections/TechStackMarquee';
import MetricsTicker from '@/components/sections/MetricsTicker';
import Testimonials from '@/components/sections/Testimonials';
import GlobalContact from '@/components/sections/GlobalContact';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsTicker />
      <AboutOverview />
      <BentoGrid />
      <Industries />
      <Pipeline />
      <TechStackMarquee />
      <Testimonials />
      <GlobalContact />
    </>
  );
}
