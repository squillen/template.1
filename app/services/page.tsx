import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
