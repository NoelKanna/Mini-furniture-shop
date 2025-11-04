"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((a, b) => a + b.qty, 0);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-semibold text-lg dark:text-white">
          Mini furniture Store
        </Link>

        <Link href="/cart" className="relative p-2 hover:opacity-80 transition">
          <ShoppingCart className="w-6 h-6 dark:text-white" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full px-2 animate-pulse">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
