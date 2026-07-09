"use client";

import { Admin } from "@/app/Provider/AdminProvider/AdminContext";
import {
  ShoppingCart,
  PlusCircle,
  Eye,
  Pencil,
} from "lucide-react";
import { useContext, useMemo } from "react";

const PurchaseOrders = () => {
  const { Purchases } = useContext(Admin);

  const data = Purchases?.data || [];

  // 🔥 تحويل البيانات من API لشكل مناسب للجدول
  const purchases = useMemo(() => {
    return data.map((purchase) => {
      // إجمالي كل purchase = items
      const total = purchase.items?.reduce((sum, item) => {
        const price = Number(item.price || 0);
        const qty = Number(item.quantity || 0);
        return sum + price * qty;
      }, 0) || 0;

      // status styling
      let statusStyle = "";
      let statusLabel = purchase.status;

      switch (purchase.status) {
        case "pending":
          statusStyle =
            "bg-yellow-500/20 border border-yellow-500/50 text-yellow-300";
          statusLabel = "قيد الانتظار";
          break;

        case "completed":
          statusStyle =
            "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300";
          statusLabel = "تم الاستلام";
          break;

        case "shipping":
          statusStyle =
            "bg-purple-500/20 border border-purple-500/40 text-purple-300";
          statusLabel = "قيد الشحن";
          break;

        default:
          statusStyle =
            "bg-slate-500/20 border border-slate-500/40 text-slate-300";
      }

      return {
        id: `PO-${purchase.id}`,
        supplier: `مورد رقم ${purchase.supplier_id}`, // لو عندك API suppliers نبدله بالاسم
        product: `عدد العناصر: ${purchase.items?.length || 0}`,
        quantity: `${purchase.items?.reduce((a, i) => a + Number(i.quantity || 0), 0)} قطعة`,
        total: `${total.toLocaleString()} ر.س`,
        status: statusLabel,
        statusStyle,
        date: new Date(purchase.created_at).toLocaleDateString("ar-EG"),
      };
    });
  }, [data]);

  return (
    <div className="rounded-3xl overflow-hidden border border-amber-500/30 mb-8 bg-slate-900/40 backdrop-blur-xl">

      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-amber-500/20 bg-slate-900/50 flex-wrap gap-3">

        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <ShoppingCart className="text-amber-400" size={22} />
            أوامر الشراء
          </h2>

          <p className="text-xs text-amber-300/60 mt-1">
            إجمالي النتائج: {Purchases?.total || 0}
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
              <th className="px-6 py-4">عدد العناصر</th>
              <th className="px-6 py-4">الكمية</th>
              <th className="px-6 py-4">السعر الإجمالي</th>
              <th className="px-6 py-4">الحالة</th>
              <th className="px-6 py-4">تاريخ الطلب</th>
              <th className="px-6 py-4">إجراءات</th>
            </tr>
          </thead>

          <tbody className="text-slate-300 text-sm">

            {purchases.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-10 text-slate-500">
                  لا يوجد بيانات
                </td>
              </tr>
            ) : (
              purchases.map((purchase, index) => (
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

                  <td className="px-6 py-4 font-semibold text-emerald-300">
                    {purchase.total}
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${purchase.statusStyle}`}>
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
                        className="text-amber-400 hover:text-amber-300 cursor-pointer"
                      />

                      <Pencil
                        size={18}
                        className="text-blue-400 hover:text-blue-300 cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default PurchaseOrders;