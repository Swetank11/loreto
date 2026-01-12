'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      router.push(`/HomePage?name=${name}`); // navigate only if name is filled
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-orange-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            disabled={!name.trim()} // 👈 disables button if empty
            className={`py-2 rounded transition 
              ${name.trim() 
                ? "bg-blue-500 text-white hover:bg-blue-600" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}