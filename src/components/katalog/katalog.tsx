"use client";

import { easeOut, motion, useInView } from "framer-motion";
import { useRef} from "react";

export default function Katalog() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });

    return (
        <motion.section
        ref={ref}
        initial={{ opacity: 0, y: -40}}
        animate={isInView ? { opacity: 1, y: 0} : {}}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="w-full py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* {Title} */}
                <h1 className="text-4xl text-[#2F2D93] font-bold text-center mb-16">
                    KATALOG <span className="text-orange-500">PRODUK</span>
                </h1>

                {/* {Grid Layout} */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* {Sidebar Kiri} */}
                    <div className="border rounded-xl p-6 shadow-sm">

                        {/* {Search} */}
                        <h3 className="text-lg text-[#2F2D93] font-semibold mb-4">Search</h3>
                        <div className="flex items-center border border-orange-400 rounded-lg px-3">
                            <input 
                            type="Text"
                            placeholder="Search"
                            className="w-full py-2 focus:outline-none text-[#2F2D93]"
                            />
                            <span className="text-gray-500">🔍</span>
                        </div>

                        {/* {Katagori} */}
                        <h3 className="text-[#2F2D93] text-lg font-semibold mt-8 mb-4">Kategori</h3>
                        <div className="space-y-3">
                            <button className="w-full text-[#2F2D93] border rounded-lg py-3 hover:bg-orange-50 transition">
                                Semua Produk
                            </button>
                            <button className="w-full text-[#2F2D93] border rounded-lg py-3 hover:bg-orange-50 transition">
                                Best Seller
                            </button>
                        </div>
                    </div>

                    {/* {Main Produk} */}
                    <div className="md:col-span-3 flex flex-col items-center justify-center">
                        
                        {/* Grid Produk*/}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        
                        </div>

                        {/* {Pagination} */}
                        <div className="flex gap-4 mt-10">
                            <button className="px-6 py-2 border rounded-lg text-gray-500 hover:bg-gray-100">
                                Prev
                            </button>
                            <button className="px-6 py-2 border rounded-lg text-gray-500 hover:bg-gray-100">
                                Next
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </motion.section>
    );
}