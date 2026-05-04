import products from "../data/products.json";
import ProductCard from "./ProductCard";

export default function PopularProducts() {
  const popular = products.slice(0, 3);

  return (
    <div className="px-10 py-10">

      {/* HEADING WITH ICON */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <img
          src="/lava.png"
          alt="fire icon"
          className="w-9 h-9 object-contain"
        />
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Popular Products
        </h2>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {popular.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}