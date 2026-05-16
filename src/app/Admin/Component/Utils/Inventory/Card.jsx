"use client";

import { Warehouse, Building2, Building } from "lucide-react";

const warehouses = [
  {
    id: 1,
    name: "المستودع الرئيسي",
    location: "الرياض - المدينة الصناعية",
    items: 1284,
    capacity: 75,
    icon: Warehouse,
  },
  {
    id: 2,
    name: "فرع الرياض",
    location: "الربوة - مبنى رقم 5",
    items: 456,
    capacity: 45,
    icon: Building2,
  },
  {
    id: 3,
    name: "فرع جدة",
    location: "البوادي - طريق الملك",
    items: 623,
    capacity: 62,
    icon: Building,
  },
];

const WarehousesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {warehouses.map((w) => {
        const Icon = w.icon;

        return (
          <div
            key={w.id}
            className="group text-center rounded-2xl p-6 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(251,191,36,0.15)]"
          >
            {/* Icon */}
            <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition">
              <Icon size={28} />
            </div>

            {/* Title */}
            <h4 className="font-bold text-white text-lg">
              {w.name}
            </h4>

            {/* Location */}
            <p className="text-xs text-amber-400/70 mt-1">
              {w.location}
            </p>

            {/* Items */}
            <div className="mt-4">
              <span className="text-2xl font-bold text-amber-300">
                {w.items}
              </span>
              <span className="text-xs text-slate-400 mr-1">
                قطعة
              </span>
            </div>

            {/* Progress */}
            <div className="w-full bg-slate-800/60 rounded-full h-2 mt-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-amber-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${w.capacity}%` }}
              />
            </div>

            {/* Capacity */}
            <p className="text-xs text-slate-400 mt-2">
              السعة {w.capacity}%
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WarehousesGrid;