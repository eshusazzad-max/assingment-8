import products from "../../data/products.json";
import { authClient } from "../../lib/auth";
import { redirect } from "next/navigation";

export default async function ProductDetails({ params }) {

  // 🔐 auth check
  const session = await authClient.getSession();
  if (!session) {
    redirect("/login");
  }

  // 🔥 FIX (safe destructure)
  const { id } = params;

  // 🔥 FIX (convert to number properly)
  const productId = parseInt(id);

  // 🔥 SAFE MATCH
  const product = products.find(
    (p) => Number(p.id) === productId
  );

  // 🧪 DEBUG (check terminal console)
  console.log("ID FROM URL:", id);
  console.log("MATCHED PRODUCT:", product);

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500">
        Product not found
      </p>
    );
  }

  return (
    <div className="px-6 md:px-10 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg"
        />

        <div className="mt-6">

          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-2">
            Brand: {product.brand}
          </p>

          <p className="mt-3 text-gray-600">
            {product.description}
          </p>

          <div className="flex items-center gap-1 mt-2">
            <img src="/icons/star.png" alt="star" className="w-4 h-4" />
            <span className="text-sm text-gray-600">
              {product.rating}
            </span>
          </div>

          <p className="text-orange-500 text-2xl font-bold mt-3">
            ${product.price}
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Stock: {product.stock}
          </p>

          <button className="mt-5 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Buy Now
          </button>

        </div>

      </div>
    </div>
  );
}