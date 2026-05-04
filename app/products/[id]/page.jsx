"use client";

import { useParams } from "next/navigation";
import products from "../../data/products.json";

export default function ProductDetails() {

  const params = useParams();
  const id = params?.id;

  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  if (!id) {
    return (
      <p className="text-center mt-10 text-red-500">
        ID missing 
      </p>
    );
  }

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500">
        Product not found (ID: {id})
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
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-500 mt-2">
            Brand: {product.brand}
          </p>

          <p className="mt-3 text-gray-600">
            {product.description}
          </p>

          <p className="text-orange-500 text-2xl font-bold mt-3">
            ${product.price}
          </p>

          <button className="mt-5 px-6 py-2 bg-orange-500 text-white rounded-lg 
         hover:bg-orange-600 
           transition-all duration-300 
           transform hover:-translate-y-1 hover:scale-105 
           shadow-md hover:shadow-xl cursor-pointer">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
}