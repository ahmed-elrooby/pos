"use client";

import { useContext, useMemo } from "react";
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

import { Admin } from "@/app/Provider/AdminProvider/AdminContext";

const COLORS = ["#f59e0b", "#d97706", "#92400e", "#fbbf24", "#78350f"];

const ChartsSection = () => {
  const { Suppliers, Orders, StockCounts } = useContext(Admin);

  // =============================
  // ✅ SAFE DATA
  // =============================
  const suppliersList = Suppliers?.data || [];
  const ordersList = Orders?.data || [];
  const stockList = StockCounts?.data || [];

  // =============================
  // 📊 BAR DATA (Counts)
  // =============================
  const barData = useMemo(() => {
    return [
      { name: "الموردين", value: suppliersList.length },
      { name: "الطلبات", value: ordersList.length },
      { name: "المخزون", value: stockList.length },
    ];
  }, [suppliersList, ordersList, stockList]);

  // =============================
  // 🥧 PIE DATA (Suppliers by Address)
  // =============================
  const pieData = useMemo(() => {
    if (!suppliersList.length) return [];

    const map = {};

    suppliersList.forEach((item) => {
      const key = item.address?.trim() || "غير محدد";
      map[key] = (map[key] || 0) + 1;
    });

    return Object.entries(map).map(([key, value]) => ({
      name: key,
      value,
    }));
  }, [suppliersList]);

  // =============================
  // 📈 LINE DATA (Simple growth simulation)
  // =============================
  const lineData = useMemo(() => {
    const base = suppliersList.length;

    return [
      { name: "Week 1", value: base * 0.2 },
      { name: "Week 2", value: base * 0.5 },
      { name: "Week 3", value: base * 0.8 },
      { name: "Week 4", value: base },
    ];
  }, [suppliersList]);

  // =============================
  // 📌 TOTAL
  // =============================
  const totalSystem =
    suppliersList.length + ordersList.length + stockList.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-10">

      {/* ================= BAR CHART ================= */}
      <div className="bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] border border-amber-500/20 rounded-3xl p-6">

        <div className="flex items-center gap-3 mb-4">
          <ChartBar className="w-5 h-5 text-amber-400" />
          <h3 className="text-white font-bold">
            مقارنة النظام
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                borderRadius: "10px",
                border: "1px solid #f59e0b33",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="value"
              fill="#f59e0b"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ================= PIE CHART ================= */}
      <div className="relative bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] border border-amber-500/20 rounded-3xl p-6">

        <div className="flex items-center gap-3 mb-4">
          <ChartPie className="w-5 h-5 text-amber-400" />
          <h3 className="text-white font-bold">
            توزيع الموردين حسب المنطقة
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={90}
              innerRadius={55}
              paddingAngle={4}
            >
              {pieData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* ================= CENTER TOTAL ================= */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-white text-3xl font-bold">
            {suppliersList.length} {/* ✅ هنا = 5 */}
          </span>
          <span className="text-gray-400 text-xs">
            إجمالي الموردين
          </span>
        </div>
      </div>

      {/* ================= LINE CHART ================= */}
      <div className="bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] border border-amber-500/20 rounded-3xl p-6">

        <div className="flex items-center gap-3 mb-4">
          <ChartLine className="w-5 h-5 text-amber-400" />
          <h3 className="text-white font-bold">
            نمو الموردين
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
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