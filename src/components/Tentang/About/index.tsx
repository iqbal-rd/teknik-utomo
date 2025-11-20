export default function AboutUs() {
  return (
    <div className="w-full">
      {/* Section Tentang Kami */}
      <section className="overflow-x-hidden max-w-[430px] md:max-w-[744px] lg:max-w-[1440px] mx-auto px-[28px] md:px-[44px] lg:px-[88px] pt-[70px] md:pt-[90px] lg:pt-[160px]">
        <h2 className="text-sm text-[#2F2D93]">Tentang Kami</h2>

        <h1 className="text-[#2F2D93] text-[20px] md:text-[24px] lg:text-[32px] font-poppins font-semibold mb-2.5 md:mb-5 lg:mb-[30px]">
          Berdiri untuk <span className="text-orange-600">Melayani Kebutuhan Anda</span>
        </h1>

        <p className="text-[#4F4F4F] text-[14px] md:text-[16px] lg:text-[18px] mb-2.5 md:mb-5 text-justify">
          Utomo Teknik adalah perusahaan penyedia alat teknik yang berkomitmen menghadirkan produk berkualitas tinggi
          untuk mendukung kebutuhan industri, konstruksi, dan perbengkelan. Dengan pengalaman dan dedikasi dalam bidang
          alat teknik, kami menyediakan berbagai peralatan mulai dari perkakas tangan, mesin industri, hingga perlengkapan
          keselamatan kerja. Kami selalu memastikan setiap produk yang kami distribusikan memiliki standar mutu terbaik agar memberikan performa
          optimal dan daya tahan tinggi bagi pelanggan.
        </p>

        <p className="text-[#4F4F4F] text-[14px] md:text-[16px] lg:text-[18px] mb-2.5 md:mb-5 text-justify">
          Kami percaya bahwa kepercayaan pelanggan adalah fondasi utama dalam membangun hubungan jangka panjang. Oleh
          karena itu, kami tidak hanya menawarkan produk, tetapi juga solusi yang tepat dengan pelayanan yang profesional,
          cepat, dan ramah. Dengan semangat inovasi dan komitmen terhadap kepuasan pelanggan, Utomo Teknik siap menjadi
          mitra terpercaya dalam mendukung perkembangan bisnis dan proyek Anda.
        </p>
      </section>
    </div>
  );
}