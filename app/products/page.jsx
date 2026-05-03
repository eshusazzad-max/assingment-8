import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="px-10 py-10">

      {/* HEADER WITH ICON */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <img 
          src="/icons/info.png" 
          alt="info" 
          className="w-9 h-9"
        />
        <h1 className="text-3xl font-bold">
          All Products
        </h1>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}