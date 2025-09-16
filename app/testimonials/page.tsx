import { Header } from "@/components/header"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
