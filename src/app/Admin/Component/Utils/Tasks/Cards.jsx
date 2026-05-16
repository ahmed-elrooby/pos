"use client";

import {
  ShoppingCart,
  Loader2,
  CheckCircle2,
  TrendingUp,
  Banknote,
  Percent,
} from "lucide-react";

const stats = [
  {
    id: 1,
    label: "إجمالي الطلبات",
    value: "6",
    icon: ShoppingCart,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    note: "+32%",
    noteColor: "text-green-400",
  },
  {
    id: 2,
    label: "قيد المعالجة",
    value: "2",
    icon: Loader2,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    note: "جاري التجهيز",
    noteColor: "text-yellow-400",
  },
  {
    id: 3,
    label: "تم التسليم",
    value: "2",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-500/10",
    note: "مكتملة",
    noteColor: "text-green-400",
  },
  {
    id: 4,
    label: "إجمالي الإيرادات",
    value: "1,001,998",
    icon: Banknote,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    note: "ر.س",
    noteColor: "text-green-400",
  },
  {
    id: 5,
    label: "متوسط قيمة الطلب",
    value: "167,000",
    icon: Percent,
    color: "text-amber-300",
    bg: "bg-amber-900/20",
    note: "ر.س",
    noteColor: "text-amber-300",
  },
];

const OrdersStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className={`stat-card rounded-2xl p-5 transition-all hover:scale-[1.03] border border-white/10 ${item.bg}`}
          >

            {/* Top */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-amber-400/80 text-xs">
                  {item.label}
                </p>

                <h2 className="text-3xl font-black text-white mt-1">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}
              >
                <Icon size={20} />
              </div>
            </div>

            {/* Bottom note */}
            <span
              className={`text-[11px] mt-3 inline-flex items-center gap-1 ${item.noteColor}`}
            >
              {item.id === 1 && <TrendingUp size={12} />}
              {item.note}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersStats;