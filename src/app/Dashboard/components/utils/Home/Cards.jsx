import React from 'react';
import { HiOutlineCheckCircle, HiOutlineTrendingUp, HiOutlineClipboardList, HiOutlineTrash } from 'react-icons/hi';
import { MdOutlineCheckCircle } from 'react-icons/md';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Card 1: دقة تتبع المخزون */}
      <div className="bg-[#ffffffbf] rounded-2xl p-5 card-hover stat-glow border border-[#ffffff80]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">دقة تتبع المخزون</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-800">98.7%</p>
          </div>
          <div className="p-3 shadow-sm bg-emerald-100/80 rounded-2xl">
            <HiOutlineCheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
        </div>
        <div className="mt-3 text-xs text-emerald-700 font-semibold bg-emerald-50 inline-block px-2 py-0.5 rounded-full">
          ↑ +2.3% منذ التدقيق السابق
        </div>
      </div>

      {/* Card 2: فروقات الجرد */}
      <div className="bg-[#ffffffbf] rounded-2xl p-5 card-hover border border-[#ffffff80]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">فروقات الجرد</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-800">0.42%</p>
          </div>
          <div className="p-3 bg-amber-100/80 rounded-2xl">
            <HiOutlineTrendingUp className="w-6 h-6 text-amber-600" />
          </div>
        </div>
        <div className="mt-3 text-xs text-amber-700 bg-amber-50 inline-block px-2 py-0.5 rounded-full">
          ضمن الحدود الذهبية ≤0.5%
        </div>
      </div>

      {/* Card 3: توافق PO/GRN */}
      <div className="bg-[#ffffffbf] border border-[#ffffff80] rounded-2xl p-5 card-hover">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">توافق PO/GRN</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-800">100%</p>
          </div>
          <div className="p-3 bg-blue-100/80 rounded-2xl">
            <HiOutlineClipboardList className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className="mt-3 text-xs text-blue-700 bg-blue-50 inline-block px-2 py-0.5 rounded-full">
          إلزامية GRN قبل الترحيل
        </div>
      </div>

      {/* Card 4: هدر المكونات */}
      <div className="bg-[#ffffffbf] border border-[#ffffff80] rounded-2xl p-5 card-hover">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">هدر المكونات (نسبة)</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-800">3.1%</p>
          </div>
          <div className="p-3 bg-rose-100/80 rounded-2xl">
            <HiOutlineTrash className="w-6 h-6 text-rose-600" />
          </div>
        </div>
        <div className="mt-3 text-xs text-rose-700 bg-rose-50 inline-block px-2 py-0.5 rounded-full">
          أقل من المعيار العالمي (5%)
        </div>
      </div>
    </div>
  );
};

export default Cards;