"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-800 mt-10">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Mini furniture Store
          </h2>
          <p className="text-sm leading-relaxed">
            Your go-to online shop for quality furniture products — delivered
            straight to you! 💻📱
          </p>
        </div>

        {/* Center Section (Quick Links) */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-3">
            short cut
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-rose-500 transition-colors duration-200"
              >
                Main
              </Link>
            </li>
            {/* <li>
              <Link
                href="/products"
                className="hover:text-rose-500 transition-colors duration-200"
              >
                สินค้าทั้งหมด
              </Link>
            </li> */}
            <li>
              <Link
                href="/cart"
                className="hover:text-rose-500 transition-colors duration-200"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section (Contact) */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-3">
            Contact us
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-rose-500" />
              <span>+856 20 93 645 631</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-rose-500" />
              <span>nuthukanime@gmail.com.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Vientiane Capital, Phonsinuan Village</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 dark:bg-gray-800 py-3 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} MiniStore. All rights reserved.
      </div>
    </footer>
  );
}
