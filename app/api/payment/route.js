import Razorpay from "razorpay";

export async function POST(req) {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: 50000, // amount in paise (₹500)
    currency: "INR",
    receipt: "receipt#1",
  };

  const order = await instance.orders.create(options);
  return new Response(JSON.stringify(order), { status: 200 });
}