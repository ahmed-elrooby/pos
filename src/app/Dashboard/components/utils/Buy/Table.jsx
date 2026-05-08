import React from 'react';
import { 
  HiOutlineEye, 
  HiOutlineDocumentText, 
  HiOutlineClipboardList,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineRefresh 
} from 'react-icons/hi';

import { 
  FaBoxOpen, 
  FaCheckDouble,
  FaRegClock 
} from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineAddCircle, MdOutlinePending, MdOutlineSpatialTracking } from 'react-icons/md';

const Table = () => {
  return (
    <div className="my-6 overflow-hidden border shadow-xl glass-card rounded-2xl border-white/60">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 border-b border-indigo-100 bg-gradient-to-r from-indigo-50/30 to-white">
        <h3 className="flex items-center gap-2 text-xl font-bold">
          <HiOutlineClipboardList className="w-5 h-5 text-indigo-600" />
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          قائمة أوامر الشراء النشطة
        </h3>
        <span className="text-xs bg-white shadow-sm px-3 py-1.5 rounded-full text-indigo-700 font-semibold flex items-center gap-1">
          <HiOutlineRefresh className="w-3 h-3" />
          آخر تحديث: 22 أبريل 2026 - 15:20
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50/80">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-right text-gray-600 uppercase">رقم PO</th>
              <th className="px-6 py-4 text-xs font-semibold text-right text-gray-600 uppercase">المورد</th>
              <th className="px-6 py-4 text-xs font-semibold text-right text-gray-600 uppercase">تاريخ الإنشاء</th>
              <th className="px-6 py-4 text-xs font-semibold text-right text-gray-600 uppercase">إجمالي القيمة</th>
              <th className="px-6 py-4 text-xs font-semibold text-right text-gray-600 uppercase">الحالة</th>
              <th className="px-6 py-4 text-xs font-semibold text-right text-gray-600 uppercase">GRN مرجع</th>
              <th className="px-6 py-4 text-xs font-semibold text-right text-gray-600 uppercase">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 bg-white/50">
            {/* Row 1 */}
            <tr className="transition-all duration-200 hover:bg-amber-50/30 group">
              <td className="px-6 py-4 font-bold text-slate-700">PO-10124</td>
              <td className="px-6 py-4 text-slate-600">مؤسسة الأغذية الأولى</td>
              <td className="px-6 py-4 text-sm text-slate-600">2026-04-18</td>
              <td className="px-6 py-4 font-semibold text-slate-800">48,750 ر.س</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full shadow-sm status-badge bg-amber-100 text-amber-800">
                  <HiOutlineClock className="w-3 h-3" />
                  مستلمة جزئياً
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-indigo-600">GRN-4221 (75%)</td>
              <td className="px-6 py-4">
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 text-sm font-medium transition-colors text-amber-700 hover:text-amber-900">
                    <MdOutlineSpatialTracking className="w-4 h-4" />
                    تتبع
                  </button>
                  <button className="flex items-center gap-1 text-sm transition-colors text-slate-500 hover:text-slate-700">
                    <HiOutlineDocumentText className="w-4 h-4" />
                    GRN
                  </button>
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="transition-all duration-200 hover:bg-emerald-50/30 group">
              <td className="px-6 py-4 font-bold text-slate-700">PO-10189</td>
              <td className="px-6 py-4 text-slate-600">مستلزمات المطابخ الحديثة</td>
              <td className="px-6 py-4 text-sm text-slate-600">2026-04-20</td>
              <td className="px-6 py-4 font-semibold text-slate-800">23,200 ر.س</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full status-badge bg-emerald-100 text-emerald-800">
                  <HiOutlineCheckCircle className="w-3 h-3" />
                  مكتملة GRN
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-indigo-600">GRN-4250 (100%)</td>
              <td className="px-6 py-4">
                <button className="flex items-center gap-1 text-sm transition-colors text-slate-500 hover:text-slate-700">
                  <HiOutlineEye className="w-4 h-4" />
                  عرض
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="transition-all duration-200 hover:bg-blue-50/30 group">
              <td className="px-6 py-4 font-bold text-slate-700">PO-10203</td>
              <td className="px-6 py-4 text-slate-600">شركة اللحوم الطازجة</td>
              <td className="px-6 py-4 text-sm text-slate-600">2026-04-21</td>
              <td className="px-6 py-4 font-semibold text-slate-800">112,400 ر.س</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold text-blue-800 bg-blue-100 rounded-full status-badge">
                  <MdOutlinePending className="w-3 h-3" />
                  مفتوحة (لم تستلم)
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-400">—</td>
              <td className="px-6 py-4">
                <button className="flex items-center gap-1 text-sm font-medium transition-colors text-amber-700 hover:text-amber-900">
                  <MdOutlineAddCircle className="w-4 h-4" />
                  تسجيل وصول
                </button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="transition-all duration-200 hover:bg-emerald-50/30 group">
              <td className="px-6 py-4 font-bold text-slate-700">PO-10156</td>
              <td className="px-6 py-4 text-slate-600">منتجات الألبان الفاخرة</td>
              <td className="px-6 py-4 text-sm text-slate-600">2026-04-15</td>
              <td className="px-6 py-4 font-semibold text-slate-800">34,560 ر.س</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full status-badge bg-emerald-100 text-emerald-800">
                  <FaCheckDouble className="w-3 h-3" />
                  مغلقة
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-indigo-600">GRN-4198 (100%)</td>
              <td className="px-6 py-4">
                <button className="flex items-center gap-1 text-sm transition-colors text-slate-500 hover:text-slate-700">
                  <HiOutlineEye className="w-4 h-4" />
                  تفاصيل
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;