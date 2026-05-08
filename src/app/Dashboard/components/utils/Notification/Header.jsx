import React from 'react'
import { IoAdd } from 'react-icons/io5'

const Header = () => {
  return<>
  <header className="bg-[#ffffffd1] border border-[#ffffff80]  z-20 shadow-sm rounded-b-2xl mx-4 mt-3 px-7 py-4 flex flex-wrap justify-between items-center gap-4">
            <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-transparent bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
                    إشعارات الاستلام (GRN) 
                    <span className="text-xs badge-grn px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> فحص الجودة • مطابقة PO</span>
                </h2>
                <p className="mt-1 text-sm text-slate-500">مركزية استلام البضائع، فحص الكميات والتوافق مع أوامر الشراء، وتحديث المخزون الآمن لقطاع الأغذية</p>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-full shadow-sm px-5 py-2.5 border border-amber-200">
                    <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse-slow"></div>
                    <span className="text-sm font-semibold text-slate-700">وضع الاستلام النشط</span>
                </div>
                <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-6 py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition flex items-center gap-2">
                    <IoAdd className="w-4 h-4" />
                    GRN جديد
                </button>
            </div>
        </header>
  </>
}

export default Header
