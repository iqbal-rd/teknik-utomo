"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "Beranda", url: "/" },
    { label: "Tentang Kami", url: "/tentang" },
    { label: "Produk", url: "/katalog" },
    { label: "Blog", url: "/blog" },
    { label: "Kontak", url: "/kontak" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Utomo Logo" width={150} height={100} />
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const active = pathname === item.url;

            return (
              <Link
                key={item.url}
                href={item.url}
                className={`
                  relative font-medium 
                  ${active ? "text-orange-600" : "text-blue-900 hover:text-orange-600"}
                  
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                  after:h-[2px] after:bg-orange-600 
                  after:transition-all after:duration-300 
                  
                  ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* BUTTON */}
        <div>
          <Link
            href="/kontak"
            className="bg-orange-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-700 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </header>
  );
}
