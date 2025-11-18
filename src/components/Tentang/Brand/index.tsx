/* src/app/tentang-kami/page.tsx */
export default function Brand() {
  return (
    <div className="w-full">
      {/* Brand Section */}
      <section className="bg-gray-50 py-16">
        <div className="overflow-x-hidden max-w-[430px] md:max-w-[744px] lg:max-w-[1440px] mx-auto px-[28px] md:px-[44px] lg:px-[88px] pt-[70px] md:pt-[90px] lg:pt-[160px]">
          <h2 className="text-sm text-[#2F2D93]">Brand</h2>

          <h1 className="text-3xl font-bold mt-2 text-[#2F2D93]">
            Merek Ternama, <span className="text-orange-600">Kualitas yang Terbukti</span>
          </h1>

          <p className="text-gray-700 leading-relaxed mt-4 text-justify">
            Kami hanya menghadirkan produk dari merek-merek terbaik yang telah terbukti kualitas dan ketahanannya.
            Kepercayaan pelanggan dimulai dari produk yang tepat—itulah komitmen kami dalam memilih brand terpercaya untuk Anda.
          </p>

          {/* Logo brand dengan carousel */}
          <div className="overflow-hidden py-8">
            <div className="flex items-center animate-scroll gap-16">
              <img src="/brand/haston.png" alt="Haston" className="h-12" />
              <img src="/brand/tekiro.png" alt="Tekiro" className="h-12" />
              <img src="/brand/mollar.png" alt="Mollar" className="h-12" />
              <img src="/brand/wipro.png" alt="Wipro" className="h-12" />
              <img src="/brand/toho.png" alt="Toho" className="h-12" />
              <img src="/brand/raigor.png" alt="Raigor" className="h-12" />
              <img src="/brand/xenon.png" alt="Xenon" className="h-12" />


              {/* Duplikat agar loop terlihat mulus */}
              <img src="/brand/haston.png" alt="Haston" className="h-12" />
              <img src="/brand/tekiro.png" alt="Tekiro" className="h-12" />
              <img src="/brand/mollar.png" alt="Mollar" className="h-12" />
              <img src="/brand/wipro.png" alt="Wipro" className="h-12" />
              <img src="/brand/toho.png" alt="Toho" className="h-12" />
              <img src="/brand/raigor.png" alt="Raigor" className="h-12" />
              <img src="/brand/xenon.png" alt="Xenon" className="h-12" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
