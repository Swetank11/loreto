import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGO_URI ="mongodb+srv://swetanksinha19_db_user:WH3mg0LYmyLxyccN@lorato-db.3nbdct9.mongodb.net/Restaurants?retryWrites=true&w=majority"; // stored in .env.local

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  priceRange: String,
  rating: Number,
  image: String,
});

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export async function GET() {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(MONGO_URI);
  }
  const restaurants = await Restaurant.find();
  //const newRestaurant = await Restaurant.create({ name: "krishwa", cuisine: "Italian", rating: 4.5, priceRange: "500" });


  return NextResponse.json(restaurants);
}
export async function POST(req) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(MONGO_URI);
  }

  const body = await req.json(); // read JSON from request
  const newRestaurant = await Restaurant.create(body); // insert into DB

  return NextResponse.json(newRestaurant, { status: 201 });
}
