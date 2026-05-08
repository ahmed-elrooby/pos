import React from 'react'

const Cards = () => {
  return <>
  <div className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-[#ffffffd1] rounded-2xl p-5 card-hover border border-amber-100/70">
                    <div className="flex items-start justify-between"><div><p className="text-sm font-medium text-slate-500">إشعارات استلام معلقة</p><p className="mt-1 text-3xl font-extrabold text-slate-800">7</p></div><div className="p-3 bg-amber-100 rounded-2xl"><svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div>
                    <div className="mt-2 text-xs text-amber-700 bg-amber-50 inline-block px-2 py-0.5 rounded-full">تتطلب فحص الجودة</div>
                </div>
                <div className="bg-[#ffffffd1] rounded-2xl p-5 card-hover border border-white/60">
                    <div className="flex items-start justify-between"><div><p className="text-sm font-medium text-slate-500">GRN مكتملة (هذا الشهر)</p><p className="mt-1 text-3xl font-extrabold text-slate-800">43</p></div><div className="p-3 bg-emerald-100 rounded-2xl"><svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div>
                    <div className="mt-2 text-xs text-emerald-700 bg-emerald-50 inline-block px-2 py-0.5 rounded-full">مطابقة 100% مع PO</div>
                </div>
                <div className="bg-[#ffffffd1] rounded-2xl p-5 card-hover border border-white/60">
                    <div className="flex items-start justify-between"><div><p className="text-sm font-medium text-slate-500">انحرافات السعر/الكمية</p><p className="mt-1 text-3xl font-extrabold text-slate-800">2</p></div><div className="p-3 bg-rose-100 rounded-2xl"><svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div></div>
                    <div className="mt-2 text-xs text-rose-700 bg-rose-50 inline-block px-2 py-0.5 rounded-full">بحاجة موافقة إدارية</div>
                </div>
                <div className="bg-[#ffffffd1] rounded-2xl p-5 card-hover border border-white/60">
                    <div className="flex items-start justify-between"><div><p className="text-sm font-medium text-slate-500">GRN اليوم (المباشر)</p><p className="mt-1 text-3xl font-extrabold text-slate-800">5</p></div><div className="p-3 bg-blue-100 rounded-2xl"><svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div></div>
                    <div className="mt-2 text-xs text-blue-700 bg-blue-50 inline-block px-2 py-0.5 rounded-full">تم التحديث التلقائي للمخزون</div>
                </div>
            </div>
  
  </>
}

export default Cards
