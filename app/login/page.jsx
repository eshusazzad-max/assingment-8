"use client";

import GoogleButton from "../components/GoogleButton";
import { authClient } from "../lib/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await authClient.signIn.email({
      email,
      password,
    });

    if (!res) {
      toast.error("Login failed ❌");
    } else {
      toast.success("Login successful ✅");
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 shadow-lg rounded-xl w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Login
        </h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-2"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-3"
          required
        />

        <button className="btn bg-orange-500 text-white w-full">
          Login
        </button>

        {/* 🔗 Register link */}
        <p className="text-sm mt-3 text-center">
          Don't have an account?{" "}
          <Link href="/register" className="text-orange-500">
            Register
          </Link>
        </p>
        <GoogleButton />

      </form>

    </div>
  );
}