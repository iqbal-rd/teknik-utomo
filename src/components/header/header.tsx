"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Beranda", url: "/" },
    { label: "Tentang Kami", url: "/tentang" },
    { label: "Produk", url: "/katalog" },
    { label: "Blog", url: "/blog" },
    { label: "Kontak", url: "/kontak" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="flex shadow-lg fixed items-center justify-between gap-2 w-full h-[40px] md:h-[60px] lg:h-[80px] px-[14px] py-2.5 md:px-[26px] md:py-4 lg:px-[64px] lg:py-6 transition-colors duration-300 z-50 bg-white
        }">

        {/* LOGO */}
        <Image src="/logo.svg" alt="Utomo Logo" width={150} height={100} />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const active = pathname === item.url;

            return (
              <Link
                key={item.url}
                href={item.url}
                className={`
                  font-medium transition
                  ${active ? "text-[#F05A28] underline underline-offset-2 cursor-pointer" : "text-[#2F2D93] hover:text-orange-600 cursor-default hover:underline"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            href="/kontak"
            className="bg-orange-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-700 transition"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-white shadow-lg z-50 
          p-6 flex flex-col gap-6 transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between mb-2">
          <Image src="/logo.svg" alt="Utomo Logo" width={120} height={60} />
          <button className="text-orange-700" onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* MOBILE NAV */}
        <nav className="flex flex-col gap-4 text-blue-900 font-medium text-lg">
          {navItems.map((item) => {
            const active = pathname === item.url;

            return (
              <Link
                key={item.url}
                href={item.url}
                onClick={() => setOpen(false)}
                className={`
                  transition
                  ${active ? "text-orange-600 font-semibold" : ""}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Mobile */}
        <Link
          href="/kontak"
          onClick={() => setOpen(false)}
          className="bg-orange-600 text-white text-center py-2 rounded-md font-semibold hover:bg-orange-700 transition"
        >
          Hubungi Kami
        </Link>
      </div>
    </header>
  );
}
