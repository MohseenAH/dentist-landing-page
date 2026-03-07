"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 shadow-sm h-[72px] flex items-center">
      <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="#home"
          className="text-xl sm:text-2xl font-bold tracking-wide text-black"
        >
          BrightSmile
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10 text-base font-bold text-black">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-teal-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          className="hidden lg:inline-flex items-center gap-2 bg-[#25D366] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#20bd5a] transition"
        >
          <FaWhatsapp size={22} />
          Book Appointment
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-black"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mx-auto mt-2 w-[92%] max-w-md rounded-2xl bg-white border border-gray-300 p-4 shadow-xl">
          <div className="flex flex-col space-y-2">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-center py-3 text-lg font-bold text-gray-900 hover:bg-gray-100 rounded-xl transition"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2 border-t border-gray-200 mt-2">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-black font-semibold hover:bg-[#20bd5a] transition"
              >
                <FaWhatsapp size={24} />
                Book Appointment
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}