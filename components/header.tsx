"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  children?: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-secondary transition-colors">
              YourBrand
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-secondary transition-colors">
              About
            </Link>
            <Link href="/services" className="text-foreground hover:text-secondary transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-foreground hover:text-secondary transition-colors">
              Products
            </Link>
            <Link href="/testimonials" className="text-foreground hover:text-secondary transition-colors">
              Testimonials
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-secondary transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-foreground hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button and Cart */}
          <div className="hidden md:flex items-center gap-4">
            {children}
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Get Started</Button>
          </div>

          {/* Mobile Menu Button and Cart */}
          <div className="md:hidden flex items-center gap-2">
            {children}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-secondary" onClick={handleNavClick}>
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-secondary"
                onClick={handleNavClick}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-foreground hover:text-secondary"
                onClick={handleNavClick}
              >
                Services
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-foreground hover:text-secondary"
                onClick={handleNavClick}
              >
                Products
              </Link>
              <Link
                href="/testimonials"
                className="block px-3 py-2 text-foreground hover:text-secondary"
                onClick={handleNavClick}
              >
                Testimonials
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-foreground hover:text-secondary"
                onClick={handleNavClick}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-secondary"
                onClick={handleNavClick}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
