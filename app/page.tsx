import Header from '@/components/Navbar/Header';
import HeroSection from '@/components/Hero/HeroSection';
import DesigningProductsSection from '@/components/DesigningProducts/DesigningProductsSection';
import HeroSectionsShowcase from '@/components/HeroSectionsShowcase/HeroSectionsShowcase';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#030303]">
      <Header />
      <main className="w-full">
        <HeroSection />
        <DesigningProductsSection />
        <HeroSectionsShowcase />
      </main>
    </div>
  );
}
