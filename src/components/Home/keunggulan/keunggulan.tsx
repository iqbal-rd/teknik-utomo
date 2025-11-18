import Image from "next/image";
export default function Keunggulan() {
    const item = [
        {
        icon: "",
        title: "Produk Asli Bergaransi",
        desc: "Kamai hanya menjual produk original dari brand terpercaya.",
    },
        {
        icon: "",
        title: "Layanan cepat dan ramah",
        desc: "Tim kami siap membantu kebutuhan taktik anda.",
    },
        {
        icon: "",
        title: "Harga kompetitif",
        desc: "Solusi hemat untuk kebutuhan proyek dan industri..",
    },
        {
        icon: "",
        title: "Produk lengkap",
        desc: "Dari mur, baut, hingga perlengkapan teknik tersedia di satu tempat.",
    },
        {
        icon: "",
        title: "Pengiriman Aman & Tepat Waktu",
        desc: "Pesanan Anda dikirim dengan cepat dan terjamin sampai tujuan.",
    },
        {
        icon: "",
        title: "Konsultasi Produk",
        desc: "Dapatkan panduan profesional sebelum membeli peralatan teknik.",
    },
    ];

    return (
        <section className="bg-[#071a4a] text-white px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto">
                {/* {Judul} */}
                <p className="text-sm text-gray-300">Keunggulan</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Kenapa memilih <span className="text-orange-500">Kami?</span>
                </h2>

                {/* {Grid} */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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
                </div>
            </div>
        </section>
    )
}