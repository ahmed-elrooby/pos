"use client";

import {
  Database,
  Pencil,
  Trash2,
  CheckCircle2,
  Boxes,
  Gem,
  Car,
  Headphones,
  ShoppingBag,
  Watch,
} from "lucide-react";

const inventory = [
  {
    id: 1,
    name: "رولكس ديت جست",
    category: "🕐 ساعات",
    qty: 45,
    buy: "38,500 ر.س",
    sell: "48,500 ر.س",
    total: "1,732,500 ر.س",
    date: "2025-05-01",
    icon: Watch,
  },
  {
    id: 2,
    name: "طقم ألماس كارتييه",
    category: "💎 مجوهرات",
    qty: 12,
    buy: "125,000 ر.س",
    sell: "185,000 ر.س",
    total: "1,500,000 ر.س",
    date: "2025-05-03",
    icon: Gem,
  },
  {
    id: 3,
    name: "بي ام دبليو i7",
    category: "🚗 سيارات",
    qty: 5,
    buy: "395,000 ر.س",
    sell: "425,000 ر.س",
    total: "1,975,000 ر.س",
    date: "2025-04-28",
    icon: Car,
  },
  {
    id: 4,
    name: "سماعات B&O",
    category: "📱 إلكترونيات",
    qty: 28,
    buy: "8,999 ر.س",
    sell: "12,999 ر.س",
    total: "251,972 ر.س",
    date: "2025-05-05",
    icon: Headphones,
  },
  {
    id: 5,
    name: "حقيبة شانيل",
    category: "👜 حقائب",
    qty: 8,
    buy: "25,000 ر.س",
    sell: "32,500 ر.س",
    total: "200,000 ر.س",
    date: "2025-05-02",
    icon: ShoppingBag,
  },
  {
    id: 6,
    name: "باتيك فيليب",
    category: "🕐 ساعات",
    qty: 3,
    buy: "235,000 ر.س",
    sell: "285,000 ر.س",
    total: "705,000 ر.س",
    date: "2025-04-25",
    icon: Watch,
  },
  {
    id: 7,
    name: "خاتم ألماس 5 قيراط",
    category: "💎 مجوهرات",
    qty: 15,
    buy: "72,000 ر.س",
    sell: "95,000 ر.س",
    total: "1,080,000 ر.س",
    date: "2025-05-07",
    icon: Gem,
  },
  {
    id: 8,
    name: "مرسيدس S-Class",
    category: "🚗 سيارات",
    qty: 4,
    buy: "495,000 ر.س",
    sell: "550,000 ر.س",
    total: "1,980,000 ر.س",
    date: "2025-04-30",
    icon: Car,
  },
];

const InventoryTable = () => {
  const handleEdit = (id) => console.log("edit", id);
  const handleDelete = (id) => console.log("delete", id);

  return (
    <div className="glass-luxury rounded-3xl overflow-hidden border border-amber-500/20">

      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-amber-500/20 bg-slate-900/50 flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Database className="text-amber-400" size={20} />
            قائمة المخزون
          </h2>
          <p className="text-xs text-amber-300/60">
            جميع المنتجات مع تفاصيل الكمية والقيمة
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:shadow-lg transition">
            + إضافة صنف
          </button>

          <button className="bg-slate-700/50 text-amber-300 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-700/70 transition">
            تصدير
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-right text-sm">

          <thead className="bg-slate-800/80 text-amber-400">
            <tr>
              <th className="px-6 py-4">المنتج</th>
              <th className="px-6 py-4">الفئة</th>
              <th className="px-6 py-4">الكمية</th>
              <th className="px-6 py-4">سعر الشراء</th>
              <th className="px-6 py-4">سعر البيع</th>
              <th className="px-6 py-4">الإجمالي</th>
              <th className="px-6 py-4">الحالة</th>
              <th className="px-6 py-4">آخر تحديث</th>
              <th className="px-6 py-4">إجراءات</th>
            </tr>
          </thead>

          <tbody className="text-slate-300">
            {inventory.map((item) => {
              const Icon = item.icon;

              return (
                <tr
                  key={item.id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >

                  {/* Product */}
                  <td className="px-6 py-4 font-bold text-amber-300 flex items-center gap-2">
                    <Icon size={16} />
                    {item.name}
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">{item.category}</td>

                  {/* Qty */}
                  <td className="px-6 py-4 text-white font-bold">
                    {item.qty}
                  </td>

                  {/* Buy */}
                  <td className="px-6 py-4">{item.buy}</td>

                  {/* Sell */}
                  <td className="px-6 py-4 text-amber-300 font-semibold">
                    {item.sell}
                  </td>

                  {/* Total */}
                  <td className="px-6 py-4 font-semibold text-white">
                    {item.total}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span className="text-green-400 text-xs flex items-center gap-1">
                      <CheckCircle2 size={14} />
                      جيد
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-amber-400/60">
                    {item.date}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 flex gap-3">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;