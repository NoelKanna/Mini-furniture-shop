// data/products.ts
import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "p1",
    name: "Minimal Leather Bag",
    price: 129.0,
    image: "/images/bag.jpg",
    description: "Handcrafted leather bag, perfect for everyday carry.",
    rating: 4.6,
  },
  {
    id: "p2",
    name: "Wireless Headphones",
    price: 79.0,
    image: "/images/headphones.jpg",
    description: "Comfortable and great sound quality.",
    rating: 4.4,
  },
  {
    id: "p3",
    name: "Ceramic Mug",
    price: 19.5,
    image: "/images/mug.jpg",
    description: "Minimal mug for your morning coffee.",
    rating: 4.2,
  },
];
