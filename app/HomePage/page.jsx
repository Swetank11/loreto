
// import RestaurantList from "../components/RestaurantList";
// import { useState, useEffect } from 'react';
// import "../addRestaurant/page.jsx"
// import Link from 'next/link'
// import { useSearchParams } from "next/navigation";

// export default function HomePage({searchParams}) {
  
//   const name = searchParams.name;
//   const [restaurant, setrestaurant] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     cuisine: "",
//     priceRange: "",
//     rating: "",
//     image: ""
//   });

//   useEffect(() => {
//     async function loadRestaurants() {
//       const res = await fetch("/api/restaurants", { cache: "no-store" });
//       const data = await res.json();
//       setrestaurant(data); // update state
//     }
//     loadRestaurants();
//   }, []);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const res = await fetch("/api/restaurants", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     const newRestaurant = await res.json();
//     setRestaurants([...restaurants, newRestaurant]); // update UI
//     setFormData({ name: "", cuisine: "", priceRange: "", rating: "", image: "" }); // reset form
//   }


//   return (
//     <div className="h-screen flex flex-col bg-green-500">
//       {/* Top banner */}

//       <h1 className="flex justify-between items-center w-full  text-3xl font-bold text-white bg-amber-500 py-4">
//         {/* <SearchParamsHandler /> */}
//         Welcome {name}

//         <Link href="/addRestaurant">
//           <button className="fixed top-0 right-0 m-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg text-sm">
//             Add Restaurants
//           </button>
//         </Link>
//       </h1>

//       {/* Main content (fills remaining space) */}
//       <div className=" flex-1 flex items-center justify-center">
//         <div className="overflow-x-auto bg-yellow-300 p-6 rounded">
//           <h1 className="text-2xl font-bold">Available Restaurants</h1>
//           <RestaurantList restaurants={restaurant} />
//         </div>
//       </div>

//       {/* Scrollable items at bottom */}
//       <div className="overflow-x-auto bg-gray-100 p-4">
//         <div className="flex justify-between w-full space-x-4">
//           {/* Card 1 */}
//           <div className="flex-1 bg-amber-200 rounded relative flex flex-col items-center justify-center">
//             <img
//               src="Delivery-Scooter.png"
//               alt="Delivery"
//               className="w-full h-32 object-contain"
//             />
//             <span className="absolute bottom-2 text-sm font-bold bg-white px-2 py-1 rounded">
//               Delivery
//             </span>
//           </div>

//           {/* Card 2 */}
//           <div className="flex-1 bg-amber-200 rounded relative flex flex-col items-center justify-center">
//             <img
//               src="plate.png"

//               className="w-full h-32 object-contain"
//             />
//             <span className="absolute bottom-2 text-sm font-bold bg-white px-2 py-1 rounded">
//               Under 250
//             </span>
//           </div>

//           {/* Card 3 */}
//           <div className="flex-1 bg-amber-200 rounded relative flex flex-col items-center justify-center">
//             <img
//               src="dining.png"

//               className="w-full h-32 object-contain"
//             />
//             <span className="absolute bottom-2 text-sm font-bold bg-white px-2 py-1 rounded">
//               Dining
//             </span>
//           </div>

//           {/* Card 4 */}
//           <div className="flex-1 bg-amber-200 rounded relative flex flex-col items-center justify-center">
//             <img
//               src="plate.png"

//               className="w-full h-32 object-contain"
//             />
//             <span className="absolute bottom-2 text-sm font-bold bg-white px-2 py-1 rounded">
//               Under 500
//             </span>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }
import Link from "next/link";
import RestaurantList from "../components/RestaurantList";
import React from "react";
import Client from "./client.jsx";

// SERVER COMPONENT (default export)
export default async function HomePage({ searchParams }) {
  const param=await searchParams
  const name = param?.name || "Guest";

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-amber-500/30 relative overflow-hidden">
      {/* Background Orbs - Pink, Green, Orange Theme */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-[#ff007f]/25 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-[#32cd32]/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-[30%] left-[15%] w-[40%] h-[40%] bg-[#ff8c00]/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Top Banner / Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black tracking-tighter text-white">LORETO</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">Hello, {name}</p>
        </div>
        
        <Link href="/addRestaurant">
          <button className="bg-amber-500 hover:bg-amber-400 text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95">
            Add Restaurant
          </button>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto w-full py-8 space-y-12">
        <Client/>
      </main>
      
      {/* Footer / Disclaimer */}
      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-muted-foreground text-xs uppercase tracking-widest">© 2024 LORETO • Premium Delivery</p>
      </footer>
    </div>
  );
}

