type Image = {
  default?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  alt?: string;
};

export type Variant = {
  id: string;
  sku?: string;
  name: string;
  description: string;
  prices: [
    {
      currency_code: string;
      value: string;
    }
  ];
  options?: [
    {
      name: string;
      value: string;
    }
  ];
  image: Image;
  images: Image[];
};

export type Inventory = {
  availability: "IN_STOCK" | "OUT_OF_STOCK"; // Stock availability
};

export type SeoDetails = {
  title?: string; // SEO title
  description?: string; // SEO description
  keywords?: string[]; // SEO keywords
};

export type Product = {
  id: string;
  name: string;
  description: string;
  type: string;
  status: string;
  labels?: string[];
  seo?: boolean;
  image?: Image;
  images?: Image[];
  variants: Variant[];
};

export interface StorefrontGetProductsResponse {
  products: Product[]; // Array of products
  totalItems?: number; // Total number of items
  totalPages?: number; // Total number of pages
  currentPage: number; // Current page number
  pageSize: number; // Items per page
  hasNextPage: boolean; // Whether next page exists
  hasPreviousPage: boolean; // Whether previous page exists
}

export interface StorefrontGetProductResponse {
  id?: string; // Product identifier
  name?: string; // Product name
  description?: string; // Product description
  type?: "PHYSICAL_GOODS" | "DIGITAL_GOODS" | "DONATION";
  status?: "ACTIVE" | "DRAFT" | "ARCHIVED";
  labels?: string[]; // Product labels for categorization
  image?: Image; // Primary product image
  images?: Image[]; // All product images
  variants: Variant[]; // Product variants (required)
  inventory?: Inventory; // Inventory info (if product-level tracking)
  seo?: SeoDetails; // SEO optimization details
}
