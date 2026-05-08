import React from 'react';
import { 
  HiOutlineShoppingCart, 
  HiOutlineDocumentText, 
  HiOutlineCog, 
  HiOutlineTrash,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineChartBar
} from 'react-icons/hi';
import { 
  MdProductionQuantityLimits, 
  MdVerified,
  MdOutlineInventory 
} from 'react-icons/md';
import { FaBoxes, FaClipboardCheck, FaStar } from 'react-icons/fa';

const Work = () => {
  return (
    <div className="overflow-hidden shadow-xl gradient-border bg-white/80 backdrop-blur-sm rounded-2xl">
      <div className="px-6 py-4 border-b bg-gradient-to-r from-white/50 to-emerald-50/30 border-emerald-100">
        <h3 className="flex items-center gap-2 text-lg font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <MdProductionQuantityLimits className="w-5 h-5 text-emerald-600" />
          سير العمل التشغيلي (PO → GRN → إنتاج)
        </h3>
      </div>
      
      <div className="p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Card 1: أوامر شراء مفتوحة */}
          <div className="p-3 transition-shadow duration-200 bg-slate-50 rounded-xl hover:shadow-md group">
            <span className="flex items-center block gap-1 text-xs text-slate-500">
              <HiOutlineShoppingCart className="w-3 h-3 text-amber-500" />
              أوامر شراء مفتوحة
            </span>
            <span className="text-xl font-bold transition-colors text-slate-800 group-hover:text-amber-600">14</span>
          </div>
          
          {/* Card 2: GRNs غير مسوية */}
          <div className="p-3 transition-shadow duration-200 bg-slate-50 rounded-xl hover:shadow-md group">
            <span className="flex items-center block gap-1 text-xs text-slate-500">
              <HiOutlineDocumentText className="w-3 h-3 text-blue-500" />
              GRNs غير مسوية
            </span>
            <span className="text-xl font-bold transition-colors text-slate-800 group-hover:text-blue-600">2</span>
          </div>
          
          {/* Card 3: أوامر إنتاج نشطة */}
          <div className="p-3 transition-shadow duration-200 bg-slate-50 rounded-xl hover:shadow-md group">
            <span className="flex items-center block gap-1 text-xs text-slate-500">
              <MdProductionQuantityLimits className="w-3 h-3 text-emerald-500" />
              أوامر إنتاج نشطة
            </span>
            <span className="text-xl font-bold transition-colors text-slate-800 group-hover:text-emerald-600">8</span>
          </div>
          
          {/* Card 4: هدر مسجل */}
          <div className="p-3 transition-shadow duration-200 bg-slate-50 rounded-xl hover:shadow-md group">
            <span className="flex items-center block gap-1 text-xs text-slate-500">
              <HiOutlineTrash className="w-3 h-3 text-rose-500" />
              هدر مسجل (شهر)
            </span>
            <span className="text-xl font-bold transition-colors text-slate-800 group-hover:text-rose-600">156 كجم</span>
          </div>
        </div>
        
        <div className="p-4 mt-1 transition-colors border bg-gradient-to-r from-slate-50 to-white rounded-xl border-slate-100 hover:border-emerald-200">
          <p className="flex items-center gap-2 font-bold text-slate-800">
            <FaStar className="w-4 h-4 text-amber-500" />
            أفضل الممارسات المطبقة:
          </p>
          <ul className="mt-2 space-y-1 text-sm list-disc list-inside text-slate-600 marker:text-amber-500">
            <li className="flex items-start gap-2">
              <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>تسجيل GRN إلزامي قبل إضافة الكميات للمخزون مع فحص الجودة.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaClipboardCheck className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>استهلاك المكونات عبر وصفات الإنتاج الدقيقة (Recipe costing).</span>
            </li>
            <li className="flex items-start gap-2">
              <HiOutlineChartBar className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>مراجعة الهدر مع السبب (تلف/خطأ إنتاج) لتحليل الجودة.</span>
            </li>
            <li className="flex items-start gap-2">
              <MdOutlineInventory className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>جرد دوري أسبوعي مع تسوية الفروقات تلقائياً.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;