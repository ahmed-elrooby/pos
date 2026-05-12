"use client";

import { Search, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] backdrop-blur-2xl border border-amber-500/20 rounded-2xl p-4 flex flex-wrap justify-between items-center gap-4 sticky top-0 z-10 mb-8 shadow-[0_10px_40px_rgba(245,158,11,0.08)]">
      
      {/* Search */}
      <div className="relative w-full md:w-96">
        
        <Search className="absolute  right-4 top-1/2 -translate-y-1/2 text-amber-400/60 w-5 h-5" />

        <input
          type="text"
          placeholder="بحث ذكي ..."
          className="w-full bg-slate-900/5 border border-amber-500/20 rounded-full py-3 pr-12 pl-5 text-sm text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        
        {/* Notification */}
        <button className="relative text-amber-300/70 hover:text-amber-400 transition duration-300">
          
          <Bell className="w-7 h-7" />

          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center shadow-lg shadow-amber-500/30">
            5
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          
          <div className="text-left hidden sm:block">
            
            <p className="text-sm font-bold text-white">
              الشيخ / عبدالله الناصر
            </p>

            <p className="text-xs text-amber-400">
              مدير تنفيذي
            </p>
          </div>

          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="user"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500 shadow-xl shadow-amber-900/20"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;