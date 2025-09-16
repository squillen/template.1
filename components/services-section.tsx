import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Shield, Smartphone, BarChart3, Headphones, Globe, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Comprehensive digital transformation strategies tailored to your business goals and market position.",
    features: ["Market Analysis", "Competitive Research", "Growth Planning"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications and websites built with modern technologies for optimal performance.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    features: ["iOS & Android", "Cross-Platform", "App Store Optimization"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven insights and analytics to help you make informed business decisions.",
    features: ["Performance Tracking", "User Behavior", "ROI Analysis"],
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Comprehensive security measures to protect your business and customer data.",
    features: ["Data Protection", "Compliance", "Risk Assessment"],
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
    features: ["Technical Support", "System Monitoring", "Regular Updates"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to help your business thrive in today's digital
            landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-secondary/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
