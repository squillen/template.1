import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "Email support",
      "Standard templates",
      "Mobile responsive design",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom templates",
      "Mobile responsive design",
      "API integrations",
      "Team collaboration",
      "Advanced security",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "Advanced reporting",
      "SLA guarantee",
      "Training & onboarding",
      "White-label options",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Choose the plan that best fits your business needs. All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-secondary shadow-lg scale-105" : "border-border"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-pretty">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">All plans include a 30-day money-back guarantee</p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution?{" "}
            <a href="#contact" className="text-secondary hover:underline">
              Contact us
            </a>{" "}
            for personalized pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
