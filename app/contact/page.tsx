import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
