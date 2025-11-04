"use client";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, increase, decrease, remove } = useCart();

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <h1 className="text-2xl font-semibold mb-6 dark:text-white">Your Cart</h1>

      {items.length === 0 ? (
        <p className="dark:text-gray-400">🛒 ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              )}
              <div className="flex-1">
                <h2 className="font-medium dark:text-gray-100">{item.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrease(item.id)}
                  className="p-1 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  <Minus className="w-4 h-4 dark:text-gray-100" />
                </button>
                <span className="w-6 text-center dark:text-white">
                  {item.qty}
                </span>
                <button
                  onClick={() => increase(item.id)}
                  className="p-1 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4 dark:text-gray-100" />
                </button>
              </div>

              <button
                onClick={() => remove(item.id)}
                className="p-2 bg-rose-500 hover:bg-rose-600 rounded-full text-white transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center pt-4 border-t border-gray-300 dark:border-gray-700">
            <span className="font-medium dark:text-white">รวมทั้งหมด</span>
            <span className="font-semibold text-lg dark:text-white">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </main>
  );
}
