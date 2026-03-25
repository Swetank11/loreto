import { NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/db";

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
  await dbConnect();
  const restaurants = await Restaurant.find();
  return NextResponse.json(restaurants);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json(); // read JSON from request
  const newRestaurant = await Restaurant.create(body); // insert into DB
  return NextResponse.json(newRestaurant, { status: 201 });
}
