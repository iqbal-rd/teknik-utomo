"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Katalog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [open, setOpen] = useState<number | null>(null);

  const faqList = [
    {
      question: "Apakah Produk Yang Dibutuhkan Tersedia ?",
      answer:
        "Kami menyediakan berbagai produk teknik, mur baut, dan kebutuhan industri. Ketersediaan tergantung stok terbaru.",
    },
    {
      question: "Apakah Produk Yang Di Jual Di Toko Utomo Harganya Terjangkau ?",
      answer:
        "Ya, harga kami sangat kompetitif dan bersaing karena langsung dari distributor dan pabrik.",
    },
    {
      question: "Apakah Toko Utomo Melayani Pengiriman ?",
      answer:
        "Kami melayani pengiriman dalam kota dan luar kota menggunakan jasa ekspedisi pilihan pelanggan.",
    },
    {
      question: "Apakah Bisa Konsultasi Terlebih Dahulu Sebelum Membeli ?",
      answer:
        "Tentu, pelanggan dapat berkonsultasi mengenai spesifikasi dan kebutuhan teknis sebelum membeli.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: -40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-20 bg-white"
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <p className="text-lg text-[#2F2D93] mb-2">Blog</p>
        <h1 className="text-4xl font-bold text-[#2F2D93]">
          Berita & Blog <span className="text-orange-500">Terbaru Kami</span>
        </h1>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-12">
        <div className="md:col-span-3 order-2 md:order-1 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"></div>

          <div className="flex gap-4 mt-10">
            <button className="px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              Prev
            </button>
            <button className="px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="order-1 md:order-2 border border-transparent rounded-xl p-6 shadow-sm max-w-[260px] mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-blue-700">Search</h3>
          <div className="flex items-center border border-orange-400 rounded-lg px-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 focus:outline-none text-[#2F2D93]"
            />
            <span className="text-blue-700">🔍</span>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4 text-blue-700">
            Kategori
          </h3>
          <div className="space-y-3">
            <button className="w-full border border-blue-300 rounded-lg py-3 text-blue-700 hover:bg-blue-50 transition">
              Semua Blog
            </button>
            {/* <button className="w-full border border-blue-300 rounded-lg py-3 text-blue-700 hover:bg-blue-50 transition">
              Tips & Edukasi
            </button>
            <button className="w-full border border-blue-300 rounded-lg py-3 text-blue-700 hover:bg-blue-50 transition">
              Promo
            </button> */}
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-[430px] md:max-w-[744px] lg:max-w-[1440px] mx-auto px-[28px] md:px-[44px] lg:px-[88px] pb-[30px] md:pb-[40px] lg:pb-[80px]">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#2F2D93]">Pertanyaan yang </span>
          <span className="text-orange-500">Sering Diajukan</span>
        </h2>

        <p className="text-center text-gray-600 text-lg md:text-xl mb-14">
          Temukan jawaban atas berbagai pertanyaan umum mengenai produk dan layanan kami di sini.
        </p>

        <div className="md:col-span-8">
          {faqList.map((item, i) => (
            <div
              key={i}
              className="border border-[#B8B8B8] rounded-xl mb-4 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {/* HEADER + BUTTON */}
              <div className="w-full text-left px-4 py-3 flex items-center justify-between gap-4">
                <p className="text-[#4F4F4F] text-[16px] md:text-[20px] lg:text-[22px] font-semibold">
                  {item.question}
                </p>

                <motion.div
                  animate={{ rotate: open === i ? 360 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300
                    ${open === i ? "bg-gray-200" : "bg-[#F05A28]"}
                  `}
                >
                  {open === i ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F05A28"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  )}
                </motion.div>
              </div>

              {/* ANSWER */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 overflow-hidden text-[#4F4F4F] text-[14px] md:text-[16px] lg:text-[18px] pb-3 md:pb-5"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
