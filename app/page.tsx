import Header from '@/components/Navbar/Header';
import HeroSection from '@/components/Hero/HeroSection';
import ExpertiseSection from '@/components/Expertise/ExpertiseSection';
import DesigningProductsSection from '@/components/DesigningProducts/DesigningProductsSection';
import HeroSectionsShowcase from '@/components/HeroSectionsShowcase/HeroSectionsShowcase';
import DashboardsSection from '@/components/Dashboards/DashboardsSection';
import MobileScreensSection from '@/components/MobileScreens/MobileScreensSection';
import CaseStudiesSection from '@/components/CaseStudies/CaseStudiesSection';
import ConceptToProductSection from '@/components/ConceptToProduct/ConceptToProductSection';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#030303] overflow-x-clip">
      <Header />
      <main className="w-full">
        <HeroSection />
        <ExpertiseSection />
        <DesigningProductsSection />
        <HeroSectionsShowcase />
        <DashboardsSection />
        <MobileScreensSection />
        <CaseStudiesSection />
        <ConceptToProductSection />
      </main>
    </div>
  );
}
