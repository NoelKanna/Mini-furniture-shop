"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { toast } from "react-hot-toast";

export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

type CartItem = Product & { qty: number };

type CartContextType = {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const lastAddedRef = useRef<Product | null>(null);

  // ✅ โหลดข้อมูลจาก localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) setItems(JSON.parse(saved));
    } catch (err) {
      console.error("Error loading cart:", err);
      localStorage.removeItem("cart");
    }
  }, []);

  // ✅ บันทึกข้อมูลลง localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // ✅ แสดง toast หลัง state อัปเดตแล้ว
  useEffect(() => {
    if (lastAddedRef.current) {
      toast.success(`${lastAddedRef.current.name} ถูกเพิ่มในตะกร้า 🛒`);
      lastAddedRef.current = null;
    }
  }, [items]);

  const add = (product: Product) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        // เพิ่มจำนวนสินค้า
        lastAddedRef.current = product;
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      // เพิ่มสินค้าใหม่
      lastAddedRef.current = product;
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const remove = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
    toast.error("ลบสินค้าจากตะกร้าแล้ว");
  };

  const increase = (id: string) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const decrease = (id: string) => {
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  return (
    <CartContext.Provider value={{ items, add, remove, increase, decrease }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
