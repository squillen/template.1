import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsSection } from "@/components/products-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsSection type='services' />
      </main>
      <Footer />
    </div>
  )
}
