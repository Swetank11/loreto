'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ff007f]/30 rounded-full blur-[80px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#32cd32]/25 rounded-full blur-[80px]" />
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-[#ff8c00]/25 rounded-full blur-[70px]" />

      <div className="glass-card p-10 w-full max-w-md z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tighter text-white mb-2">GHAR SA</h1>
          <p className="text-muted-foreground text-[10px] uppercase tracking-[0.3em] font-bold">Authentic Home Kitchens</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-muted-foreground ml-1 uppercase">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name to begin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all placeholder:text-gray-600"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 transform active:scale-95
              ${name.trim() 
                ? "bg-amber-500 text-black hover:bg-amber-400 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)] cursor-pointer" 
                : "bg-white/5 text-muted-foreground cursor-not-allowed border border-white/5"}`}
          >
            Enter Ghar Sa
          </button>

          <div className="text-center pt-2">
            <Link href="/signup" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}