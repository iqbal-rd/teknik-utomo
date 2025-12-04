/* src/app/tentang-kami/page.tsx */
"use client";

import {motion} from "framer-motion";
export default function Keunggulan() {
  return (
    <div className="w-full">
      {/* Keunggulan */}
       <motion.div
            initial={{opacity: 0, y: -40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: "easeOut"}}
            viewport={{ once: true }}
            >
        <section className="bg-[#0F2464] pt-5 pb-[30px] md:py-[28px] lg:py-[40px] mt-[30px] md:mt-[40px] lg:mt-[80px]">
          <div className="max-w-[430px] md:max-w-[744px] lg:max-w-[1440px] mx-auto px-[28px] md:px-[44px] lg:px-[88px]">
            <p className="text-[#F2F2F2] text-[14px] md:text-[16px] lg:text-[18px] mb-1">Keunggulan</p>
            
            <h1 className="text-[#F2F2F2] text-[20px] md:text-[24px] lg:text-[32px] font-semibold font-poppins mb-2.5">
              Kenapa Memilih <span className="text-orange-400">Kami?</span>
            </h1>

            <div className="mt-5 lg:-mt-[-50px] style=opacity: 1; transform: none;">
              {/* Card */}
              <div className="bg-[#FFFFFF1A] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2.5 md:gap-5 lg:gap-2.5 px-5 pt-5 pb-[50px] rounded-lg transition-all duration-300 hover:-translate-y-2 mb-5 last:mb-0">
                <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                  <img alt="Produk Asli Bergaransi" src="/icon/guarantee-icon.svg" loading="lazy" style={{position:"absolute", height:"100%", width:"100%", left:"0", top:"0", right:"0", bottom:"0", color:"transparent"}} decoding="async" data-nimg="fill"></img>
                </div>
                <div><h3 className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-2.5">Produk Asli Bergaransi</h3>
                <p className="text-[#F2F2F2] text-[14px] md:text-[16px] lg:text-[18px]">
                  Kami hanya menyediakan produk original dari brand terpercaya, lengkap dengan garansi resmi sehingga pelanggan tidak perlu khawatir dengan kualitas maupun keaslian barang.
                </p></div>
              </div>

              <div className="bg-[#FFFFFF1A] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2.5 md:gap-5 lg:gap-2.5 px-5 pt-5 pb-[50px] rounded-lg transition-all duration-300 hover:-translate-y-2 mb-5 last:mb-0">
                <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                  <img alt="Layanan Cepat & Ramah" src="/icon/good-service-icon.svg" loading="lazy" style={{position:"absolute", height:"100%", width:"100%", left:"0", top:"0", right:"0", bottom:"0", color:"transparent"}} decoding="async" data-nimg="fill"></img>
                </div>
                <div><h3 className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-2.5">Layanan Cepat & Ramah</h3>
                <p className="text-[#F2F2F2] text-[14px] md:text-[16px] lg:text-[18px]">
                  Tim kami selalu siap melayani dengan sikap ramah, responsif, dan profesional untuk memastikan kebutuhan teknik Anda terpenuhi tanpa menunggu lama.
                </p></div>
              </div>

              <div className="bg-[#FFFFFF1A] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2.5 md:gap-5 lg:gap-2.5 px-5 pt-5 pb-[50px] rounded-lg transition-all duration-300 hover:-translate-y-2 mb-5 last:mb-0">
                <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                  <img alt="Harga Kompetitif" src="/icon/price-icon.svg" loading="lazy" style={{position:"absolute", height:"100%", width:"100%", left:"0", top:"0", right:"0", bottom:"0", color:"transparent"}} decoding="async" data-nimg="fill"></img>
                </div>
                <div><h3 className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-2.5">Harga Kompetitif</h3>
                <p className="text-[#F2F2F2] text-[14px] md:text-[16px] lg:text-[18px]">
                  Kami memberikan penawaran harga yang bersaing sehingga pelanggan dapat memperoleh produk berkualitas tinggi dengan solusi hemat untuk berbagai kebutuhan proyek maupun industri.
                </p></div>
              </div>

              <div className="bg-[#FFFFFF1A] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2.5 md:gap-5 lg:gap-2.5 px-5 pt-5 pb-[50px] rounded-lg transition-all duration-300 hover:-translate-y-2 mb-5 last:mb-0">
                <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                  <img alt="Produk Lengkap" src="/icon/product-icon.svg" loading="lazy" decoding="async" style={{position:"absolute", height:"100%", width:"100%", left:"0", top:"0", right:"0", bottom:"0", color:"transparent"}} data-nimg="fill"></img>
                </div>
                <div><h3 className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-2.5">Produk Lengkap</h3>
                <p className="text-[#F2F2F2] text-[14px] md:text-[16px] lg:text-[18px]">
                  Tersedia beragam mur, baut, sekrup, serta perlengkapan teknik lainnya dalam berbagai ukuran dan tipe sehingga semua kebutuhan bisa terpenuhi dalam satu tempat.
                </p></div>
              </div>

              <div className="bg-[#FFFFFF1A] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2.5 md:gap-5 lg:gap-2.5 px-5 pt-5 pb-[50px] rounded-lg transition-all duration-300 hover:-translate-y-2 mb-5 last:mb-0">
                <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                  <img alt="Pengiriman Aman & Tepat Waktu" src="/icon/delivery-icon.svg" loading="lazy" style={{position:"absolute", height:"100%", width:"100%", left:"0", top:"0", right:"0", bottom:"0", color:"transparent"}} decoding="async" data-nimg="fill"></img>
                </div>
                <div><h3 className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-2.5">Pengiriman Aman & Tepat Waktu</h3>
                <p className="text-[#F2F2F2] text-[14px] md:text-[16px] lg:text-[18px]">
                  Setiap pesanan dikemas dengan rapi dan dikirim menggunakan jasa terpercaya, memastikan produk sampai ke tangan Anda dengan aman dan sesuai jadwal.
                </p></div>
              </div>

              <div className="bg-[#FFFFFF1A] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2.5 md:gap-5 lg:gap-2.5 px-5 pt-5 pb-[50px] rounded-lg transition-all duration-300 hover:-translate-y-2 mb-5 last:mb-0">
                <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                  <img alt="Konsultasi Produk" src="/icon/consultation-icon.svg" loading="lazy" style={{position:"absolute", height:"100%", width:"100%", left:"0", top:"0", right:"0", bottom:"0", color:"transparent"}} decoding="async" data-nimg="fill"></img>
                </div>
                <div><h3 className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-2.5">Konsultasi Produk</h3>
                <p className="text-[#F2F2F2] text-[14px] md:text-[16px] lg:text-[18px]">
                  Kami siap memberikan rekomendasi produk terbaik sesuai kebutuhan, membantu pelanggan memilih baut, mur, atau perlengkapan teknik yang paling tepat untuk proyek yang sedang dikerjakan.
                </p></div>
              </div>

            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
