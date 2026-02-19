import { HeroSection } from '@/components/landing/HeroSection';
import { SituationSection } from '@/components/landing/SituationSection';
import { UrgencySection } from '@/components/landing/UrgencySection';
import { ApproachSection } from '@/components/landing/ApproachSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { FinalCTA } from '@/components/landing/FinalCTA';

export function Landing() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SituationSection />
      <UrgencySection />
      <ApproachSection />
      <AboutSection />
      <FinalCTA />
    </main>
  );
}
