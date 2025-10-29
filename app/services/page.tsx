import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsOrServicesSection } from "@/components/products-or-services-section";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsOrServicesSection type='services' />
      </main>
      <Footer />
    </div>
  )
}
