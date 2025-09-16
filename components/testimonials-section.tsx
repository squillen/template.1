"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Working with this team has been transformative for our business. Their expertise and dedication helped us achieve a 300% increase in online engagement.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content:
      "The strategic approach and innovative solutions provided exceeded our expectations. Our ROI improved significantly within the first quarter.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Creative Solutions",
    content:
      "Professional, reliable, and results-driven. They understood our vision and delivered a solution that perfectly aligned with our business goals.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Operations Manager, ScaleTech",
    content:
      "The level of support and expertise is unmatched. They've become an integral part of our growth strategy and continue to deliver exceptional results.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-pretty mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-secondary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
