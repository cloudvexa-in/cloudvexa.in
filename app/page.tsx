import HeroSection from '@/components/sections/HeroSection';
import TechStackMarquee from '@/components/sections/TechStackMarquee';
import MetricsTicker from '@/components/sections/MetricsTicker';
import BentoGrid from '@/components/sections/BentoGrid';
import Pipeline from '@/components/sections/Pipeline';
import GlobalContact from '@/components/sections/GlobalContact';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackMarquee />
      <MetricsTicker />
      <BentoGrid />
      <Pipeline />
      <GlobalContact />
    </>
  );
}
