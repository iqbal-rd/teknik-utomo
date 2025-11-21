/* src/app/tentang-kami/page.tsx */
"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const brandLogos = [
  { src: "/brand/wipro.png", alt: "Wipro Logo" },
  { src: "/brand/tiapmata.png", alt: "Tjap Mata Logo" },
  { src: "/brand/modern.png", alt: "Modern Power Tools Logo" },
  { src: "/brand/bison.png", alt: "bison" },
  { src: "/brand/makita.png", alt: "makita Logo" },
  { src: "/brand/mollar.png", alt: "mollar Logo" },
  { src: "/brand/raigor.png", alt: "raigor Logo" },
  { src: "/brand/tekiro.png", alt: "tekiro Logo" },
  { src: "/brand/taho.png", alt: "toho Logo" },
  { src: "/brand/haston.png", alt: "haston Logo" },
];

const logo = [...brandLogos, ...brandLogos];
export default function Brand() {
  return (
    <div className="w-full">
      {/* Brand Section */}
      <section className="bg-gray-50 py-16">
        <div className="overflow-x-hidden max-w-[430px] md:max-w-[744px] lg:max-w-[1440px] mx-auto px-[28px] md:px-[44px] lg:px-[88px] pt-[70px] md:pt-[90px] lg:pt-[160px]">
          <h2 className="text-sm text-[#2F2D93]">Brand</h2>

          <h1 className="text-3xl font-bold mt-2 text-[#2F2D93]">
            Merek Ternama, <span className="text-orange-600">Kualitas yang Terbukti</span>
          </h1>

          <p className="text-gray-700 leading-relaxed mt-4 text-justify">
            Kami hanya menghadirkan produk dari merek-merek terbaik yang telah terbukti kualitas dan ketahanannya.
            Kepercayaan pelanggan dimulai dari produk yang tepat—itulah komitmen kami dalam memilih brand terpercaya untuk Anda.
          </p>

          {/* Logo brand dengan carousel */}
          <div className="mt-8">
            <Marquee speed={40} pauseOnHover={true}>
              {logo.map((brand, index) => (
                <div key={index} className="mx-2">
                  <div className=" relative bg-white rounded-2xl mb-2 shadow-md lg:w-[285px] lg:h-[98px] md:w-[285px] md:h-[98px] w-[170px] h-[66px] flex items-center justify-center p-6 hover:shadow-xl transition-shadow">
                     <Image
                      src={brand.src}
                      alt={brand.alt}
                      fill
                      unoptimized
                      loading="lazy"
                      priority={false}
                      
                      className="object-contain p-3 lg:px-10 lg:py-4 md:px-8 md:py-4 w-auto h-auto "
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}
