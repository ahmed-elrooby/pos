"use client";

import {
  TrendingUp,
  FileText,
  Handshake,
  CheckCircle,
  ChartNoAxesCombined,
} from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      
      {/* Card 1 */}
      <div className="rounded-2xl p-5 bg-slate-900 border border-slate-800 transition-all hover:scale-[1.02]">
        <div className="flex justify-between">
          
          <div>
            <p className="text-amber-400/80 text-xs">
              إجمالي المشتريات
            </p>

            <h2 className="text-3xl font-black text-white mt-1">
              3,287,500 ر.س
            </h2>
          </div>

          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <ChartNoAxesCombined size={22} />
          </div>
        </div>

        <span className="text-green-400 text-[11px] mt-2 inline-flex items-center gap-1">
          <TrendingUp size={14} />
          +23% عن الشهر الماضي
        </span>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl p-5 bg-slate-900 border border-slate-800">
        <div className="flex justify-between">
          
          <div>
            <p className="text-amber-400/80 text-xs">
              عدد أوامر الشراء
            </p>

            <h2 className="text-3xl font-black text-white">
              189
            </h2>
          </div>

          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <FileText size={22} />
          </div>
        </div>

        <span className="text-amber-400 text-[11px]">
          هذا الشهر: 42
        </span>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl p-5 bg-slate-900 border border-slate-800">
        <div className="flex justify-between">
          
          <div>
            <p className="text-amber-400/80 text-xs">
              الموردين النشطين
            </p>

            <h2 className="text-3xl font-black text-white">
              38
            </h2>
          </div>

          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Handshake size={22} />
          </div>
        </div>

        <span className="text-green-400 text-[11px]">
          +5 جديد
        </span>
      </div>

      {/* Card 4 */}
      <div className="rounded-2xl p-5 bg-gradient-to-tr from-amber-900/20 to-slate-900 border border-slate-800">
        
        <div>
          <p className="text-amber-400/80 text-xs">
            متوسط وقت التسليم
          </p>

          <h2 className="text-3xl font-black text-amber-300">
            4.2 يوم
          </h2>
        </div>

        <span className="text-green-300 text-xs mt-2 inline-flex items-center gap-1">
          <CheckCircle size={14} />
          كفاءة عالية
        </span>
      </div>
    </div>
  );
};

export default StatsCards;