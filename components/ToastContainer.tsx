// components/ToastContainer.tsx
"use client";

import { Toaster } from "react-hot-toast";

export default function ToastContainer() {
  return <Toaster position="top-right" toastOptions={{ duration: 2200 }} />;
}
