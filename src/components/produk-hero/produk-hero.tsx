"use client";

import { easeOut, motion } from "framer-motion";
export default function ProdukHero() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="container mx-auto flex items-center justify-between px-6">
        
        <motion.div
        initial={{opacity :0, y:-40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.6, ease: easeOut}}
        viewport={{once : true}}
        >

          <p className="text-[#2F2D93] text-[14px] md:text-[16px] lg:text-[18px] mb-1">Produk</p>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            <span className="text-[#2A2F9A]">Produk Teknik Lengkap</span>{" "}
            <span className="text-[#F15A24]">dan Berkualitas</span>
          </h1>
        </motion.div>

        <motion.div
        initial={{opacity : 0, x : 40}}
        whileInView={{opacity : 1, x : 0}}
        transition={{duration : 0.8, ease : easeOut}}
        viewport={{once : true}}
        >

        <button className="bg-[#F15A24] text-white px-8 py-4 rounded-xl hover:opacity-90 transition font-medium whitespace-nowrap">
          Lihat Katalog
        </button>
        </motion.div>

      </div>
    </section>
  );
}
