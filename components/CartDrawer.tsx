"use client";
import React from "react";
import { useCart } from "../context/CartContext";

export default function CartDrawer({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const { items, remove, increase, decrease } = useCart();

  const isOpen = !!open;
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl transform transition-transform z-30 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex items-center justify-between border-b">
        <h3 className="font-semibold">Your cart</h3>
        <div className="flex gap-2">
          {/* ปุ่ม Clear Cart — เดี๋ยวเพิ่มใน context ข้างล่าง */}
          <button onClick={onClose} className="text-sm">
            Close
          </button>
        </div>
      </div>

      <div className="p-4 overflow-auto h-[calc(100%-150px)]">
        {items.length === 0 && <p className="text-slate-500">Cart is empty</p>}

        {items.map((it) => (
          <div key={it.id} className="flex items-center gap-3 py-3 border-b">
            <img
              src={it.image}
              alt={it.name}
              className="w-14 h-14 object-cover rounded"
            />
            <div className="flex-1">
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-slate-500">
                ${it.price.toFixed(2)}
              </div>

              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => decrease(it.id)}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <div className="px-3">{it.qty}</div>
                <button
                  onClick={() => increase(it.id)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>

            <button onClick={() => remove(it.id)} className="text-rose-500">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center justify-between mb-4">
          <div className="text-slate-600">Total</div>
          <div className="font-semibold">${total.toFixed(2)}</div>
        </div>
        <button className="w-full bg-slate-900 text-white py-2 rounded">
          Checkout
        </button>
      </div>
    </aside>
  );
}
