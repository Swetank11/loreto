'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    state: ""
  });
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert(`Welcome to GHAR SA, ${formData.name}! Your account has been created.`);
      router.push(`/HomePage?name=${formData.name}`);
    }, 1500);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden p-6">
      {/* Background Orbs - Pink, Green, Orange Theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ff007f]/30 rounded-full blur-[80px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#32cd32]/25 rounded-full blur-[80px]" />
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-[#ff8c00]/25 rounded-full blur-[70px]" />

      <div className="glass-card p-10 w-full max-w-lg z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tighter text-white mb-2">JOIN GHAR SA</h1>
          <p className="text-muted-foreground text-[10px] uppercase tracking-[0.3em] font-bold">Authentic Home Kitchens</p>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">City</label>
              <input 
                type="text" 
                placeholder="e.g. Mumbai" 
                required
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">State</label>
              <input 
                type="text" 
                placeholder="e.g. Maharashtra" 
                required
                value={formData.state}
                onChange={(e) => setFormData({...formData, state: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-400 text-black py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] active:scale-95 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="text-center">
            <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
