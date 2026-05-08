import React from 'react';
import { 
  HiOutlineChartBar, 
  HiOutlineCheckCircle, 
  HiOutlineExclamationCircle,
  HiOutlineLightBulb,
  HiOutlineRefresh,
  HiOutlineClock,
  HiOutlineDatabase
} from 'react-icons/hi';
import { 
  MdVerified, 
  MdWarning, 
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions 
} from 'react-icons/md';
import { 
  FaClipboardCheck, 
  FaChartLine, 
  FaRobot,
  FaShoppingCart 
} from 'react-icons/fa';
import { BiTrendingUp, BiErrorCircle } from 'react-icons/bi';

const Results = () => {
  return (
    <div className="overflow-hidden border shadow-xl glass-card rounded-2xl border-white/60">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 border-b bg-gradient-to-r from-amber-50/40 to-white border-amber-100">
        <h3 className="flex items-center gap-2 text-xl font-bold">
          <MdOutlineAnalytics className="w-5 h-5 text-purple-600" />
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
          نتائج التدقيق التحليلي | الفجوات، المخاطر والتوصيات الاستراتيجية
        </h3>
        <span className="text-xs bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full font-semibold shadow-sm flex items-center gap-1">
          <MdVerified className="w-3 h-3" />
          متوافق مع معايير ISO 22000 &amp; أفضل الممارسات
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50/70">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold tracking-wider text-right text-gray-600 uppercase">
                <div className="flex items-center justify-end gap-1">
                  <HiOutlineDatabase className="w-3 h-3" />
                  <span>المكون / العملية</span>
                </div>
              </th>
              <th className="px-6 py-4 text-xs font-semibold tracking-wider text-right text-gray-600 uppercase">
                <div className="flex items-center justify-end gap-1">
                  <HiOutlineChartBar className="w-3 h-3" />
                  <span>الحالة الحالية</span>
                </div>
              </th>
              <th className="px-6 py-4 text-xs font-semibold tracking-wider text-right text-gray-600 uppercase">
                <div className="flex items-center justify-end gap-1">
                  <BiErrorCircle className="w-3 h-3" />
                  <span>الفجوات / المخاطر</span>
                </div>
              </th>
              <th className="px-6 py-4 text-xs font-semibold tracking-wider text-right text-gray-600 uppercase">
                <div className="flex items-center justify-end gap-1">
                  <HiOutlineLightBulb className="w-3 h-3" />
                  <span>توصيات محسنة وذكية</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {/* Row 1: تتبع المخزون */}
            <tr className="transition-colors hover:bg-amber-50/30">
              <td className="flex items-center gap-2 px-6 py-4 font-bold text-slate-700">
                <FaClipboardCheck className="w-4 h-4 text-amber-600" />
                تتبع المخزون (التعديلات)
              </td>
              <td className="px-6 py-4">
                <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 w-fit">
                  <HiOutlineExclamationCircle className="w-3 h-3" />
                  مرتفع الجودة جزئياً
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                بعض التعديلات اليدوية دون تدقيق موافقات
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-purple-700">
                تطبيق سير عمل الموافقة المزدوجة + تسجيل سبب التعديل إجبارياً + توثيق Audit Trail
              </td>
            </tr>

            {/* Row 2: PO / GRN cycle */}
            <tr className="transition-colors hover:bg-green-50/30">
              <td className="flex items-center gap-2 px-6 py-4 font-bold text-slate-700">
                <FaShoppingCart className="w-4 h-4 text-blue-600" />
                PO / GRN cycle
              </td>
              <td className="px-6 py-4">
                <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full w-fit">
                  <HiOutlineCheckCircle className="w-3 h-3" />
                  متوافق 100%
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                لا توجد مراجعة للأسعار عند الاستلام بشكل آلي
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-purple-700">
                ربط GRN مع PO لمطابقة الكميات/الأسعار وإنشاء تنبيه للانحرافات + تحليل التباين
              </td>
            </tr>

            {/* Row 3: عمليات الإنتاج */}
            <tr className="transition-colors hover:bg-amber-50/30">
              <td className="flex items-center gap-2 px-6 py-4 font-bold text-slate-700">
                <HiOutlineRefresh className="w-4 h-4 text-emerald-600" />
                عمليات الإنتاج (BOM)
              </td>
              <td className="px-6 py-4">
                <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 w-fit">
                  <BiTrendingUp className="w-3 h-3" />
                  فرصة تحسين استراتيجية
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                استهلاك المكونات لا يراعي الفاقد المعياري (scrap allowance)
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-purple-700">
                إضافة نسبة هدر معيارية لكل مكون في وصفة الإنتاج لتحسين دقة التكلفة والتخطيط
              </td>
            </tr>

            {/* Row 4: إدارة الهدر */}
            <tr className="transition-colors hover:bg-green-50/30">
              <td className="flex items-center gap-2 px-6 py-4 font-bold text-slate-700">
                <HiOutlineExclamationCircle className="w-4 h-4 text-rose-600" />
                إدارة الهدر (Waste)
              </td>
              <td className="px-6 py-4">
                <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full w-fit">
                  <FaRobot className="w-3 h-3" />
                  نظام متقدم
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                لا يوجد تحليل آلي لأسباب الهدر الأكثر تكراراً
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-purple-700">
                دمج لوحة تحليلات ذكية لتصنيف الهدر حسب السبب وتكراره (جاهزية للذكاء الاصطناعي)
              </td>
            </tr>

            {/* Row 5: الجرد والتسوية */}
            <tr className="transition-colors hover:bg-amber-50/30">
              <td className="flex items-center gap-2 px-6 py-4 font-bold text-slate-700">
                <HiOutlineClock className="w-4 h-4 text-orange-600" />
                الجرد والتسوية
              </td>
              <td className="px-6 py-4">
                <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 w-fit">
                  <HiOutlineClock className="w-3 h-3" />
                  يدوي شهري
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                تأخر في اكتشاف الفروقات، عدم استخدام الجرد المستمر
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-purple-700">
                تطبيق جرد دائري (Cycle counting) للأصناف عالية الحركة أسبوعياً + أتمتة التسوية
              </td>
            </tr>

            {/* Row 6: تكامل POS */}
            <tr className="transition-colors hover:bg-green-50/30">
              <td className="flex items-center gap-2 px-6 py-4 font-bold text-slate-700">
                <MdOutlineIntegrationInstructions className="w-4 h-4 text-indigo-600" />
                تكامل POS / الطلبات
              </td>
              <td className="px-6 py-4">
                <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full w-fit">
                  <HiOutlineCheckCircle className="w-3 h-3" />
                  كامل ونشط
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                تأخر زمني 5-10 ثوان في المزامنة خلال الذروة
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-purple-700">
                ترقية قائمة انتظار الأحداث (Event Sourcing) أو استخدام webhooks لتقليل زمن المزامنة إلى &lt;2 ثانية
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;