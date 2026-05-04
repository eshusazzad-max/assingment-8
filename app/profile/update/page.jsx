"use client";

import { authClient } from "../../lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      const session = await authClient.getSession();

      if (!session) {
        router.push("/login");
      } else {
        setForm({
          name: session.user.name || "",
          image: session.user.image || "",
        });
      }
    };

    loadUser();
  }, [router]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await authClient.updateUser({
        name: form.name,
        image: form.image,
      });

      alert("Updated successfully");
      router.push("/profile");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleUpdate} className="bg-white p-6 shadow rounded w-80">

        <h2 className="text-xl font-bold mb-4">Update Profile</h2>

        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input input-bordered w-full mb-3"
          placeholder="Name"
        />

        <input
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="input input-bordered w-full mb-3"
          placeholder="Photo URL"
        />

        <button className="btn bg-orange-500 text-white w-full">
          Update
        </button>

      </form>
    </div>
  );
}