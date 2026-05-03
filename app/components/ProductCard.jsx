"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>

      <p className="text-sm text-gray-500">⭐ {product.rating}</p>

      <p className="text-orange-500 font-bold">${product.price}</p>

      <Link href={`/products/${product.id}`}>
        <button className="btn bg-orange-500 text-white w-full mt-3">
          View Details
        </button>
      </Link>
    </div>
  );
}