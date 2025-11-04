// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { CartProvider } from "../context/CartContext";
import ToastContainer from "../components/ToastContainer";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mini E-Commerce",
  description: "Frontend-only e-commerce (Next.js App Router)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <CartProvider>
          <Header />
          <ToastContainer />
          <main className="container mx-auto p-6">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
