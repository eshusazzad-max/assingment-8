"use client";

import Link from "next/link";
import { authClient } from "../lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const session = await authClient.getSession();

      if (!session) {
        router.push("/login");
      } else {
        setUser(session.user);
      }
    };

    loadUser();
  }, [router]);

  if (!user) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading...
      </p>
    );
  }

  return (
    <div className="px-6 md:px-10 py-10">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 text-center">

        {/* PROFILE IMAGE */}
        <img
          src={user.image || "/default.png"}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-400"
        />

        {/* NAME */}
        <h2 className="text-2xl font-bold">
          {user.name}
        </h2>

        {/* EMAIL */}
        <p className="text-gray-500 mt-2">
          {user.email}
        </p>

        {/* EXTRA INFO (optional but cool) */}
        <p className="text-sm text-gray-400 mt-1">
          Welcome to your profile 👋
        </p>

        {/* UPDATE BUTTON */}
        <Link href="/profile/update">
          <button className="mt-5 px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Update Profile
          </button>
        </Link>

      </div>
    </div>
  );
}