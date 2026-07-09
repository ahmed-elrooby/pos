"use client";

import { Admin } from "@/app/Provider/AdminProvider/AdminContext";
import {
  Trophy,
  ChartColumn,
  ArrowLeft,
} from "lucide-react";
import { useContext, useMemo } from "react";

const OrdersTable = () => {
  const { Orders } = useContext(Admin);

  // =============================
  // ✅ SAFE DATA
  // =============================
  const ordersList = Orders?.data || [];

  // =============================
  // 💰 TOTAL VALUE
  // =============================
  const totalValue = useMemo(() => {
    return ordersList.reduce((acc, order) => {
      return acc + (Number(order.total) || 0);
    }, 0);
  }, [ordersList]);

  // =============================
  // 🎨 STATUS STYLE
  // =============================
  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return "text-emerald-300 border-emerald-500/30 bg-emerald-500/10";
      case "pending":
        return "text-yellow-300 border-yellow-500/30 bg-yellow-500/10";
      case "cancelled":
        return "text-red-300 border-red-500/30 bg-red-500/10";
      default:
        return "text-amber-300 border-amber-500/30 bg-amber-500/10";
    }
  };

  return (
    <div className="bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] backdrop-blur-2xl rounded-3xl overflow-hidden border border-amber-500/20 shadow-[0_10px_40px_rgba(245,158,11,0.08)]">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center p-6 border-b border-amber-500/20 bg-black/30">

        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Trophy className="text-amber-400 w-5 h-5" />
            أحدث الطلبات
          </h2>

          <p className="text-xs text-amber-400/60">
            عدد الطلبات: {ordersList.length}
          </p>
        </div>

        <button className="bg-amber-500/10 border border-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-bold hover:bg-amber-500/20 transition flex items-center gap-2">
          <ChartColumn className="w-4 h-4" />
          تقرير
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto">

        <table className="w-full text-right">

          <thead className="bg-black/40 text-amber-400 text-sm">
            <tr>
              <th className="px-6 py-4">رقم الطلب</th>
              <th className="px-6 py-4">الإجمالي</th>
              <th className="px-6 py-4">التكلفة</th>
              <th className="px-6 py-4">الربح</th>
              <th className="px-6 py-4">الحالة</th>
              <th className="px-6 py-4">التاريخ</th>
            </tr>
          </thead>

          <tbody className="text-slate-300 text-sm">

            {ordersList.length > 0 ? (
              ordersList.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-amber-500/5 transition"
                >

                  <td className="px-6 py-4 font-bold text-amber-300">
                    #{order.id}
                  </td>

                  <td className="px-6 py-4">
                    {order.total} ر.س
                  </td>

                  <td className="px-6 py-4">
                    {order.total_cost} ر.س
                  </td>

                  <td className="px-6 py-4 font-semibold text-emerald-300">
                    {order.profit} ر.س
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs border ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    {new Date(order.created_at).toLocaleDateString("ar-EG")}
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-10 text-gray-500"
                >
                  لا توجد طلبات
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="p-4 border-t border-amber-500/20 flex justify-between items-center text-amber-400/70 text-xs bg-black/30">

        <span>
          إجمالي القيمة: {totalValue.toFixed(2)} ر.س
        </span>

        <ArrowLeft className="w-4 h-4" />
      </div>

    </div>
  );
};

export default OrdersTable;