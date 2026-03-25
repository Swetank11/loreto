'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddRestaurantPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    priceRange: "",
    rating: "",
    image: ""
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const newRestaurant = await res.json();
      alert(`Restaurant "${newRestaurant.name}" added successfully!`);
      router.push("/HomePage");
    } catch (error) {
      console.error("Error adding restaurant:", error);
      alert("Failed to add restaurant. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Orbs - Pink, Green, Orange Theme */}
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#ff007f]/30 rounded-full blur-[90px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#32cd32]/25 rounded-full blur-[90px]" />
      <div className="absolute top-[10%] left-[10%] w-[45%] h-[45%] bg-[#ff8c00]/25 rounded-full blur-[80px]" />

      <div className="w-full max-w-2xl z-10 space-y-8">
        <div className="flex justify-between items-center">
          <Link href="/HomePage" className="text-muted-foreground hover:text-white transition-colors flex items-center space-x-2 text-xs font-black uppercase tracking-widest">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl font-black tracking-tighter uppercase">Add Restaurant</h1>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Restaurant Name</label>
              <input type="text" placeholder="e.g. La Piazza"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-gray-600"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Cuisine Type</label>
              <input type="text" placeholder="e.g. Italian, Japanese"
                value={formData.cuisine}
                onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-gray-600"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Price Range (₹ for two)</label>
              <input type="text" placeholder="e.g. 1500"
                value={formData.priceRange}
                onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-gray-600"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Initial Rating (1-5)</label>
              <input type="number" step="0.1" min="0" max="5" placeholder="e.g. 4.5"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-gray-600"
                required
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Cover Image URL</label>
            <input type="text" placeholder="https://images.unsplash.com/..."
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-gray-600"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={submitting}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-black py-5 rounded-xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] active:scale-[0.98]"
          >
            {submitting ? "Publishing..." : "Publish Restaurant"}
          </button>
        </form>
      </div>
    </div>
  );
}