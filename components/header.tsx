"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import CartButton from "./ui/cart-button";
import { useIsMobile } from "@/hooks/utils";
import { useProductsCount, useServicesCount } from "@/hooks/storefront";

export function Header() {
  const productsExist = useProductsCount();
  const servicesExist = useServicesCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile(); // used to prevent unwanted AI CSS changes

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden">
        <div className="flex h-16 items-center justify-between min-w-0">
          {/* MOBILE HAMBURGER MENU */}
          {isMobile && (
            <div className="flex items-center gap-2 flex-shrink-0 mr-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}

          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-foreground hover:text-secondary transition-colors truncate"
            >
              YourBrand
            </Link>
          </div>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <nav className="flex items-center space-x-8 flex-shrink-0 m-auto">
              <Link
                href="/"
                className="text-foreground hover:text-secondary transition-colors"
              >
                Home
              </Link>
              {!!productsExist && (
                <Link
                  href="/products"
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  Products
                </Link>
              )}
              {!!servicesExist  && (
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
          )}
          <CartButton />
        </div>
      </div>

      {/* MOBILE NAV */}
      {isMenuOpen && isMobile && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-foreground hover:text-secondary"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            {!!productsExist && (
              <Link
                href="/products"
                className="block px-3 py-2 text-foreground hover:text-secondary"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            )}
            {!!servicesExist && (
              <Link
                href="/services"
                className="block px-3 py-2 text-foreground hover:text-secondary"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            )}
            <Link
              href="/contact"
              className="block px-3 py-2 text-foreground hover:text-secondary"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-foreground hover:text-secondary"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
