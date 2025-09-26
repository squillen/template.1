"use client"

import { storeConfig } from "@/lib/config"

export default function AboutPage() {

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About {storeConfig.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {storeConfig.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a passion for quality and sustainability, {storeConfig.name} has been 
                  committed to providing the finest products to our customers. We believe in the 
                  power of good products to make a positive impact on people's lives.
                </p>
                <p>
                  Our journey began with a simple mission: to create an online shopping experience 
                  that combines convenience, quality, and exceptional customer service. Today, we're 
                  proud to serve customers worldwide with our carefully curated selection of products.
                </p>
                <p>
                  Every product in our store is selected with care, ensuring that we only offer 
                  items that meet our high standards for quality, sustainability, and value.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>High-quality products carefully selected</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Fast and reliable shipping worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Secure payment with PayPal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Excellent customer service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>30-day return policy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to sustainable practices and environmentally friendly products.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  Every product is carefully selected to ensure the highest quality standards.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We believe in building strong relationships with our customers and community.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're a dedicated team of professionals committed to providing you with the best 
              shopping experience possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground mb-2">John Smith</h3>
                <p className="text-primary mb-2">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Passionate about creating exceptional customer experiences.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Sarah Johnson</h3>
                <p className="text-primary mb-2">Head of Operations</p>
                <p className="text-sm text-muted-foreground">
                  Ensures smooth operations and quality control.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Mike Chen</h3>
                <p className="text-primary mb-2">Customer Success</p>
                <p className="text-sm text-muted-foreground">
                  Dedicated to helping customers find the perfect products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
