"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return(
        <section className="bg-[#0A1F53] text-white py-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* {left side} */}
                <motion.div
                initial={{opacity: 0, y:40 }}
                animate={{opacity: 1, y:0 }}
                transition={{ duration: 0.8, ease: "easeOut"}}
            >
                
                    <p className="text-gray-300 mb-3 text-lg">Toko Teknik</p>

                    <h1 className="text-3xl md:text-3xl font-bold leading-tight max-w-lg">
                        Solusi Baut & Alat Teknik Lengkap <br />
                        <span className="text-orange-500">
                            Di Pusat Kota Temanggung
                        </span>
                    </h1>

                    <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                        Dari kebutuhan rumah hingga proyek besar, kami hadir dengan pilihan
                        baut, mur, dan perlengkapan teknik yang lengkap serta berkualitas.
                    </p>

                    <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">
                        Lihat Selengkapnya
                    </button>
                </motion.div>

                {/* {Right Side} */}

                <motion.div     
                initial={{ opacity: 0, x: 60}}
                animate={{ opacity: 1, x: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <img
                    src="/home-hero.png"
                    alt="Foto Toko"
                    className="rounded-xl shadow-lg"
                    />
                </motion.div>
                
            </div>
        </section>
    );
}