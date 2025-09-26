"use client"

import Link from "next/link"
import { storeConfig } from "@/lib/config"

export function Footer() {

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Store Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-foreground">{storeConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {storeConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/products" className="block text-sm text-muted-foreground hover:text-primary">
                Products
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Customer Service</h3>
            <div className="space-y-2">
              <Link href="/shipping" className="block text-sm text-muted-foreground hover:text-primary">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-sm text-muted-foreground hover:text-primary">
                Returns
              </Link>
              <Link href="/faq" className="block text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
              <Link href="/support" className="block text-sm text-muted-foreground hover:text-primary">
                Support
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Store Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@{storeConfig.name.toLowerCase()}.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 {storeConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
