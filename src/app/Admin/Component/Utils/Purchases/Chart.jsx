"use client";

import {
  PieChart as PieChartIcon,
  ChartNoAxesCombined,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const supplierData = [
  { name: "سويسري ووتشز", value: 725000 },
  { name: "كارتييه", value: 1450000 },
  { name: "العربية", value: 649950 },
  { name: "BMW", value: 1275000 },
];

const monthlyData = [
  { month: "يناير", purchases: 400000 },
  { month: "فبراير", purchases: 650000 },
  { month: "مارس", purchases: 500000 },
  { month: "أبريل", purchases: 950000 },
  { month: "مايو", purchases: 1450000 },
  { month: "يونيو", purchases: 1200000 },
];

const COLORS = ["#f59e0b", "#eab308", "#fbbf24", "#d97706"];

const PurchaseCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
      
      {/* Pie Chart */}
      <div className="rounded-3xl p-6 bg-slate-900/40 backdrop-blur-xl border border-amber-500/20">
        
        <div className="flex items-center gap-3 mb-6">
          
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <PieChartIcon size={20} />
          </div>

          <h3 className="font-black text-white">
            توزيع المشتريات حسب المورد
          </h3>
        </div>

        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            
            <PieChart>
              <Pie
                data={supplierData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                innerRadius={55}
                paddingAngle={5}
              >
                {supplierData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>

          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart */}
      <div className="rounded-3xl p-6 bg-slate-900/40 backdrop-blur-xl border border-amber-500/20">
        
        <div className="flex items-center gap-3 mb-6">
          
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <ChartNoAxesCombined size={20} />
          </div>

          <h3 className="font-black text-white">
            شهريًا (المشتريات 2025)
          </h3>
        </div>

        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            
            <LineChart data={monthlyData}>
              
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#334155"
              />

              <XAxis
                dataKey="month"
                stroke="#cbd5e1"
              />

              <YAxis stroke="#cbd5e1" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="purchases"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>

          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCharts;