"use client";

import React from "react";
import { Clock, Crown } from "lucide-react";

const DashboardSections = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8">
      {/* Recent Activity */}
      <div className="glass-luxury rounded-3xl p-6">
        <h3 className="font-black text-white mb-4 flex items-center gap-2">
          <Clock className="text-amber-400 w-5 h-5" />
          النشاط الأخير
        </h3>

        <div className="space-y-4">
          <div>
            <p className="text-sm">
              <span className="text-amber-400">#G-1005</span> تم تغيير الحالة إلى "تم التسليم"
            </p>
            <p className="text-xs text-slate-400">منذ 2 ساعة</p>
          </div>

          <div>
            <p className="text-sm">
              <span className="text-amber-400">#G-1006</span> طلب جديد بقيمة 127,500 ر.س
            </p>
            <p className="text-xs text-slate-400">منذ 5 ساعات</p>
          </div>

          <div>
            <p className="text-sm">
              <span className="text-amber-400">#G-1004</span> تم شحن الطلب
            </p>
            <p className="text-xs text-slate-400">الأمس</p>
          </div>

          <div>
            <p className="text-sm">
              <span className="text-amber-400">#G-1002</span> تم تحديث معلومات الدفع
            </p>
            <p className="text-xs text-slate-400">الأمس</p>
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="glass-luxury rounded-3xl p-6">
        <h3 className="font-black text-white mb-4 flex items-center gap-2">
          <Crown className="text-amber-400 w-5 h-5" />
          أفضل المنتجات مبيعاً
        </h3>

        <div className="space-y-4">
          <ProductItem rank={1} name="رولكس ديت جست" value={87} />
          <ProductItem rank={2} name="طقم ألماس كارتييه" value={52} />
          <ProductItem rank={3} name="سماعات B&O" value={48} />
          <ProductItem rank={4} name="حقيبة شانيل" value={31} />
          <ProductItem rank={5} name="بي ام دبليو i7" value={12} />
        </div>
      </div>
    </div>
  );
};

const ProductItem = ({ rank, name, value }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="text-amber-400">{rank}.</span> {name}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-white">{value} قطعة</span>

        <div className="w-32 bg-slate-700 rounded-full h-2">
          <div
            className="bg-amber-500 h-2 rounded-full"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardSections;