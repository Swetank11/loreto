'use client'
import { useState } from "react";

export default function AddRestaurantPage() {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    priceRange: "",
    rating: "",
    image: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const newRestaurant = await res.json();
    alert(`Restaurant "${newRestaurant.name}" added successfully!`);
    setFormData({ name: "", cuisine: "", priceRange: "", rating: "", image: "" });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Restaurant</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="text" placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 w-full"
        />
        <input type="text" placeholder="Cuisine"
          value={formData.cuisine}
          onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
          className="border p-2 w-full"
        />
        <input type="text" placeholder="Price Range"
          value={formData.priceRange}
          onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
          className="border p-2 w-full"
        />
        <input type="number" placeholder="Rating"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
          className="border p-2 w-full"
        />
        <input type="text" placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Add Restaurant
        </button>
      </form>
    </div>
  );
}