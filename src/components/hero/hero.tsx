export default function Hero() {
    return(
        <section className="bg-[#0A1F53] text-white py-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 item-center">

                {/* {left side} */}
                <div>
                    <p className="text-grey-300 mb-3 text-lg">Toko Teknik</p>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
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
                </div>

                {/* {Right Side} */}
                <div>
                    <img
                    src="/images/toko.jpg"
                    alt="Foto Toko"
                    className="rounded-xl shadow-lg"
                    />
                </div>
                
            </div>
        </section>
    );
}