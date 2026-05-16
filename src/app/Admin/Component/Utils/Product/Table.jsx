"use client";

import {
  Watch,
  Gem,
  Car,
  Headphones,
  ShoppingBag,
  Smartphone,
  Pencil,
  Trash2,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "رولكس ديت جست",
    desc: "ساعة رولكس أصلية ذهب روز...",
    qty: 45,
    price: "48,500 ر.س",
    total: "2,182,500 ر.س",
    status: "available",
    icon: Watch,
  },
  {
    id: 2,
    name: "طقم ألماس كارتييه",
    desc: "طقم كامل من الألماس عيار 18...",
    qty: 12,
    price: "185,000 ر.س",
    total: "2,220,000 ر.س",
    status: "available",
    icon: Gem,
  },
  {
    id: 3,
    name: "بي ام دبليو i7",
    desc: "سيارة كهربائية فاخرة 2025...",
    qty: 5,
    price: "425,000 ر.س",
    total: "2,125,000 ر.س",
    status: "low",
    icon: Car,
  },
  {
    id: 4,
    name: "سماعات B&O",
    desc: "سماعات لاسلكية عالية الجودة...",
    qty: 28,
    price: "12,999 ر.س",
    total: "363,972 ر.س",
    status: "available",
    icon: Headphones,
  },
  {
    id: 5,
    name: "حقيبة شانيل",
    desc: "حقيبة جلدية محدودة الإصدار...",
    qty: 8,
    price: "32,500 ر.س",
    total: "260,000 ر.س",
    status: "low",
    icon: ShoppingBag,
  },
  {
    id: 6,
    name: "باتيك فيليب نوتيلوس",
    desc: "ساعة سويسرية فاخرة...",
    qty: 3,
    price: "285,000 ر.س",
    total: "855,000 ر.س",
    status: "low",
    icon: Watch,
  },
  {
    id: 7,
    name: "خاتم ألماس 5 قيراط",
    desc: "خاتم مرصع بألماس نقي...",
    qty: 15,
    price: "95,000 ر.س",
    total: "1,425,000 ر.س",
    status: "available",
    icon: Gem,
  },
  {
    id: 8,
    name: "مرسيدس S-Class",
    desc: "سيارة ليموزين فاخرة...",
    qty: 4,
    price: "550,000 ر.س",
    total: "2,200,000 ر.س",
    status: "low",
    icon: Car,
  },
  {
    id: 9,
    name: "آيفون 15 برو ماكس",
    desc: "هاتف ذكي فاخر...",
    qty: 50,
    price: "6,899 ر.س",
    total: "344,950 ر.س",
    status: "available",
    icon: Smartphone,
  },
  {
    id: 10,
    name: "حقيبة هيرميس بيركين",
    desc: "حقيبة يد حصرية...",
    qty: 2,
    price: "125,000 ر.س",
    total: "250,000 ر.س",
    status: "low",
    icon: ShoppingBag,
  },
];

const ProductsGrid = () => {
  const handleEdit = (id) => console.log("edit", id);
  const handleDelete = (id) => console.log("delete", id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
      {products.map((product) => {
        const Icon = product.icon;
        const isAvailable = product.status === "available";

        return (
          <div
            key={product.id}
            className="group relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-br from-white/10 to-transparent hover:from-amber-500/40 transition-all duration-300"
          >
            <div className="h-full rounded-2xl bg-gradient-to-br from-[#0f172a]/90 to-[#020617]/90 backdrop-blur-xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)]">

              {/* Status */}
              <div className="absolute top-4 left-4">
                <span
                  className={`text-[10px] px-3 py-1 rounded-full font-semibold border ${
                    isAvailable
                      ? "bg-green-500/10 text-green-300 border-green-500/30"
                      : "bg-red-500/10 text-red-300 border-red-500/30"
                  }`}
                >
                  {isAvailable ? "✓ متوفر" : "⚠ نفاذ محدود"}
                </span>
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-700/10 flex items-center justify-center group-hover:scale-110 transition">
                <Icon size={36} className="text-amber-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white text-center mb-1">
                {product.name}
              </h3>

              {/* Desc */}
              <p className="text-[11px] text-amber-400/60 text-center mb-4">
                {product.desc}
              </p>

              {/* Info */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">الكمية</span>
                  <span
                    className={`text-xs font-bold ${
                      isAvailable ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {product.qty}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">السعر</span>
                  <span className="text-amber-300 text-xs font-semibold">
                    {product.price}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">الإجمالي</span>
                  <span className="text-white text-xs font-semibold">
                    {product.total}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-5 opacity-90 group-hover:opacity-100 transition">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="flex-1 flex items-center justify-center py-2 rounded-xl bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 border border-blue-500/20 transition"
                >
                  <Pencil size={14} />
                </button>

                <button
                  onClick={() => handleDelete(product.id)}
                  className="flex-1 flex items-center justify-center py-2 rounded-xl bg-red-500/10 text-red-300 hover:bg-red-500/20 border border-red-500/20 transition"
                >
                  <Trash2 size={14} />
                </button>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;