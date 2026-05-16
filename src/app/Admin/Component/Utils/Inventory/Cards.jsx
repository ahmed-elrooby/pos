"use client";

import {
  Boxes,
  ChartNoAxesCombined,
  TriangleAlert,
  Building2,
  TrendingUp,
} from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

      {/* Total Items */}
      <div className="group rounded-2xl p-5 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(251,191,36,0.15)]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-amber-400/70 text-xs">إجمالي الأصناف</p>
            <h2 className="text-3xl font-black text-white mt-1">
              8
            </h2>
          </div>

          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition">
            <Boxes size={20} />
          </div>
        </div>

        <span className="text-green-400 text-[11px] mt-3 inline-flex items-center gap-1">
          <TrendingUp size={14} /> نشط
        </span>
      </div>

      {/* Total Value */}
      <div className="group rounded-2xl p-5 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(251,191,36,0.15)]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-amber-400/70 text-xs">إجمالي القيمة</p>
            <h2 className="text-3xl font-black text-white mt-1">
              9,424,472
            </h2>
          </div>

          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition">
            <ChartNoAxesCombined size={20} />
          </div>
        </div>

        <span className="text-green-400 text-[11px] mt-3">ر.س</span>
      </div>

      {/* Low Stock */}
      <div className="group rounded-2xl p-5 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(239,68,68,0.15)]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-amber-400/70 text-xs">منخفضة المخزون</p>
            <h2 className="text-3xl font-black text-amber-400 mt-1">
              0
            </h2>
          </div>

          <div className="w-11 h-11 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center group-hover:scale-110 transition">
            <TriangleAlert size={20} />
          </div>
        </div>

        <span className="text-red-400 text-[11px] mt-3">
          بحاجة لإعادة طلب
        </span>
      </div>

      {/* Warehouses */}
      <div className="group rounded-2xl p-5 bg-gradient-to-tr from-amber-900/20 to-slate-900 border border-amber-500/20 backdrop-blur-xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(251,191,36,0.2)]">
        <div>
          <p className="text-amber-400/70 text-xs">المستودعات</p>
          <h2 className="text-3xl font-black text-amber-300 mt-1">
            3
          </h2>
        </div>

        <span className="text-amber-300 text-[11px] mt-3 inline-flex items-center gap-1">
          <Building2 size={14} /> الرئيسي - الرياض - جدة
        </span>
      </div>

    </div>
  );
};

export default StatsCards;