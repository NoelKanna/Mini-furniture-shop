// app/page.tsx
"use client";

import ProductList from "../components/ProductList";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function HomePage() {
  const { add } = useCart();

  const products = [
    { id: "1", name: "Modern chair", price: 129, image: "/modern chair.jpg" },
    // {
    //   id: "2",
    //   name: "Modern chair book cover",
    //   price: 79,
    //   image: "/modern chair book cover.jpg",
    // },
    { id: "3", name: "Wood table", price: 265, image: "/wood table.jpg" },
    { id: "4", name: "Wood table", price: 300, image: "/wood table 2.jpg" },
    {
      id: "5",
      name: "Set Furniture",
      price: 2499,
      image: "/1260h-teak-wood-living-room-furniture-1051780.jpg",
    },
    {
      id: "6",
      name: "Set table",
      price: 119,
      image: "/il_570xN.3375092262_rqy3.webp",
    },
    {
      id: "7",
      name: "Set Chairs",
      price: 265,
      image:
        "/Nova-No-MOQ-High-Quality-Dining-Chair-Modern-Design-Furniture-Hotel-Leisure-Chair-Customize-Sofa-Chairs.avif",
    },
    {
      id: "8",
      name: "Chair Grey",
      price: 79,
      image:
        "/pngtree-high-quality-image-of-a-modern-grey-chair-for-furniture-displays-png-image_14208022.png",
    },
    {
      id: "9",
      name: "Set Living Room ",
      price: 9999,
      image: "/ribbed-living-room-rug.jpg",
    },
    {
      id: "10",
      name: "Set table and chair",
      price: 269,
      image: "/SIMPLE_BLACK_web_5_902065cd-47fb-4cfa-a521-625982ca7889.webp",
    },
  ];

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Featured Products</h1>
        <p className="text-slate-600 mt-1">A small modern demo store</p>
      </header>

      <ProductList products={products} onAdd={add} />
    </div>
  );
}
