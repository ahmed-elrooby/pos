"use client";

import {
  FaEye,
  FaEdit,
  FaTruck,
  FaPlusCircle,
} from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

const orders = [
  {
    id: "G-1001",
    customer: "وليد بن خالد",
    product: "رولكس ديت جست (1)",
    qty: 1,
    total: "48,500 ر.س",
    status: "delivered",
    statusLabel: "تم التسليم",
    statusColor: "bg-green-500/20 text-green-300 border-green-500/50",
    payment: "بطاقة ائتمان",
    date: "2025-05-10",
  },
  {
    id: "G-1002",
    customer: "ريم السبيعي",
    product: "حقيبة شانيل (1)",
    qty: 1,
    total: "32,500 ر.س",
    status: "shipping",
    statusLabel: "قيد الشحن",
    statusColor: "bg-purple-500/20 text-purple-300 border-purple-500/50",
    payment: "مدى",
    date: "2025-05-09",
  },
  {
    id: "G-1003",
    customer: "خالد المالكي",
    product: "بي ام دبليو i7 (1)",
    qty: 1,
    total: "425,000 ر.س",
    status: "processing",
    statusLabel: "قيد المعالجة",
    statusColor: "bg-blue-500/20 text-blue-300 border-blue-500/50",
    payment: "تحويل بنكي",
    date: "2025-05-08",
  },
  {
    id: "G-1004",
    customer: "نورة العتيبي",
    product: "طقم ألماس كارتييه (1)",
    qty: 1,
    total: "185,000 ر.س",
    status: "delivered",
    statusLabel: "تم التسليم",
    statusColor: "bg-green-500/20 text-green-300 border-green-500/50",
    payment: "بطاقة ائتمان",
    date: "2025-05-07",
  },
];

export default function OrdersTable() {
  const viewOrder = (id) => console.log("view", id);
  const editOrder = (id) => console.log("edit", id);
  const updateOrderStatus = (id) => console.log("update", id);

  return (
    <div className="glass-luxury rounded-3xl overflow-hidden border border-amber-500/30">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-amber-500/20 bg-slate-900/50 flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            🛻 قائمة الطلبات
          </h2>
          <p className="text-xs text-amber-300/60">
            إدارة ومتابعة جميع الطلبات
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
            <FaPlusCircle />
            طلب جديد
          </button>

          <select className="bg-slate-800 border border-amber-500/30 rounded-xl px-4 py-2 text-sm text-amber-300">
            <option value="all">جميع الحالات</option>
            <option value="pending">قيد المراجعة</option>
            <option value="processing">قيد المعالجة</option>
            <option value="shipped">قيد الشحن</option>
            <option value="delivered">تم التسليم</option>
            <option value="cancelled">ملغي</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-slate-800/80 text-amber-400 text-sm">
            <tr>
              <th className="px-6 py-4">رقم الطلب</th>
              <th className="px-6 py-4">العميل</th>
              <th className="px-6 py-4">المنتجات</th>
              <th className="px-6 py-4">الكمية</th>
              <th className="px-6 py-4">الإجمالي</th>
              <th className="px-6 py-4">الحالة</th>
              <th className="px-6 py-4">طريقة الدفع</th>
              <th className="px-6 py-4">التاريخ</th>
              <th className="px-6 py-4">إجراءات</th>
            </tr>
          </thead>

          <tbody className="text-slate-300 text-sm">
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-amber-500/10">
                <td className="px-6 py-4 font-bold text-amber-300">
                  {order.id}
                </td>

                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4 text-sm">{order.product}</td>
                <td className="px-6 py-4">{order.qty}</td>

                <td className="px-6 py-4 font-semibold">
                  {order.total}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${order.statusColor}`}
                  >
                    {order.statusLabel}
                  </span>
                </td>

                <td className="px-6 py-4">{order.payment}</td>
                <td className="px-6 py-4 text-amber-400/60">
                  {order.date}
                </td>

                <td className="px-6 py-4 flex gap-3">
                  <FaEye
                    className="text-amber-400 cursor-pointer hover:text-amber-300"
                    onClick={() => viewOrder(order.id)}
                  />
                  <FaEdit
                    className="text-blue-400 cursor-pointer hover:text-blue-300"
                    onClick={() => editOrder(order.id)}
                  />
                  <FaTruck
                    className="text-purple-400 cursor-pointer hover:text-purple-300"
                    onClick={() => updateOrderStatus(order.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-amber-500/20 flex justify-between text-xs text-amber-400/70">
        <span>إجمالي الطلبات: {orders.length}</span>
        <span>←</span>
      </div>
    </div>
  );
}