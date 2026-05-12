"use client";

import Link from "next/link";
import {
  Crown,
  Gem,
  ShoppingCart,
  Boxes,
  Database,
  Truck,
  Warehouse,
  Handshake,
  ChartColumn,
  ChevronLeft,
  Medal,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-80 relative bg-[#0f0f0f] text-white shadow-2xl z-20 flex-shrink-0 overflow-y-auto rounded-l-3xl">

      {/* Top */}
      <div className="p-7 border-b border-white/10 flex items-center gap-3">
        
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-700 flex items-center justify-center shadow-xl shadow-amber-900/30">
          <Crown className="text-white w-7 h-7" />
        </div>

        <div>
          <h1 className="text-2xl font-black tracking-wider">
            GOLDEN
            <span className="text-amber-400">ERP</span>
          </h1>

          <p className="text-[10px] text-amber-300/70 font-semibold uppercase tracking-wide">
            Luxury Management
          </p>
        </div>
      </div>

      {/* Links */}
      <nav className="px-5 py-8 space-y-2">

        <Link
          href="#"
          className="flex items-center gap-4 px-5 py-3.5 text-base font-bold rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20"
        >
          <Gem className="w-5 h-5" />

          <span>الرئيسية</span>

          <ChevronLeft className="mr-auto w-4 h-4" />
        </Link>

        <Link
          href="/Admin"
          className="flex items-center gap-4 px-5 py-3 text-amber-100/70 hover:text-amber-300 hover:bg-white/5 rounded-xl duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>المشتريات</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 px-5 py-3 text-amber-100/70 hover:text-amber-300 hover:bg-white/5 rounded-xl duration-300"
        >
          <Boxes className="w-5 h-5" />
          <span>المنتجات</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 px-5 py-3 text-amber-100/70 hover:text-amber-300 hover:bg-white/5 rounded-xl duration-300"
        >
          <Database className="w-5 h-5" />
          <span>المخزون</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 px-5 py-3 text-amber-100/70 hover:text-amber-300 hover:bg-white/5 rounded-xl duration-300"
        >
          <Truck className="w-5 h-5" />
          <span>الطلبات</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 px-5 py-3 text-amber-100/70 hover:text-amber-300 hover:bg-white/5 rounded-xl duration-300"
        >
          <Warehouse className="w-5 h-5" />
          <span>استلام البضائع</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 px-5 py-3 text-amber-100/70 hover:text-amber-300 hover:bg-white/5 rounded-xl duration-300"
        >
          <Handshake className="w-5 h-5" />
          <span>الموردين</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 px-5 py-3 text-amber-100/70 hover:text-amber-300 hover:bg-white/5 rounded-xl duration-300"
        >
          <ChartColumn className="w-5 h-5" />
          <span>التقارير</span>
        </Link>
      </nav>

      {/* Bottom Card */}
      <div className="absolute bottom-8 left-3 right-3">
        <div className="bg-gradient-to-r from-amber-900/20 to-black/40 rounded-2xl p-4 text-center border border-amber-500/30 backdrop-blur">
          
          <Medal className="text-amber-400 w-6 h-6 mx-auto mb-1" />

          <p className="text-[10px] text-amber-200">
            الإصدار الذهبي 3.0
          </p>

          <div className="w-full h-[1px] bg-amber-500/30 my-2"></div>

          <span className="text-xs text-amber-300/80">
            ✨ VIP Support
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;