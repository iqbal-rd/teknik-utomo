import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

        className={`${inter.variable} ${poppins.variable} antialiased`}

      >
        {/* {Header tampil di semua halaman} */}
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
