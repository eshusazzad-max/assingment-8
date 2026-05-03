"use client";

import { authClient } from "../lib/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await authClient.signUp.email({
        email: form.email,
        password: form.password,
        name: form.name,
        image: form.image,
      });

      router.push("/login");
    } catch (err) {
      alert("Register failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-white p-6 shadow rounded w-80" onSubmit={handleRegister}>
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          placeholder="Name"
          className="input input-bordered w-full mb-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="input input-bordered w-full mb-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Photo URL"
          className="input input-bordered w-full mb-2"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn bg-orange-500 text-white w-full">
          Register
        </button>
      </form>
    </div>
  );
}