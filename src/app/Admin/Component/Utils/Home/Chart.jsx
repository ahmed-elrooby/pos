"use client";

import {
  ChartBar,
  ChartPie,
  ChartLine,
} from "lucide-react";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { name: "يناير", sales: 4000 },
  { name: "فبراير", sales: 3000 },
  { name: "مارس", sales: 5000 },
  { name: "أبريل", sales: 4780 },
  { name: "مايو", sales: 5890 },
];

const pieData = [
  { name: "ذهب", value: 400 },
  { name: "ألماس", value: 300 },
  { name: "فضة", value: 200 },
];

const lineData = [
  { name: "يناير", profit: 2400 },
  { name: "فبراير", profit: 3200 },
  { name: "مارس", profit: 2800 },
  { name: "أبريل", profit: 4500 },
  { name: "مايو", profit: 5200 },
];

const COLORS = ["#f59e0b", "#d97706", "#92400e"];

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-10">

      {/* Bar Chart */}
      <div className="bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] border border-amber-500/20 rounded-3xl p-6 shadow-[0_10px_40px_rgba(245,158,11,0.08)] backdrop-blur-2xl">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <ChartBar className="w-5 h-5" />
          </div>

          <h3 className="font-black text-white">
            المبيعات المتصاعدة
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={salesData}>
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1b1206",
                border: "1px solid #f59e0b33",
                color: "#fff",
              }}
            />
            <Bar dataKey="sales" fill="#f59e0b" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] border border-amber-500/20 rounded-3xl p-6 shadow-[0_10px_40px_rgba(245,158,11,0.08)] backdrop-blur-2xl">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <ChartPie className="w-5 h-5" />
          </div>

          <h3 className="font-black text-white">
            توزيع المخزون الذهبي
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={90} label>
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#1b1206",
                border: "1px solid #f59e0b33",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] border border-amber-500/20 rounded-3xl p-6 shadow-[0_10px_40px_rgba(245,158,11,0.08)] backdrop-blur-2xl">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <ChartLine className="w-5 h-5" />
          </div>

          <h3 className="font-black text-white">
            نمو الأرباح
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1b1206",
                border: "1px solid #f59e0b33",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#f59e0b"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default ChartsSection;