"use client";

import { authClient } from "../lib/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await authClient.signIn.email({
        email: form.email,
        password: form.password,
      });

      router.push("/");
    } catch (err) {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 shadow rounded w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn bg-orange-500 text-white w-full">
          Login
        </button>
      </form>
    </div>
  );
}