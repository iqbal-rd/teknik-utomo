"use client";

import { useState, useEffect } from "react";

export default function TestimoniSlider() {

    const testimonials = [
        { rating: 5, text: "Pelayanan ramah tempat bersihh,toko mur baut paling joss jiss", name: "Yanto Yudi"},
        { rating: 5, text: "Pelayanan ramah kualitas terbaik harga murah", name: "Diaz Anggoro"},
        { rating: 5, text: "Stok lengkap, harga terjangkau, dan pelayanannya cepat!", name: "Putra Mandiri"},
        { rating: 5, text: "Tempat langganan saya untuk kebutuhan teknik. Rekomendasi!", name: "Andi Saputra"},
        { rating: 5, text: "Barang komplit, pelayanan cepat, harga bersaing!", name: "Siti Rahma"},
        { rating: 5, text: "Sangat puas! Owner ramah banget dan sangat membantu!", name: "Budi Santoso"},
        { rating: 5, text: "Kualitas barang mantap, pengiriman aman!", name: "Rizky Hidayat"},
        { rating: 5, text: "Tempat favorit saya beli mur baut!", name: "Joko Widodo"},
    ];

    // Index Slide (0 -> slide 1, 2 -> slide 2, dst.)
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
    };

    const prev = () => {
        setIndex((prev) => (prev - 2 < 0 ? testimonials.length - 2 : prev - 2));
    };

    const goToSlide = (index: number) => {
        setIndex(index * 2);
    };

    // auto-slide
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    // Ambil 2 testimoni per slide
    const visibleSlide = testimonials.slice(index, index+2);

    // Total slides
    const totalSlides = Math.ceil(testimonials.length / 2);

    // Dot aktif berdasarkan index sekarang
    const activeDot = Math.floor(index / 2);

    return(
        <section className="bg-[#071A4A] text-white py-28 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm text-gray-300">Testimoni</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Apa Kata <span className="text-orange-500">Pelanggan</span>
                    </h2>

                    <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {visibleSlide.map((item, i) =>(
                            <div
                            key={i}
                            className="bg-[#1B2D63] p-6 rounded-xl shadow-md border border-white/10"
                            >
                                <p className="text-orange-400 font-bold text-xl mb-2">
                                   ⭐ {item.rating}.0
                                </p>
                                <p className="text-gray-200 leading-relaxed text-lg italic">
                                    "{item.text}"
                                </p>
                                <p className="mt-6 font-semibold text-white text-lg">
                                    {item.name}
                                </p>
                            </div>
                        ))}

                        {/* {Tombol kiri} */}
                        {/* <button 
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full"
                        >
                            ◀
                        </button> */}

                        {/* {Tombol kanan} */}
                        {/* <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full"
                        >
                            ▶
                        </button> */}
                    </div>

                    {/* {DOT Indicator} */}
                    <div className="flex justify-center gap-3 mt-10">
                        {Array.from({length: totalSlides }).map((_, i) =>(
                            <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`
                                h-[8px] w-[40px] rounded-full
                                transition-all duration-300
                                ${i === activeDot ? "bg-orange-500" : "bg-[#1B2D63]"}
                                `}>
                                    
                                </button>
                        ))}
                    </div>
            </div>
        </section>
    );
}