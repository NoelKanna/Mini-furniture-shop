// app/product/[id]/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { products } from "../../../data/products";
import { useCart } from "../../../context/CartContext";

export default function ProductPage() {
  const params = useSearchParams();
  const id = params?.get("id") ?? ""; // fallback if not using catch-all; but we will read from pathname below

  // Alternative: read id from pathname
  // const router = useRouter();
  // const id = router.asPath.split("/").pop();

  // For app router dynamic segment param: Next provides params in server components.
  // But easier: extract id from window.location when client — simpler for demo:
  const realId =
    typeof window !== "undefined"
      ? window.location.pathname.split("/").pop()
      : id;

  const product = products.find((p) => p.id === realId);
  const { add } = useCart();

  if (!product) {
    return <p className="p-6">Product not found.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="bg-white rounded-2xl overflow-hidden shadow">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-[420px]"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
        <p className="text-slate-600 mb-4">{product.description}</p>
        <div className="text-2xl font-semibold mb-6">
          ${product.price.toFixed(2)}
        </div>
        <button
          onClick={() => add(product)}
          className="px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
