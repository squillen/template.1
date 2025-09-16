import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
