import React from 'react';
import { 
  HiOutlinePlus, 
  HiOutlineFilter, 
  HiOutlineDownload,
  HiOutlineCalendar,
  HiOutlineSearch 
} from 'react-icons/hi';
import { 
  BsCartPlus, 
  BsGraphUp, 
  BsShieldCheck,
  BsBell 
} from 'react-icons/bs';
import { MdVerified, MdNotificationsNone } from 'react-icons/md';

const Header = () => {
  return (
    <header className="z-20 flex flex-wrap items-center justify-between gap-4 py-4 mx-4 mt-3 shadow-sm  glass-card rounded-b-2xl px-7">
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <div className="p-2 rounded-lg bg-emerald-100">
            <BsCartPlus className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
            أوامر الشراء
          </h2>
          <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
            <MdVerified className="w-3 h-3" />
            تدقيق متكامل
          </span>
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
            <BsShieldCheck className="w-3 h-3" />
            سلسلة التوريد الذكية
          </span>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <BsGraphUp className="w-3.5 h-3.5" />
          إدارة كاملة لدورة أوامر الشراء، متابعة الحالات، الربط مع GRN وتحليل الأداء
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Search Button */}
        <button className="p-2.5 rounded-full bg-white/50 hover:bg-white text-slate-600 hover:text-emerald-600 transition-all border border-slate-200">
          <HiOutlineSearch className="w-5 h-5" />
        </button>
        
        {/* Filter Button */}
        <button className="p-2.5 rounded-full bg-white/50 hover:bg-white text-slate-600 hover:text-emerald-600 transition-all border border-slate-200">
          <HiOutlineFilter className="w-5 h-5" />
        </button>
        
        {/* Export Button */}
        <button className="p-2.5 rounded-full bg-white/50 hover:bg-white text-slate-600 hover:text-emerald-600 transition-all border border-slate-200">
          <HiOutlineDownload className="w-5 h-5" />
        </button>
        
        {/* Main CTA Button */}
        <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-full px-5 py-2.5 text-sm font-bold shadow-md flex items-center gap-2 transition-all duration-200">
          <HiOutlinePlus className="w-4 h-4" />
          <span>إنشاء أمر شراء جديد</span>
        </button>
      </div>
    </header>
  );
};

export default Header;