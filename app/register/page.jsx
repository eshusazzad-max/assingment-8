"use client";

import GoogleButton from "../components/GoogleButton";
import { authClient } from "../lib/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;

    try {
      const res = await authClient.signUp.email({
        email,
        password,
        name,
        image,
      });

      if (!res) {
        toast.error("Registration failed ❌");
      } else {
        toast.success("Registration successful 🎉");
        router.push("/login");
      }
    } catch (err) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 shadow rounded w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Register
        </h2>

        <input
          name="name"
          placeholder="Name"
          className="input input-bordered w-full mb-2"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-2"
          required
        />

        <input
          name="image"
          placeholder="Photo URL"
          className="input input-bordered w-full mb-2"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-3"
          required
        />

        <button className="btn bg-orange-500 text-white w-full">
          Register
        </button>

        {/* 🔗 Login link */}
        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500">
            Login
          </Link>
        </p>
        <GoogleButton />
      </form>
    </div>
  );
}