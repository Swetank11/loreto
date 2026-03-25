// app/components/RestaurantList.jsx
'use client'
import Link from 'next/link'

export default function RestaurantList({ restaurants }) {
  return (
    <div className="flex overflow-x-auto space-x-6 p-4 no-scrollbar pb-8 will-change-transform">
      {Array.isArray(restaurants) && restaurants.map((r) => (
        <Link key={r._id} href={`/payment/${r._id}`} className="block">
          <div className="glass-card min-w-[280px] w-[280px] p-0 overflow-hidden group">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={r.image || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"}
                alt={r.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 flex items-center space-x-1">
                <span className="text-amber-500 text-xs text-yellow-400">★</span>
                <span className="text-white text-xs font-bold">{r.rating || "4.5"}</span>
              </div>
            </div>
            
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors line-clamp-1">{r.name}</h3>
              <p className="text-muted-foreground text-sm font-medium">{r.cuisine}</p>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-white font-bold text-sm">₹{r.priceRange || "500"} for two</span>
                <span className="text-[10px] bg-white/10 text-white px-2 py-1 rounded uppercase tracking-tighter font-black">Fast Delivery</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
      
      {(!restaurants || restaurants.length === 0) && (
        <div className="w-full flex flex-col items-center justify-center py-20 text-muted-foreground italic h-48 border-2 border-dashed border-white/10 rounded-2xl">
          <p>No restaurants available yet...</p>
        </div>
      )}
    </div>
  );
}