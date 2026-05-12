"use client";

import {
  Gem,
  ClipboardList,
  Truck,
  ChartColumn,
  TriangleAlert,
  PackageOpen,
  ArrowUp,
} from "lucide-react";

const stats = [
  {
    title: "إجمالي المنتجات",
    value: "2,345",
    icon: Gem,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    shadow: "shadow-[0_10px_40px_rgba(34,211,238,0.08)]",
    status: "+14%",
    statusColor: "text-green-400",
  },

  {
    title: "إجمالي الطلبات",
    value: "872",
    icon: ClipboardList,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    shadow: "shadow-[0_10px_40px_rgba(139,92,246,0.08)]",
    status: "+21% هذا الشهر",
    statusColor: "text-green-400",
  },

  {
    title: "الموردين",
    value: "142",
    icon: Truck,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    shadow: "shadow-[0_10px_40px_rgba(245,158,11,0.08)]",
    status: "معتمدين عالميًا",
    statusColor: "text-amber-300",
  },

  {
    title: "إجمالي المبيعات",
    value: "229K$",
    icon: ChartColumn,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    shadow: "shadow-[0_10px_40px_rgba(16,185,129,0.08)]",
    status: "+44% عن الربع الماضي",
    statusColor: "text-green-400",
  },

  {
    title: "منخفضة المخزون",
    value: "18",
    icon: PackageOpen,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    shadow: "shadow-[0_10px_40px_rgba(244,63,94,0.08)]",
    status: "تنبيه بالمخزون",
    statusColor: "text-red-400",
  },

  {
    title: "الأرباح الشهرية",
    value: "54.8K$",
    icon: ArrowUp,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    shadow: "shadow-[0_10px_40px_rgba(249,115,22,0.08)]",
    status: "+32%",
    statusColor: "text-orange-300",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              ${item.border}
              bg-white/[0.03]
              backdrop-blur-2xl
              p-6
              transition-all
              duration-500
              hover:-translate-y-2
              hover:scale-[1.02]
              ${item.shadow}
              group
            `}
          >

            {/* Glow Effect */}
            <div
              className={`
                absolute
                -top-10
                -left-10
                w-32
                h-32
                rounded-full
                blur-3xl
                opacity-10
                ${item.bg}
              `}
            />

            {/* Top */}
            <div className="flex items-start justify-between relative z-10">

              <div>
                <p className="text-white/50 text-sm mb-2 font-medium">
                  {item.title}
                </p>

                <h2 className="text-4xl font-black text-white tracking-tight">
                  {item.value}
                </h2>
              </div>

              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  ${item.bg}
                  ${item.color}
                  border
                  border-white/10
                  group-hover:scale-110
                  transition-all
                  duration-500
                `}
              >
                <Icon className="w-6 h-6" />
              </div>

            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between mt-8 relative z-10">

              <span
                className={`
                  text-xs
                  font-semibold
                  px-3
                  py-1
                  rounded-full
                  bg-white/5
                  ${item.statusColor}
                `}
              >
                {item.status}
              </span>

              <div className="flex items-center gap-1 text-white/30 text-xs">
                <TriangleAlert className="w-3 h-3" />
                Live
              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default StatsCards;