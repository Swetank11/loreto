
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
    <div className="h-screen flex flex-col bg-green-500">
      {/* Top banner */}
      <h1 className="flex justify-between items-center w-full text-3xl font-bold text-white bg-amber-500 py-4">
        Welcome {name}
        <Link href="/addRestaurant">
          <button className="fixed top-0 right-0 m-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg text-sm">
            Add Restaurants
          </button>
        </Link>
      </h1>

      {/* Nested client component for interactive logic */}
      <Client/>
    </div>
  );
}

