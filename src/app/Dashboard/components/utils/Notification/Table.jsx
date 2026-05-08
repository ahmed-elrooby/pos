import React from 'react'
import { IoCheckmark, IoArrowForward } from 'react-icons/io5'

const Table = () => {
  return <>
  <div className="overflow-hidden shadow-xl gradient-border-grn bg-white/90 backdrop-blur-sm rounded-2xl">
                <div className="flex flex-wrap items-center justify-between px-6 py-5 border-b bg-gradient-to-r from-amber-50/50 to-white border-amber-100">
                    <h3 className="flex items-center gap-2 text-xl font-bold"><span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span> إشعارات الاستلام الواردة | الفحص والمطابقة</h3>
                    <div className="flex gap-2">
                        <span className="text-xs bg-white/80 shadow-sm px-3 py-1.5 rounded-full border">🔍 ترشيح: PO مفتوحة</span>
                        <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full font-semibold">🧾 تكامل POS محدث</span>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-100">
                        <thead className="bg-gray-50/60">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold tracking-wider text-right text-gray-600 uppercase">رقم GRN / مرجع PO</th>
                                <th className="px-6 py-4 text-xs font-bold tracking-wider text-right text-gray-600 uppercase">المورد / الصنف</th>
                                <th className="px-6 py-4 text-xs font-bold tracking-wider text-right text-gray-600 uppercase">الكمية المستلمة / المتوقعة</th>
                                <th className="px-6 py-4 text-xs font-bold tracking-wider text-right text-gray-600 uppercase">حالة الجودة / الفحص</th>
                                <th className="px-6 py-4 text-xs font-bold tracking-wider text-right text-gray-600 uppercase">التوافق مع PO</th>
                                <th className="px-6 py-4 text-xs font-bold tracking-wider text-right text-gray-600 uppercase">إجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="transition hover:bg-amber-50/40">
                                <td className="px-6 py-4 font-mono text-sm font-bold text-slate-700">GRN-24115 <span className="block text-xs text-slate-400">PO-9823 / أغذية</span></td>
                                <td className="px-6 py-4"><span className="font-medium">مؤسسة الأغذية العضوية</span><br/><span className="text-xs text-gray-500">طماطم عضوية - درجة أولى</span></td>
                                <td className="px-6 py-4"><span className="font-bold text-emerald-700">520 كجم</span> <span className="text-xs text-gray-400">/ 520 كجم</span></td>
                                <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">✅ فحص معتمد</span></td>
                                <td className="px-6 py-4"><div className="flex items-center gap-1"><span className="text-green-600">مطابق 100%</span> <IoCheckmark className="w-4 h-4 text-green-500" /></div></td>
                                <td className="px-6 py-4"><button className="text-amber-700 text-xs font-bold bg-amber-50 px-3 py-1.5 rounded-full shadow-sm hover:bg-amber-100 transition">ترحيل للمخزون</button></td>
                            </tr>
                            <tr className="transition grn-row-highlight">
                                <td className="px-6 py-4 font-mono text-sm font-bold text-slate-700">GRN-24118 <span className="block text-xs text-slate-400">PO-9911 / لحوم طازجة</span></td>
                                <td className="px-6 py-4"><span className="font-medium">مصنع اللحوم الفاخرة</span><br/><span className="text-xs text-gray-500">لحم بقر مبرد - شرائح</span></td>
                                <td className="px-6 py-4"><span className="font-bold text-amber-700">310 كجم</span> <span className="text-xs text-gray-400">/ 350 كجم</span> <span className="mr-1 text-xs text-rose-500">(نقص 40 كجم)</span></td>
                                <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">⚠️ فحص جزئي / عينة</span></td>
                                <td className="px-6 py-4"><div className="text-sm font-semibold text-amber-700">انحراف كمي <span className="font-mono">-11.4%</span></div></td>
                                <td className="px-6 py-4"><button className="text-indigo-700 text-xs font-bold bg-indigo-50 px-3 py-1.5 rounded-full shadow-sm hover:bg-indigo-100 transition">مراجعة الانحراف</button></td>
                            </tr>
                            <tr className="transition hover:bg-amber-50/40">
                                <td className="px-6 py-4 font-mono text-sm font-bold text-slate-700">GRN-24120 <span className="block text-xs text-slate-400">PO-9945 / مشروبات</span></td>
                                <td className="px-6 py-4"><span className="font-medium">شركة المرطبات العالمية</span><br/><span className="text-xs text-gray-500">عصائر طبيعية - عبوات 1لتر</span></td>
                                <td className="px-6 py-4"><span className="font-bold text-emerald-700">1200 وحدة</span> <span className="text-gray-400">/ 1200 وحدة</span></td>
                                <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">مطابقة كاملة</span></td>
                                <td className="px-6 py-4"><div className="flex gap-1"><span className="text-green-600">سعر وكمية مطابق</span></div></td>
                                <td className="px-6 py-4"><button className="text-amber-700 text-xs font-bold bg-amber-50 px-3 py-1.5 rounded-full transition">تأكيد وترحيل</button></td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-mono text-sm font-bold text-slate-700">GRN-24122 <span className="block text-xs text-slate-400">PO-9960 / ألبان</span></td>
                                <td className="px-6 py-4"><span className="font-medium">مصنع ألبان الخير</span><br/><span className="text-xs text-gray-500">جبن موزاريلا - طازج</span></td>
                                <td className="px-6 py-4"><span className="font-bold text-emerald-700">285 كجم</span> <span className="text-gray-400">/ 285 كجم</span></td>
                                <td className="px-6 py-4"><span className="px-3 py-1 text-xs text-green-800 bg-green-100 rounded-full">فحص جودة معتمد</span></td>
                                <td className="px-6 py-4"><span className="text-green-600">مطابق</span></td>
                                <td className="px-6 py-4"><button className="text-amber-700 text-xs font-bold bg-amber-50 px-3 py-1.5 rounded-full">إتمام الاستلام</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between p-4 text-sm border-t bg-amber-50/40 border-amber-100">
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400"></span> إجمالي GRNs قيد الانتظار : 3 بحاجة إلى فحص جودة إضافي</div>
                    <a href="#" className="flex items-center gap-1 font-semibold text-amber-700 hover:underline">عرض جميع الإشعارات <IoArrowForward classNameName="w-4 h-4" /></a>
                </div>
            </div>
  </>
}

export default Table
