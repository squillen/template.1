import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
            Transform Your Business with{" "}
            <span className="text-secondary">Professional Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto">
            We help businesses grow and succeed with innovative strategies,
            cutting-edge technology, and personalized service that delivers real
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image Section */}
          <div className="mt-16 mb-12 relative">
            <div className="relative h-64 md:h-80 lg:h-96 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <Image
                src="/placeholder.jpg"
                alt="Professional business solutions showcase"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="text-lg font-semibold">
                  Trusted by industry leaders
                </p>
                <p className="text-sm opacity-90">
                  Delivering excellence since 2020
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">99%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
