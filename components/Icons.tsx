// components/Icons.tsx
import React from "react";
import { ShoppingCart, Star } from "lucide-react";

export const IconCart = (props: React.ComponentProps<"svg">) => (
  <ShoppingCart {...props} />
);
export const IconStar = (props: React.ComponentProps<"svg">) => (
  <Star {...props} />
);
