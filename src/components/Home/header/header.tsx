"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="Utomo Logo"
            width={150}
            height={100}
          />
          {/* <div>
            <h1 className="text-2xl font-bold text-orange-600">UTOMO</h1>
            <p className="text-xs text-blue-900 tracking-wider">
              TOKO MUR BAUT DAN TEKNIK
            </p>
          </div> */}
        </div>

        {/* Navigasi */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-orange-600 font-medium underline">
            Beranda
          </Link>
          <Link href="/tentang" className="text-blue-900 hover:text-orange-600">
            Tentang Kami
          </Link>
          <Link href="/produk" className="text-blue-900 hover:text-orange-600">
            Produk
          </Link>
          <Link href="/blog" className="text-blue-900 hover:text-orange-600">
            Blog
          </Link>
          <Link href="/kontak" className="text-blue-900 hover:text-orange-600">
            Kontak
          </Link>
        </nav>

        {/* Tombol Kanan */}
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
