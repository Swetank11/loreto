'use client'
import { use } from "react";
import Client from "./client";
import Link from "next/link";

export default function HomePage({ searchParams }) {
  const unwrappedParams = use(searchParams);
  const name = unwrappedParams?.name || "Guest";

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-amber-500/30 relative overflow-hidden">
      {/* Background Orbs - Pink, Green, Orange Theme */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-[#ff007f]/25 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-[#32cd32]/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-[30%] left-[15%] w-[40%] h-[40%] bg-[#ff8c00]/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Top Banner / Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black tracking-tighter text-white">GHAR SA</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Home Kitchens</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">Hello, {name}</p>
        </div>
        
        <Link href="/addRestaurant" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-all border border-white/10 group active:scale-95">
          <span className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-amber-400">Add Restaurant</span>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto w-full py-8 space-y-12">
        <Client/>
      </main>
      
      {/* Simple Footer */}
      <footer className="mt-auto py-12 px-6 border-t border-white/10 flex flex-col items-center space-y-4">
        <h2 className="text-3xl font-black tracking-tighter">GHAR SA</h2>
        <p className="text-muted-foreground text-xs uppercase tracking-widest">GHAR SA • Authentic Home Made Food</p>
      </footer>
    </div>
  );
}
