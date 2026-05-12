"use client";

import {
  Trophy,
  ChartColumn,
  ArrowLeft,
} from "lucide-react";

const OrdersTable = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] backdrop-blur-2xl rounded-3xl overflow-hidden border border-amber-500/20 shadow-[0_10px_40px_rgba(245,158,11,0.08)]">
      
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-amber-500/20 bg-black/30">
        
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Trophy className="text-amber-400 w-5 h-5" />
            أحدث الطلبات الذهبية
          </h2>

          <p className="text-xs text-amber-400/60">
            سجل المعاملات الفاخرة
          </p>
        </div>

        <button className="bg-amber-500/10 border border-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-bold hover:bg-amber-500/20 transition flex items-center gap-2">
          <ChartColumn className="w-4 h-4" />
          تقرير متقدم
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-right">

          <thead className="bg-black/40 text-amber-400 text-sm">
            <tr>
              <th className="px-6 py-4">رقم الطلب</th>
              <th className="px-6 py-4">العميل</th>
              <th className="px-6 py-4">المنتج الفاخر</th>
              <th className="px-6 py-4">الحالة</th>
              <th className="px-6 py-4">السعر</th>
              <th className="px-6 py-4">التاريخ</th>
            </tr>
          </thead>

          <tbody className="text-slate-300 text-sm">

            <tr className="hover:bg-amber-500/5 transition">
              <td className="px-6 py-4 font-bold text-amber-300">#G-1001</td>
              <td className="px-6 py-4">وليد بن خالد</td>
              <td className="px-6 py-4">ساعة رولكس حصرية</td>

              <td className="px-6 py-4">
                <span className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs text-amber-300">
                  تم التسليم
                </span>
              </td>

              <td className="px-6 py-4 font-semibold">48,000 ر.س</td>
              <td className="px-6 py-4">2025-05-10</td>
            </tr>

            <tr className="hover:bg-amber-500/5 transition">
              <td className="px-6 py-4 font-bold text-amber-300">#G-1002</td>
              <td className="px-6 py-4">ريم السبيعي</td>
              <td className="px-6 py-4">حقيبة شانيل محدودة</td>

              <td className="px-6 py-4">
                <span className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs text-amber-300">
                  قيد الشحن
                </span>
              </td>

              <td className="px-6 py-4 font-semibold">32,500 ر.س</td>
              <td className="px-6 py-4">2025-05-09</td>
            </tr>

            <tr className="hover:bg-amber-500/5 transition">
              <td className="px-6 py-4 font-bold text-amber-300">#G-1003</td>
              <td className="px-6 py-4">خالد المالكي</td>
              <td className="px-6 py-4">سيارة BMW i7</td>

              <td className="px-6 py-4">
                <span className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-300 text-xs">
                  طلب VIP
                </span>
              </td>

              <td className="px-6 py-4 font-semibold">425,000 ر.س</td>
              <td className="px-6 py-4">2025-05-08</td>
            </tr>

            <tr className="hover:bg-amber-500/5 transition">
              <td className="px-6 py-4 font-bold text-amber-300">#G-1004</td>
              <td className="px-6 py-4">نورة العتيبي</td>
              <td className="px-6 py-4">مجوهرات كارتييه</td>

              <td className="px-6 py-4">
                <span className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs text-amber-300">
                  مكتمل
                </span>
              </td>

              <td className="px-6 py-4 font-semibold">78,200 ر.س</td>
              <td className="px-6 py-4">2025-05-07</td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-amber-500/20 flex justify-between items-center text-amber-400/70 text-xs bg-black/30">
        <span>إجمالي القيمة: 596,699 ر.س</span>
        <ArrowLeft className="w-4 h-4" />
      </div>

    </div>
  );
};

export default OrdersTable;