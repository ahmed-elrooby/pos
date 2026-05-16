"use client";

import {
  PieChart as PieIcon,
  LineChart as LineIcon,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const pieData = [
  { name: "ساعات", value: 35 },
  { name: "مجوهرات", value: 25 },
  { name: "سيارات", value: 20 },
  { name: "إلكترونيات", value: 20 },
];

const lineData = [
  { month: "يناير", value: 400 },
  { month: "فبراير", value: 600 },
  { month: "مارس", value: 500 },
  { month: "أبريل", value: 800 },
  { month: "مايو", value: 700 },
  { month: "يونيو", value: 900 },
];

const COLORS = ["#f59e0b", "#eab308", "#f97316", "#84cc16"];

const InventoryCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-8">

      {/* Pie Chart */}
      <div className="rounded-3xl p-6 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <PieIcon size={18} />
          </div>
          <h3 className="font-black text-white">
            توزيع المخزون حسب الفئة
          </h3>
        </div>

        {/* Chart */}
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                innerRadius={60}
                paddingAngle={5}
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart */}
      <div className="rounded-3xl p-6 bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <LineIcon size={18} />
          </div>
          <h3 className="font-black text-white">
            حركة المخزون (آخر 6 أشهر)
          </h3>
        </div>

        {/* Chart */}
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: "#f59e0b", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default InventoryCharts;