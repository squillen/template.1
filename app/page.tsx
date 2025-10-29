import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { ProductsOrServicesSection } from "@/components/products-or-services-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductsOrServicesSection />
      </main>
      <Footer />
    </div>
  );
}
