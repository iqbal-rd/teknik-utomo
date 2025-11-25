"use client";


import Image from "next/image";
import{ motion } from "framer-motion";
export default function Keunggulan() {
    const item = [
        {
        icon: "/guarantee-icon.svg",
        title: "Produk Asli Bergaransi",
        desc: "Kamai hanya menjual produk original dari brand terpercaya.",
    },
        {
        icon: "/good-service-icon.svg",
        title: "Layanan cepat dan ramah",
        desc: "Tim kami siap membantu kebutuhan taktik anda.",
    },
        {
        icon: "price-icon.svg",
        title: "Harga kompetitif",
        desc: "Solusi hemat untuk kebutuhan proyek dan industri..",
    },
        {
        icon: "product-icon.svg",
        title: "Produk lengkap",
        desc: "Dari mur, baut, hingga perlengkapan teknik tersedia di satu tempat.",
    },
        {
        icon: "delivery-icon.svg",
        title: "Pengiriman Aman & Tepat Waktu",
        desc: "Pesanan Anda dikirim dengan cepat dan terjamin sampai tujuan.",
    },
        {
        icon: "consultation-icon.svg",
        title: "Konsultasi Produk",
        desc: "Dapatkan panduan profesional sebelum membeli peralatan teknik.",
    },
    ];

    return (
        <section className="bg-[#071a4a] text-white px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto">

                {/* {ANIMASI JUDUL} */}
                <motion.div
                initial={{opacity: 0, y: -40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, ease: "easeOut"}}
                viewport={{ once: true }}
                >

                {/* {Judul} */}
                <p className="text-sm text-gray-300">Keunggulan</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Kenapa memilih <span className="text-orange-500">Kami?</span>
                </h2>
                </motion.div>

                {/* {Animasi Grid} */}
                <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                initial= {{ opacity: 0, y: 40}}
                whileInView= {{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease:"easeOut"}}
                viewport={{ once:true }}>
                {/* {Grid} */}
                    {item.map((item, index) =>(
                        <div 
                          key={index}
                          className="bg-[#1b2d63] p-6 rounded-xl shadow-md border border-white/5 hover:scale-[1.02] transition"
                          >
                            {/* {Icon logo} */}
                            <div className="mb-4">
                                <Image
                                src= {item.icon}
                                alt= {item.title}
                                width= {48}
                                height= {48}
                                className="object-contain"
                                />
                            </div>

                            <h3 className="text-lg font-semi-bold mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                     )
                  )
                }
                </motion.div>
            </div>
        </section>
    )
}