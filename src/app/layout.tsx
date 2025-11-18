import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home/header/header";
import Footer from "@/components/Home/footer/footer";
import Hero from "@/components/Home/hero/hero"
import Brand from "@/components/Home/brand/brand"
import Keunggulan from "@/components/Home/keunggulan/keunggulan";
import ProdukHero from "@/components/Home/produk-hero/produk-hero";
import TestimoniSlider from "@/components/Home/testimonislider/testimonislider";
import BlogHero from "@/components/Home/blog-hero/blog-hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UTOMO - Toko Mur Baut Dan Teknik",
  description: "Web Resmi Utomo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {/* {Header tampil di semua halaman} */}
        <Header />

        {/* {children} */}
        <main>
          <Hero />
          <Brand />
          <Keunggulan />
          <ProdukHero />
          <TestimoniSlider />
          <BlogHero />
        </main>

        <Footer />
      </body>
    </html>
  );
}
