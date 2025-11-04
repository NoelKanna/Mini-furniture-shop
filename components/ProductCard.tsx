// components/ProductCard.tsx
"use client";

import Link from "next/link";
import type { Product } from "@/types/product";
import { IconStar } from "./Icons";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square bg-slate-100 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link
          href={`/product/${product.id}`}
          className="font-medium hover:underline"
        >
          {product.name}
        </Link>
        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconStar className="w-4 h-4 text-amber-400" />
            <span className="text-sm">{product.rating ?? 0}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold">${product.price.toFixed(2)}</span>
            <button
              onClick={() => add(product)}
              className="px-3 py-1 bg-slate-900 text-white rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
