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
    { label : "Beranda", href: "/" },
    { label : "Tentang Kami", href: "/tentang" },
    { label : "Produk", href: "/katalog" },
    { label : "Blog", href: "/blog" },
    { label : "Kontak", href: "/kontak" }
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">

      {/* {Top Bar} */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}

        <div className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Utomo Logo" width={150} height={100} />
        </div>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
              key={item.href}
              href={item.href}
              className={`
                font-medium transition
                ${isActive
                  ? "text-orange-600 underline underline-offset-4 decoration-orange-600"
                  : "text-blue-900 hover:text-orange-600 hover:underline hover:underline-offset-4 hover:decoration-orange-600"
                }
                `}
                >
                  {item.label}
              </Link>
            );
          })}
       </nav>

        {/* Tombol Kanan */}
        <div className="hidden md:block">

          <Link
            href="/kontak"
            className="bg-orange-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-700 transition"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* {Tombol Kanan Hamburger (mobile)} */}
          <button 
          className="md:hidden text-blue-900 text-3xl"
          onClick={() => setOpen(!open)}
          >
            {open ? "x" : "="}
      </button>
    </div>

          {/* {Dropdown Mobile} */}
          {open && (
            <div className="md:hidden bg-white border-t shadow-md">
              <nav className="flex flex-col py-3 px-6 space-y-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link 
                    key={item.href}
                    href={item.href}
                    onClick={() =>setOpen(false)}
                    className={`
                      py-2 font-medium transition
                      ${
                        isActive
                          ? "text-orange-600 underline underline-offset-4 decoration-orange-600"
                          : "text-blue-900 hover:text-orange-600 hover:underline hover:underline-offset-4 hover:decoration-orange-600"
                    }
                  `}
                >
                       {item.label}
                      </Link>
                  );
                })}
              </nav>
            
          {/* {Tombol kanan mobile} */}
          <Link
          href="/kontak"
          onClick={() => setOpen(false)}
          className="mt-3 inline-block bg-orange-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-700 transition mx-6 mb-4"
          >
            Hubungi Kami
          </Link>
          </div>
          )}
    </header>
  );
}
