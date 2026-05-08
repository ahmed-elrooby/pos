import React from 'react';
import { 
  HiClock, 
  HiShoppingCart, 
  HiBadgeCheck, 
  HiInformationCircle 
} from 'react-icons/hi';
import { MdSync, MdVerified } from 'react-icons/md';
import { FaStore, FaCheckDouble } from 'react-icons/fa';

const Sales = () => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 shadow-xl gradient-border bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl">
      <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-white/50 to-amber-50/30 border-amber-100">
        <h3 className="flex items-center gap-2 text-lg font-bold">
          <FaStore className="w-5 h-5 text-amber-600" />
          تكامل نظام نقاط البيع (POS)
        </h3>
        <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
          <MdSync className="w-3 h-3 animate-spin" style={{ animationDuration: '2s' }} />
          مزامنة فورية
        </span>
      </div>
      
      <div className="p-6 space-y-5">
        <div className="flex flex-col gap-2 pb-3 border-b border-gray-100 sm:flex-row sm:justify-between sm:items-center">
          <span className="flex items-center gap-2 font-medium text-slate-600">
            <HiClock className="w-4 h-4 text-amber-500" />
            آخر مزامنة طلبات POS:
          </span>
          <span className="px-2 py-1 font-mono text-sm font-bold rounded text-slate-800 bg-slate-100">
            2026-04-22 14:32:18
          </span>
        </div>
        
        <div className="flex flex-col gap-2 pb-3 border-b border-gray-100 sm:flex-row sm:justify-between sm:items-center">
          <span className="flex items-center gap-2 font-medium text-slate-600">
            <HiShoppingCart className="w-4 h-4 text-amber-500" />
            إجمالي طلبات اليوم (المتكاملة):
          </span>
          <span className="text-2xl font-bold text-amber-700">342 طلب</span>
        </div>
        
        <div className="flex flex-col gap-2 pb-3 border-b border-gray-100 sm:flex-row sm:justify-between sm:items-center">
          <span className="flex items-center gap-2 font-medium text-slate-600">
            <HiBadgeCheck className="w-4 h-4 text-emerald-500" />
            تحديث المخزون التلقائي:
          </span>
          <span className="flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-full bg-emerald-100 text-emerald-800">
            <FaCheckDouble className="w-3 h-3" />
            نشط • خصم المكونات
          </span>
        </div>
        
        <div className="p-4 mt-2 transition-colors border bg-gradient-to-r from-amber-50/50 to-amber-100/30 rounded-xl border-amber-100 hover:border-amber-200">
          <p className="text-sm text-slate-700">
            <span className="flex items-center gap-1 font-bold text-amber-800">
              <MdVerified className="w-4 h-4 text-amber-600" />
              ✓ حالة التكامل:
            </span>
            جميع مبيعات نقاط البيع تخصم المكونات الأولية (BOM) تلقائياً وفق FIFO، التحقق من سلامة البيانات لا يظهر تناقضات.
          </p>
        </div>
        
        <div className="flex items-start gap-2 p-3 text-xs border-l-4 text-amber-800 bg-amber-100 rounded-xl border-amber-500">
          <HiInformationCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>تم فحص edge cases : إلغاء الطلبات، المرتجعات، والعروض الترويجية تؤثر عكسياً بدقة على المخزون.</span>
        </div>
      </div>
    </div>
  );
};

export default Sales;