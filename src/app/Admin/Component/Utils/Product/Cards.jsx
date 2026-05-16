"use client";

import {
  Boxes,
  Tags,
  ChartNoAxesCombined,
  TriangleAlert,
  Crown,
  TrendingUp,
} from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">

      {/* Total Products */}
      <div className="group relative rounded-2xl p-5 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-amber-400/70 text-xs mb-1">إجمالي المنتجات</p>
            <h2 className="text-3xl font-black text-white">10</h2>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition">
            <Boxes size={20} />
          </div>
        </div>
        <span className="text-green-400 text-[11px] mt-3 inline-flex gap-1 items-center">
          <TrendingUp size={14} /> +124 جديد
        </span>
      </div>

      {/* Categories */}
      <div className="group relative rounded-2xl p-5 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-amber-400/70 text-xs mb-1">الفئات</p>
            <h2 className="text-3xl font-black text-white">12</h2>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition">
            <Tags size={20} />
          </div>
        </div>
        <span className="text-amber-400 text-[11px] mt-3">متنوعة</span>
      </div>

      {/* Stock Value */}
      <div className="group relative rounded-2xl p-5 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-amber-400/70 text-xs mb-1">قيمة المخزون</p>
            <h2 className="text-3xl font-black text-white">4.2M ر.س</h2>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition">
            <ChartNoAxesCombined size={20} />
          </div>
        </div>
        <span className="text-green-400 text-[11px] mt-3">+18%</span>
      </div>

      {/* Low Stock */}
      <div className="group relative rounded-2xl p-5 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)]">
        <div>
          <p className="text-amber-400/70 text-xs mb-1">منخفضة المخزون</p>
          <h2 className="text-3xl font-black text-amber-400">5</h2>
        </div>
        <span className="text-red-400 text-xs inline-flex items-center gap-1 mt-3">
          <TriangleAlert size={14} /> بحاجة لإعادة طلب
        </span>
      </div>

      {/* Best Seller */}
      <div className="group relative rounded-2xl p-5 bg-gradient-to-br from-amber-900/30 via-slate-900 to-black border border-amber-500/20 backdrop-blur-xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.25)]">
        <div>
          <p className="text-amber-400/80 text-xs mb-1">الأكثر مبيعاً</p>
          <h2 className="text-xl font-black text-amber-300">ساعات رولكس</h2>
        </div>
        <span className="text-amber-300 text-xs inline-flex items-center gap-1 mt-3">
          <Crown size={14} /> 342 قطعة
        </span>
      </div>

    </div>
  );
};

export default StatsCards;