"use client";

import React from "react";
import { FaCalendarAlt, FaCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#ffffffbf] border border-[#ffffff80] sticky top-0 z-20 shadow-sm rounded-b-2xl mx-4 mt-3 px-7 py-4 flex flex-wrap justify-between items-center gap-4 backdrop-blur">

      {/* Left */}
      <div>
        <h2 className="flex items-center gap-2 text-2xl font-bold text-transparent bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
          تدقيق شامل لنظام المخزون

          <span className="text-xs px-3 py-1.5 rounded-full shadow-sm bg-amber-100 text-amber-700 font-semibold">
            تكامل POS متقدم • أغذية راقية
          </span>
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          التحقق من سلامة البيانات، الفجوات التشغيلية، وأفضل ممارسات قطاع الأغذية والمشروبات
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Status */}
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-full shadow-sm px-5 py-2.5 border border-white">
          <FaCircle className="text-emerald-500 text-[10px] animate-pulse" />
          <span className="text-sm font-semibold text-slate-700">
            تكامل POS لحظي
          </span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-5 py-2.5 text-sm font-bold shadow-md">
          <FaCalendarAlt />
          <span>22 أبريل 2026 • تقرير التدقيق</span>
        </div>

      </div>
    </header>
  );
};

export default Header;