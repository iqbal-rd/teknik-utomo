"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import { useInView } from "react-intersection-observer";

export default function Brand() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return(
        <motion.section
            ref= {ref}
            className="py-29 bg-white"
            initial={{opacity: 0, y: -40}}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >

            <div className="max-w-6xl mx-auto px-6">

                {/* {Label} */}
                <p className="text-[#2F2D93] mb-2 text-sm font-semibold">Brand</p>

                {/* {Title} */}
                <h2 className="text-4xl font-bold text-[#2F2D93] leading-snug">
                    Merek Ternama,<span className="text-orange-500">Kualitas Yang Terbukti</span>
                </h2>

                {/* {Descripton} */}
                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                    Kami hanya menghadirkan merek-merek terbaik yang telah terbukti kualitas dan ketahanan.
                    Kepercayaan pelanggan dimulai dari produk yang tepat - itulah komitmen kami dalam memilih brand terpercaya
                    Untuk Anda.
                </p>
                
            </div>
        </motion.section>
    );
}