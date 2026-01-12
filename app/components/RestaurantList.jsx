// app/components/RestaurantList.jsx
'use client'
import Link from'next/link'
export default function RestaurantList({restaurants}) {
  return (
    <div className="flex overflow-x-scroll space-x-4 p-4">
      {Array.isArray(restaurants) && restaurants.map((r) => (
        <Link key={r._id} href={`/payment/${r._id}`}>

        <div
          key={r._id}
          className="min-w-50 bg-white rounded-lg shadow-md p-2"
        >
          <img
            src={r.image}
            alt={r.name}
            className="w-full h-32 object-cover rounded-md"
          />
          <h3 className="text-lg font-bold mt-2">{r.name}</h3>
          <p className="text-sm text-gray-600">{r.cuisine}</p>
          <p className="text-sm text-gray-600">{r.priceRange}</p>
          <p className="text-sm">⭐ {r.rating}</p>
        </div>
        </Link>
      ))}
      
    </div>
  );
}