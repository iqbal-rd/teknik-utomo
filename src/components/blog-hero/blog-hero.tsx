"use client";

import {easeOut, motion} from "framer-motion";

export default function BlogHero() {
  return (
    <section className="w-full py-32 bg-white">

      <motion.div
      initial={{opacity : 0, y: -40}}
      whileInView={{opacity : 1, y: 0}}
      transition={{duration: 0.8, ease: easeOut}}
      viewport={{once : true}}
      >

      <div className="container mx-auto flex items-center justify-between px-6">
        
        <div>
          <p className="text-sm text-gray-500 mb-2">Blog</p>

          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            <span className="text-[#2A2F9A]">Berita & Blog</span>{" "}
            <span className="text-[#F15A24]">Terbaru Kami</span>
          </h1>
        </div>

        <button className="bg-[#F15A24] text-white px-8 py-4 rounded-xl hover:opacity-90 transition font-medium">
          Lihat Semua Blog
        </button>

      </div>
      </motion.div>
    </section>
  );
}
