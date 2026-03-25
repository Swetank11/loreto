'use client'
import { useState, useEffect } from "react";
import RestaurantList from "../components/RestaurantList";

// CLIENT COMPONENT (defined in same file)
export default function ClientHome() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRestaurants() {
      try {
        const res = await fetch("/api/restaurants", { cache: "no-store" });
        const data = await res.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to load restaurants:", error);
      } finally {
        setLoading(false);
      }
    }
    loadRestaurants();
  }, []);

  return (
    <div className="px-6 space-y-12">
      {/* Featured Section */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-4xl font-black tracking-tightest uppercase">Available Now</h2>
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest border-b border-amber-500/50 pb-1">See All</p>
        </div>
        
        {loading ? (
          <div className="w-full h-64 glass animate-pulse rounded-3xl" />
        ) : (
          <RestaurantList restaurants={restaurants} />
        )}
      </section>

      {/* Quick Categories */}
      <section>
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-8 text-center">Quick Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="glass-card group flex flex-col items-center justify-center p-8 relative overflow-hidden h-48 cursor-pointer border-white/5 hover:border-amber-500/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <img src="Delivery-Scooter.png" alt="Delivery" className="w-24 h-24 object-contain z-20 group-hover:scale-110 transition-transform duration-500" />
            <span className="relative z-30 mt-4 text-[10px] font-black uppercase tracking-widest bg-amber-500 text-black px-3 py-1 rounded">
              Super Fast
            </span>
            <div className="absolute top-4 left-4 z-20">
               <p className="text-xs font-bold text-white uppercase opacity-40">Delivery</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card group flex flex-col items-center justify-center p-8 relative overflow-hidden h-48 cursor-pointer border-white/5 hover:border-amber-500/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <img src="plate.png" className="w-24 h-24 object-contain z-20 group-hover:scale-110 transition-transform duration-500" />
            <span className="relative z-30 mt-4 text-[10px] font-black uppercase tracking-widest bg-white text-black px-3 py-1 rounded">
              Budget Friendly
            </span>
             <div className="absolute top-4 left-4 z-20">
               <p className="text-xs font-bold text-white uppercase opacity-40">Value</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card group flex flex-col items-center justify-center p-8 relative overflow-hidden h-48 cursor-pointer border-white/5 hover:border-amber-500/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <img src="dining.png" className="w-24 h-24 object-contain z-20 group-hover:scale-110 transition-transform duration-500" />
            <span className="relative z-30 mt-4 text-[10px] font-black uppercase tracking-widest bg-white text-black px-3 py-1 rounded">
              Dine In
            </span>
             <div className="absolute top-4 left-4 z-20">
               <p className="text-xs font-bold text-white uppercase opacity-40">Experience</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-card group flex flex-col items-center justify-center p-8 relative overflow-hidden h-48 cursor-pointer border-white/5 hover:border-amber-500/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <img src="plate.png" className="w-24 h-24 object-contain z-20 group-hover:scale-110 transition-transform duration-500" />
            <span className="relative z-30 mt-4 text-[10px] font-black uppercase tracking-widest bg-white text-black px-3 py-1 rounded">
              Premium Eats
            </span>
             <div className="absolute top-4 left-4 z-20">
               <p className="text-xs font-bold text-white uppercase opacity-40">Gourmet</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}