'use client'
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PaymentPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      return;
    }

    // Create order
    try {
      const result = await fetch("/api/payment", { method: "POST" });
      const order = await result.json();

      if (!order.id) {
        alert("Server error. Please try again.");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_example", // Enter the Key ID generated from the Dashboard
        amount: order.amount,
        currency: order.currency,
        name: "LORETO",
        description: "Premium Dining Transaction",
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful! Your food is on the way.");
          router.push("/HomePage");
        },
        prefill: {
          name: "Guest User",
          email: "guest@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#f59e0b",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed to initialize.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Orbs - Pink, Green, Orange Theme */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#ff007f]/30 rounded-full blur-[90px]" />
      <div className="absolute bottom-[-10%] right-[10%] w-[55%] h-[55%] bg-[#32cd32]/25 rounded-full blur-[80px]" />
      <div className="absolute top-[30%] left-[-5%] w-[45%] h-[45%] bg-[#ff8c00]/25 rounded-full blur-[80px]" />
      
      <div className="w-full max-w-lg z-10 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black tracking-tighter uppercase">Checkout</h1>
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Finalize your premium order</p>
        </div>

        <div className="glass-card p-10 space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-muted-foreground text-sm uppercase font-black tracking-widest">Order ID</span>
              <span className="text-white font-mono text-xs">{id.substring(0, 8)}...</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-muted-foreground text-sm uppercase font-black tracking-widest">Estimated Time</span>
              <span className="text-white font-bold">25-35 MINS</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-white text-lg font-black uppercase tracking-widest">Total Amount</span>
              <span className="text-amber-500 text-2xl font-black">₹500.00</span>
            </div>
          </div>

          <div className="space-y-4 pt-4">
             <button 
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black py-5 rounded-xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] active:scale-[0.98]"
            >
              {loading ? "Processing..." : "Pay with Razorpay"}
            </button>
            
            <Link href="/HomePage" className="block text-center text-muted-foreground hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.1em]">
              Cancel Transaction
            </Link>
          </div>
        </div>
        
        <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
          Secure payment gateway • Encrypted transactions<br/>
          Loreto Dining Systems Proprietary Technology
        </p>
      </div>
    </div>
  );
}


