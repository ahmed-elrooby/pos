"use client";

import {
  History,
  PlusCircle,
  MinusCircle,
  ArrowLeftRight,
} from "lucide-react";

const movements = [
  {
    id: 1,
    type: "add",
    text: "إضافة 15 قطعة من رولكس ديت جست",
    date: "2025-05-11 10:23",
    icon: PlusCircle,
    color: "text-green-400",
  },
  {
    id: 2,
    type: "out",
    text: "خروج 3 قطع - طلب #G-1003",
    date: "2025-05-10 14:45",
    icon: MinusCircle,
    color: "text-red-400",
  },
  {
    id: 3,
    type: "transfer",
    text: "تحويل 5 قطع إلى فرع جدة",
    date: "2025-05-09 09:12",
    icon: ArrowLeftRight,
    color: "text-blue-400",
  },
];

const MovementLog = () => {
  return (
    <div className="mt-8 glass-luxury rounded-3xl p-6 border border-amber-500/20">

      {/* Title */}
      <h3 className="font-black text-white mb-5 flex items-center gap-2">
        <History className="text-amber-400" size={18} />
        آخر حركات المخزون
      </h3>

      {/* List */}
      <div className="space-y-3">
        {movements.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex justify-between items-center p-3 border-b border-amber-500/10 text-sm hover:bg-white/5 transition rounded-xl"
            >
              {/* Left text */}
              <span className="flex items-center gap-2 text-slate-200">
                <Icon className={item.color} size={16} />
                {item.text}
              </span>

              {/* Date */}
              <span className="text-amber-400/60 text-xs">
                {item.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovementLog;