"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Crown,
  Gem,
  ShoppingCart,
  Boxes,
  Database,
  Truck,
  Warehouse,
  Handshake,
  ChartColumn,
  ChevronLeft,
  Medal,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/Admin", label: "الرئيسية", icon: Gem },
    { href: "/Admin/PurchasesPage", label: "المشتريات", icon: ShoppingCart },
    { href: "/Admin/ProductPage", label: "المنتجات", icon: Boxes },
    { href: "/Admin/InventoryPage", label: "المخزون", icon: Database },
    { href: "/Admin/TasksPage", label: "الطلبات", icon: Truck },
    { href: "#", label: "استلام البضائع", icon: Warehouse },
    { href: "#", label: "الموردين", icon: Handshake },
    { href: "#", label: "التقارير", icon: ChartColumn },
  ];

  const isActive = (href) => {
    if (href === "#") return false;
    return pathname === href;
  };

  return (
    <aside className="w-72 relative bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)] text-white shadow-2xl z-20 flex-shrink-0 overflow-y-auto">

      {/* Top Logo Section */}
      <div className="p-7 border-b border-white/10 flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-700 flex items-center justify-center shadow-xl shadow-amber-900/30">
          <Crown className="text-white w-7 h-7" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-wider">
            GOLDEN
            <span className="text-amber-400">ERP</span>
          </h1>
          <p className="text-[10px] text-amber-300/70 font-semibold uppercase tracking-wide">
            Luxury Management
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="px-5 py-8 space-y-2">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-3 rounded-xl duration-300 transition-all font-bold text-base
                ${
                  active
                    ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                    : "text-amber-100/70 hover:text-amber-300 hover:bg-white/5"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
              {active && <ChevronLeft className="mr-auto w-4 h-4" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Card */}
      <div className="">
        <div className="bg-gradient-to-r from-amber-900/20 to-black/40 rounded-2xl p-4 text-center border border-amber-500/30 backdrop-blur">
          <Medal className="text-amber-400 w-6 h-6 mx-auto mb-1" />
          <p className="text-[10px] text-amber-200">الإصدار الذهبي 3.0</p>
          <div className="w-full h-[1px] bg-amber-500/30 my-2"></div>
          <span className="text-xs text-amber-300/80">✨ VIP Support</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;