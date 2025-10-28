import { Header } from "@/components/header";
import { ProductsSection } from "@/components/products-section";
import { Footer } from "@/components/footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsSection type="products" />
      </main>
      <Footer />
    </div>
  );
}
