# E-Commerce Template

A modern, responsive e-commerce template with PayPal integration.

## Features

- **Complete E-Commerce Website** - Home, Products, About, Contact pages
- **PayPal Integration** - View cart and add to cart buttons handled by PayPal
- **Product Catalog** - Search, filter, and browse products
- **Product Details** - Individual product pages with full information
- **Responsive Design** - Works on all devices
- **Modern UI** - Clean, professional design

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your PayPal credentials
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## Configuration

Edit `lib/config.ts` to customize:
- Store name, tagline, and description
- Product catalog
- PayPal button IDs

## PayPal Setup

1. Get PayPal credentials from [PayPal Developer](https://developer.paypal.com/)
2. Update `NEXT_PUBLIC_PAYPAL_CLIENT_ID` in `.env.local`
3. Configure button IDs in `lib/config.ts`

## Pages

- **Home** (`/`) - Hero section and featured products
- **Products** (`/products`) - Full product catalog with search/filter
- **Product Detail** (`/products/[id]`) - Individual product pages
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information

## File Structure

```
├── app/                    # Next.js pages
├── components/             # React components
│   ├── ui/                # UI components
│   ├── navigation.tsx     # Site navigation
│   ├── footer.tsx         # Site footer
│   ├── product-*.tsx      # Product components
│   └── paypal-*.tsx       # PayPal integration
├── lib/
│   └── config.ts          # Store configuration
└── public/                # Static assets
```

## Deployment

Works with any Next.js hosting platform:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Railway

---

**Ready to build your store! 🛍️**