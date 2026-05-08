"use client";
import React from 'react';
import { 
  HiOutlineClipboardList, 
  HiOutlineShoppingCart, 
  HiOutlineDocumentText, 
  HiOutlineTrash, 
  HiOutlineCreditCard,
  HiOutlineRefresh 
} from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { FaBoxes, FaClipboardCheck } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Aside = () => {
  const links = [
    { href: "/Dashboard", label: "لوحة التحكم", icon: <MdDashboard className="w-5 h-5" />, badge: null, section: "main" },
    { href: "/Dashboard/BuyPage", label: "أوامر الشراء", icon: <HiOutlineShoppingCart className="w-5 h-5" />, badge: null, section: "workflow" },
    { href: "/Dashboard/NotificationPage", label: "إشعارات الاستلام", icon: <HiOutlineDocumentText className="w-5 h-5" />, badge: null, section: "workflow" },
    { href: "/Dashboard/ProductionPage", label: "الإنتاج والاستهلاك", icon: <FaBoxes className="w-5 h-5" />, badge: null, section: "workflow" },
    { href: "/Dashboard/InventoryPage", label: "المخزون", icon: <FaClipboardCheck className="w-5 h-5" />, badge: "24", section: "workflow" },
    { href: "/Dashboard/WastePage", label: "إدارة الهدر", icon: <HiOutlineTrash className="w-5 h-5" />, badge: null, section: "workflow" },
    { href: "/Dashboard/POSIntegration", label: "طلبات نقاط البيع", icon: <HiOutlineCreditCard className="w-5 h-5" />, badge: "3", section: "pos" },
    { href: "/Dashboard/InventorySync", label: "مزامنة المخزون", icon: <HiOutlineRefresh className="w-5 h-5" />, badge: null, section: "pos" },
  ];
  
  const pathname = usePathname();
  
  const isActive = (href) => {
    if (href === "/Dashboard") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };
  
  return (
    <aside className="flex-shrink-0 overflow-y-auto text-white bg-black border-l shadow-2xl w-80 border-white/10">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 shadow-lg rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 float-icon">
            <HiOutlineClipboardList className="h-7 w-7 text-slate-900" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-white to-amber-300 bg-clip-text">
              Audit<span className="text-amber-400">Stock</span>
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">نظام تدقيق المخزون الذكي</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 py-6">
        {/* Main Section */}
        <div className="px-6 mb-3 text-xs font-semibold tracking-wider uppercase text-slate-400">
          القائمة الرئيسية
        </div>
        
        {links.filter(link => link.section === "main").map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className={`flex items-center justify-between gap-3 px-6 py-3.5 text-sm font-medium transition-all duration-200 mx-3 rounded-xl mb-1 ${
             isActive(link.href)
  ? 'relative bg-gradient-to-r from-amber-500/20 to-transparent text-white border-r-4 border-amber-400 shadow-lg'
  : 'text-slate-300 hover:bg-white/5 hover:translate-x-1'
            }`}
          >
            <div className="flex items-center gap-3">
<span className={`transition-all duration-200 ${
  isActive(link.href) 
    ? 'text-amber-400 scale-110' 
    : 'group-hover:text-amber-400 group-hover:scale-110'
}`}>                {link.icon}
              </span>
              <span className={`transition ${
  isActive(link.href) ? 'font-semibold tracking-wide' : ''
}`}>
  {link.label}
</span>
            </div>
            {link.badge && (
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400">
                {link.badge}
              </span>
            )}
          </Link>
        ))}
        
        {/* Workflow Section */}
        <div className="px-6 mt-6 mb-3 text-xs font-semibold tracking-wider uppercase text-slate-400">
          سير العمل المتكامل
        </div>
        
        {links.filter(link => link.section === "workflow").map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
           className={`flex items-center justify-between gap-3 px-6 py-3.5 text-sm font-medium transition-all duration-200 mx-3 rounded-xl mb-1 ${
             isActive(link.href)
  ? 'relative bg-gradient-to-r from-amber-500/20 to-transparent text-white border-r-4 border-amber-400 shadow-lg'
  : 'text-slate-300 hover:bg-white/5 hover:translate-x-1'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`transition ${
                isActive(link.href) ? 'text-amber-400' : 'group-hover:text-amber-400'
              }`}>
                {link.icon}
              </span>
              <span>{link.label}</span>
            </div>
            {link.badge && (
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400">
                {link.badge}
              </span>
            )}
          </Link>
        ))}
        
        {/* POS Integration Section */}
        <div className="px-6 mt-8 mb-3 text-xs font-semibold tracking-wider uppercase text-slate-400">
          التكامل الذكي مع POS
        </div>
        
        {links.filter(link => link.section === "pos").map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className={`flex items-center justify-between gap-3 px-6 py-2.5 text-sm transition-all duration-200 mx-3 rounded-xl group ${
              isActive(link.href) 
                ? 'bg-white/10 text-white' 
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`transition ${
                isActive(link.href) ? 'text-amber-400' : 'group-hover:text-amber-400'
              }`}>
                {link.icon}
              </span>
              <span>{link.label}</span>
            </div>
            {link.badge && (
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400">
                {link.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
      
      <div className="p-5 mt-auto text-xs border-t border-white/10 text-slate-400">
        <div className="flex justify-between">
          <span>إصدار التدقيق المتقدم</span>
          <span className="font-bold text-amber-400">v3.0.0</span>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>تكامل POS نشط ومباشر</span>
        </div>
      </div>
    </aside>
  );
};

export default Aside;