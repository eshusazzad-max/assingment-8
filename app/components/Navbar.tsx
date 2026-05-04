"use client";

import { authClient } from "../lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import sun from "../assets/sun.png";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const session = await authClient.getSession();
      setUser(session?.user || null);
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
    router.push("/login");
  };

  //  COMMON STYLE (IMPORTANT)
  const navLink =
    "inline-block px-3 py-1 rounded-md text-gray-700 " +
    "hover:bg-orange-100 hover:text-orange-500 " +
    "transition-all duration-300 ease-in-out transform " +
    "hover:-translate-y-1 hover:scale-105";

  return (
    <div className="max-w-7xl mx-auto navbar bg-amber-80 shadow-md px-5">

      {/* LOGO */}
      <div className="flex-1 flex items-center gap-2">
        <Image src={sun} alt="logo" width={40} height={40} />
        <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-700 bg-clip-text text-transparent">
          SunCart
        </span>
      </div>

      {/* LINKS */}
      <ul className="flex items-center gap-6 font-medium">

        <li>
          <Link href="/" className={navLink}>
            Home
          </Link>
        </li>

        <li>
          <Link href="/products" className={navLink}>
            Products
          </Link>
        </li>

        <li>
          <Link href="/profile" className={navLink}>
            My Profile
          </Link>
        </li>

        {user ? (
          <>
            {/* Avatar */}
            <li>
              <img
                src={user.image || "/default.png"}
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
            </li>

            {/* Logout */}
            <li>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white 
                hover:bg-red-600 transition-all duration-300 hover:scale-105"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            {/* Login */}
            <li>
              <Link href="/login" className={navLink}>
                Login
              </Link>
            </li>

            {/* Register */}
            <li>
             <Link
               href="/register"
               className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-600 to-red-400 text-white 
               shadow transition-all duration-300 ease-in-out transform 
               hover:-translate-y-1 hover:scale-105">
               Register
            </Link>
           </li>
          </>
        )}
      </ul>
    </div>
  );
}