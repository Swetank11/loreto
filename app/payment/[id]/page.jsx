'use client'
import { useParams } from "next/navigation";

export default function PaymentPage() {
  const { id } = useParams(); // restaurant ID from URL

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Payment Page</h1>
      <p>Processing payment for restaurant ID: {id}</p>

      {/* Example payment form */}
      <form className="space-y-4 mt-4">
        <input type="text" placeholder="Card Number" className="border p-2 w-full" />
        <input type="text" placeholder="Expiry Date" className="border p-2 w-full" />
        <input type="text" placeholder="CVV" className="border p-2 w-full" />
        <button onClick={()=>
            {
                alert("Don't wait, eat something bro");
            }
        } className="bg-green-500 text-white px-4 py-2 rounded">
          Pay Now
        </button>
        <h1>food will be delivered within 40min</h1>
      </form>
    </div>
  );
}


