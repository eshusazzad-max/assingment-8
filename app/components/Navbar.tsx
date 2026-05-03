"use client";

import Image from "next/image";
import Link from "next/link";
import sun from "../assets/sun.png";

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto navbar bg-amber-80 shadow-md px-5">
      
      {/* Logo */}
      <div className="flex-1 flex items-center gap-2">
        <Image src={sun} alt="logo" width={40} height={40} />
        <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-700 bg-clip-text text-transparent">
          SunCart
        </span>
      </div>

      {/* Links */}
      <ul className="flex items-center gap-6 font-medium">

        {/* HOME */}
        <li>
          <Link href="/" className="px-3 py-1 rounded-md text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition cursor-pointer hover:-translate-y-1 hover:scale-105">
            Home
          </Link>
        </li>

        {/* PRODUCTS */}
        <li>
          <Link href="/products" className="px-3 py-1 rounded-md text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition cursor-pointer hover:-translate-y-1 hover:scale-105">
            Products
          </Link>
        </li>

        {/* PROFILE */}
        <li>
          <Link href="/profile" className="px-3 py-1 rounded-md text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition cursor-pointer hover:-translate-y-1 hover:scale-105">
            My Profile
          </Link>
        </li>

        {/* LOGIN */}
        <li>
          <Link href="/login">
            <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition cursor-pointer hover:-translate-y-1 hover:scale-105">
              Login
            </button>
          </Link>
        </li>

        {/* REGISTER */}
        <li>
          <Link href="/register">
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-600 to-red-400 text-white shadow hover:scale-105 transition">
              Register
            </button>
          </Link>
        </li>

      </ul>
    </div>
  );
}