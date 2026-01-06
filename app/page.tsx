import { HeroSection } from "@/components/ui/hero-section";
import SuspendedProductsOrServicesSection from "@/components/ui/suspended-products-or-services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SuspendedProductsOrServicesSection withSearch={false} />
    </>
  );
}
