'use client'
import { useState, useEffect } from "react";
import RestaurantList from "../components/RestaurantList";

// CLIENT COMPONENT (defined in same file)
export default function ClientHome() {

  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    priceRange: "",
    rating: "",
    image: ""
  });

  useEffect(() => {
    async function loadRestaurants() {
      const res = await fetch("/api/restaurants", { cache: "no-store" });
      const data = await res.json();
      setRestaurants(data);
    }
    loadRestaurants();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const newRestaurant = await res.json();
    setRestaurants([...restaurants, newRestaurant]); // ✅ fixed typo
    setFormData({ name: "", cuisine: "", priceRange: "", rating: "", image: "" });
  }

  return (
    <>
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="overflow-x-auto bg-yellow-300 p-6 rounded">
          <h1 className="text-2xl font-bold">Available Restaurants</h1>
          <RestaurantList restaurants={restaurants} />
        </div>
      </div>

      {/* Scrollable items at bottom */}
      <div className="overflow-x-auto bg-gray-100 p-4">
        <div className="flex justify-between w-full space-x-4">
          {/* Card 1 */}
          <div className="flex-1 bg-amber-200 rounded relative flex flex-col items-center justify-center">
            <img src="Delivery-Scooter.png" alt="Delivery" className="w-full h-32 object-contain" />
            <span className="absolute bottom-2 text-sm font-bold bg-white px-2 py-1 rounded">
              Delivery
            </span>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-amber-200 rounded relative flex flex-col items-center justify-center">
            <img src="plate.png" className="w-full h-32 object-contain" />
            <span className="absolute bottom-2 text-sm font-bold bg-white px-2 py-1 rounded">
              Under 250
            </span>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-amber-200 rounded relative flex flex-col items-center justify-center">
            <img src="dining.png" className="w-full h-32 object-contain" />
            <span className="absolute bottom-2 text-sm font-bold bg-white px-2 py-1 rounded">
              Dining
            </span>
          </div>

          {/* Card 4 */}
          <div className="flex-1 bg-amber-200 rounded relative flex flex-col items-center justify-center">
            <img src="plate.png" className="w-full h-32 object-contain" />
            <span className="absolute bottom-2 text-sm font-bold bg-white px-2 py-1 rounded">
              Under 500
            </span>
          </div>
        </div>
      </div>
    </>
  );}