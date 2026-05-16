"use client";

import { useState } from "react";
import {
  Watch,
  Gem,
  Car,
  Smartphone,
  ShoppingBag,
} from "lucide-react";

const categories = [
  { id: "all", label: "جميع المنتجات", icon: null },
  { id: "watches", label: "ساعات فاخرة", icon: Watch },
  { id: "jewelry", label: "مجوهرات", icon: Gem },
  { id: "cars", label: "سيارات فاخرة", icon: Car },
  { id: "electronics", label: "إلكترونيات", icon: Smartphone },
  { id: "bags", label: "حقائب", icon: ShoppingBag },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex gap-3 mb-6 overflow-x-auto pb-2 ">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              relative flex items-center gap-2 whitespace-nowrap
              px-5 py-2 rounded-full text-sm font-semibold
              transition-all duration-300
              border backdrop-blur-xl
              
              ${
                isActive
                  ? "bg-gradient-to-r from-amber-500/20 to-amber-600/10 text-amber-300 border-amber-500/50 shadow-[0_0_20px_rgba(251,191,36,0.25)] scale-[1.05]"
                  : "bg-slate-900/60 text-amber-200/70 border-white/10 hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-300 hover:scale-[1.03]"
              }
            `}
          >
            {/* Icon */}
            {Icon && <Icon size={16} className="shrink-0" />}

            {/* Label */}
            {cat.label}

            {/* Active indicator */}
            {isActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;