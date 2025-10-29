import { Header } from "@/components/header";
import { ProductsOrServicesSection } from "@/components/products-or-services-section";
import { Footer } from "@/components/footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsOrServicesSection />
      </main>
      <Footer />
    </div>
  );
}
