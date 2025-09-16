import { Header } from "@/components/header"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
