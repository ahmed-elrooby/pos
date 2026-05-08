import React from 'react';
import { HiOutlineShoppingBag, HiOutlineClock, HiOutlineCheckCircle, HiOutlineCurrencyDollar } from 'react-icons/hi';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Card 1 */}
      <div className="p-5 border bg-[#ffffffbf]  border-[#ffffffbf] rounded-2xl card-hover ">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">إجمالي أوامر الشراء (هذا الشهر)</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-800">47</p>
          </div>
          <div className="p-3 bg-indigo-100/80 rounded-2xl">
            <HiOutlineShoppingBag className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
        <div className="mt-3 text-xs text-indigo-700 bg-indigo-50 inline-block px-2 py-0.5 rounded-full">
          ↑ +12% عن الشهر الماضي
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-5 border bg-[#ffffffbf]  border-[#ffffffbf] rounded-2xl card-hover">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">أوامر مفتوحة (قيد التنفيذ)</p>
            <p className="mt-1 text-3xl font-extrabold text-amber-600">14</p>
          </div>
          <div className="p-3 bg-amber-100/80 rounded-2xl">
            <HiOutlineClock className="w-6 h-6 text-amber-600" />
          </div>
        </div>
        <div className="mt-3 text-xs text-amber-700 bg-amber-50 inline-block px-2 py-0.5 rounded-full">
          تتطلب متابعة الاستلام
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-5 border bg-[#ffffffbf]  border-[#ffffffbf] rounded-2xl card-hover">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">GRN مكتملة (مطابقة)</p>
            <p className="mt-1 text-3xl font-extrabold text-emerald-600">33</p>
          </div>
          <div className="p-3 bg-emerald-100/80 rounded-2xl">
            <HiOutlineCheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
        </div>
        <div className="mt-3 text-xs text-emerald-700 bg-emerald-50 inline-block px-2 py-0.5 rounded-full">
          نسبة إنجاز 70.2%
        </div>
      </div>

      {/* Card 4 */}
      <div className="p-5 border bg-[#ffffffbf]  border-[#ffffffbf] rounded-2xl card-hover">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">قيمة الطلبات (بالألف ر.س)</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-800">287.5K</p>
          </div>
          <div className="p-3 bg-purple-100/80 rounded-2xl">
            <HiOutlineCurrencyDollar className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <div className="mt-3 text-xs text-purple-700 bg-purple-50 inline-block px-2 py-0.5 rounded-full">
          انحراف معياري أقل من 2%
        </div>
      </div>
    </div>
  );
};

export default Cards;