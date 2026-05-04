"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* NAME */}
      <h2 className="text-lg font-semibold mt-3">
        {product.name}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-500 mt-1">
        {product.description}
      </p>

      {/* RATING (FIXED) */}
      <div className="flex items-center gap-1 mt-2">
        <img
          src="/icons/star.png"
          alt="star"
          className="w-4 h-4"
        />
        <span className="text-sm text-gray-700 font-medium">
          {product.rating}
        </span>
      </div>

      {/* PRICE */}
      <p className="text-orange-500 font-bold mt-2">
        ${product.price}
      </p>

      {/* BUTTON */}
      <Link href={`/products/${product.id}`}>
        <button className="btn bg-orange-500 text-white w-full mt-3">
          View Details
        </button>
      </Link>

    </div>
  );
}