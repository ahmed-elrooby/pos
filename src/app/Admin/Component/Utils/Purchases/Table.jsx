"use client";

import {
  ShoppingCart,
  PlusCircle,
  Eye,
  Pencil,
} from "lucide-react";

const purchases = [
  {
    id: "PO-1001",
    supplier: "سويسري ووتشز",
    product: "ساعات رولكس (10 قيراط)",
    quantity: "15 قطعة",
    total: "725,000 ر.س",
    status: "تم الاستلام",
    statusStyle:
      "bg-amber-500/20 border border-amber-500/40 text-amber-300",
    date: "2025-05-01",
  },
  {
    id: "PO-1002",
    supplier: "مجوهرات كارتييه",
    product: "أطقم ألماس فاخرة",
    quantity: "8 طقم",
    total: "1,450,000 ر.س",
    status: "قيد الشحن",
    statusStyle:
      "bg-yellow-500/20 border border-yellow-500/50 text-yellow-300",
    date: "2025-05-08",
  },
  {
    id: "PO-1003",
    supplier: "العربية للإلكترونيات",
    product: "سماعات B&O محدودة",
    quantity: "50 قطعة",
    total: "649,950 ر.س",
    status: "تم الاستلام",
    statusStyle:
      "bg-amber-500/20 border border-amber-500/40 text-amber-300",
    date: "2025-05-05",
  },
  {
    id: "PO-1004",
    supplier: "BMW الشرق الأوسط",
    product: "سيارات i7 الفاخرة",
    quantity: "3 سيارات",
    total: "1,275,000 ر.س",
    status: "طلب مسبق",
    statusStyle:
      "bg-purple-500/20 border border-purple-500/50 text-purple-300",
    date: "2025-05-10",
  },
];

const PurchaseOrders = () => {
  return (
    <div className="rounded-3xl overflow-hidden border border-amber-500/30 mb-8 bg-slate-900/40 backdrop-blur-xl">
      
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-amber-500/20 bg-slate-900/50 flex-wrap gap-3">
        
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <ShoppingCart className="text-amber-400" size={22} />
            أوامر الشراء الذهبية
          </h2>

          <p className="text-xs text-amber-300/60 mt-1">
            آخر طلبات التوريد الفاخرة
          </p>
        </div>

        <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-2">
          <PlusCircle size={18} />
          أمر شراء جديد
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          
          <thead className="bg-slate-800/80 text-amber-400 text-sm">
            <tr>
              <th className="px-6 py-4">رقم الأمر</th>
              <th className="px-6 py-4">المورد</th>
              <th className="px-6 py-4">المنتج / الصنف</th>
              <th className="px-6 py-4">الكمية</th>
              <th className="px-6 py-4">السعر الإجمالي</th>
              <th className="px-6 py-4">الحالة</th>
              <th className="px-6 py-4">تاريخ الطلب</th>
              <th className="px-6 py-4">إجراءات</th>
            </tr>
          </thead>

          <tbody className="text-slate-300 text-sm">
            {purchases.map((purchase, index) => (
              <tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-800/30 transition-all"
              >
                <td className="px-6 py-4 font-bold text-amber-300">
                  {purchase.id}
                </td>

                <td className="px-6 py-4">
                  {purchase.supplier}
                </td>

                <td className="px-6 py-4">
                  {purchase.product}
                </td>

                <td className="px-6 py-4">
                  {purchase.quantity}
                </td>

                <td className="px-6 py-4 font-semibold">
                  {purchase.total}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${purchase.statusStyle}`}
                  >
                    {purchase.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {purchase.date}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    
                    <Eye
                      size={18}
                      className="text-amber-400 hover:text-amber-300 cursor-pointer transition-all"
                    />

                    <Pencil
                      size={18}
                      className="text-blue-400 hover:text-blue-300 cursor-pointer transition-all"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default PurchaseOrders;