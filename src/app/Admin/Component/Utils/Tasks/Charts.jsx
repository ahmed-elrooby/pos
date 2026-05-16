"use client";

import {
  BarChart3,
  PieChart,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart as RePieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyOrders = [
  { month: "يناير", orders: 30 },
  { month: "فبراير", orders: 45 },
  { month: "مارس", orders: 60 },
  { month: "أبريل", orders: 40 },
  { month: "مايو", orders: 70 },
  { month: "يونيو", orders: 55 },
];

const ordersStatus = [
  { name: "مكتملة", value: 40 },
  { name: "قيد المعالجة", value: 30 },
  { name: "ملغاة", value: 10 },
];

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

const OrdersCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-8">

      {/* Bar Chart */}
      <div className="glass-luxury rounded-3xl p-6 border border-amber-500/20">

        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <BarChart3 size={18} />
          </div>

          <h3 className="font-black text-white">
            الطلبات الشهرية 2025
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyOrders}>
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Bar dataKey="orders" fill="#f59e0b" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Pie Chart */}
      <div className="glass-luxury rounded-3xl p-6 border border-amber-500/20">

        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <PieChart size={18} />
          </div>

          <h3 className="font-black text-white">
            حالة الطلبات
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <RePieChart>
            <Pie
              data={ordersStatus}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {ordersStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </RePieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default OrdersCharts;