"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { productButtonIds, serviceButtonIds } from "@/lib/config";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // IMPORTANT: DO NOT CHANGE THE STYLING OF THIS HEADER TO ENSURE COMPATIBILITY WITH THE PAYPAL BUTTON INJECTION
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex h-16 items-center justify-between min-w-0">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-foreground hover:text-secondary transition-colors truncate"
            >
              YourBrand
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-shrink-0">
            <Link
              href="/"
              className="text-foreground hover:text-secondary transition-colors"
            >
              Home
            </Link>
            {productButtonIds.length && (
              <Link
                href="/products"
                className="text-foreground hover:text-secondary transition-colors"
              >
                Products
              </Link>
            )}
            {serviceButtonIds.length && (
              <Link
                href="/services"
                className="text-foreground hover:text-secondary transition-colors"
              >
                Services
              </Link>
            )}
            <Link
              href="/contact"
              className="text-foreground hover:text-secondary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-secondary transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA Button and Cart */}
          <div className="flex-shrink-0">
            <div id="paypal-view-cart-container"></div>
          </div>

          {/* Mobile Menu Button and Cart */}
          <div className="md:hidden flex items-center gap-2 flex-shrink-0">
            {/* {children} */}
            <div id="paypal-view-cart-container"></div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-secondary"
              >
                Home
              </Link>
              {productButtonIds.length && (
                <Link
                  href="/products"
                  className="block px-3 py-2 text-foreground hover:text-secondary"
                >
                  Products
                </Link>
              )}
              {serviceButtonIds.length && (
                <Link
                  href="/services"
                  className="block px-3 py-2 text-foreground hover:text-secondary"
                >
                  Services
                </Link>
              )}
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-secondary"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-secondary"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
