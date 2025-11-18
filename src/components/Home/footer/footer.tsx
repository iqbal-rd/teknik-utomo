export default function Footer() {
  return (
    <footer className="bg-[#0A1C5A] text-white pt-12">
      {/* BAGIAN ATAS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* KOLOM 1 — DESKRIPSI + SOSMED + MARKETPLACE */}
        <div>
          <p className="text-lg leading-relaxed mb-6">
            Utomo Mur Baut & Teknik berkomitmen menghadirkan produk berkualitas
            serta layanan terbaik untuk pelanggan.
          </p>

          {/* Sosial Media */}
          <h3 className="text-lg font-semibold mb-3">Sosial Media</h3>
          <div className="flex space-x-4 mb-6">
            <div className="p-3 bg-white/10 rounded-full cursor-pointer">📘</div>
            <div className="p-3 bg-white/10 rounded-full cursor-pointer">📷</div>
            <div className="p-3 bg-white/10 rounded-full cursor-pointer">🟦</div>
          </div>

          {/* Marketplace */}
          <h3 className="text-lg font-semibold mb-3">Market Place</h3>
          <div className="flex space-x-4">
            <div className="p-3 bg-white/10 rounded-full cursor-pointer">🛒</div>
            <div className="p-3 bg-white/10 rounded-full cursor-pointer">🟢</div>
          </div>

          {/* Alamat */}
          <div className="flex items-start mt-6 space-x-3">
            <span className="text-xl">📍</span>
            <p className="text-sm">
              Jl. Diponegoro No. 5 Temanggung (Terminal lama Temanggung)
            </p>
          </div>
        </div>

        {/* KOLOM 2 — NAVIGASI */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:underline">Beranda</a></li>
            <li><a href="#" className="hover:underline">Tentang Kami</a></li>
            <li><a href="#" className="hover:underline">Produk</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        {/* KOLOM 3 — HUBUNGI KAMI */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>

          <div className="flex items-center space-x-3 mb-4">
            <span>📞</span>
            <p>0896 – 4338 – 0202</p>
          </div>

          <div className="flex items-center space-x-3">
            <span>✉️</span>
            <p>murbaututomo@gmail.com</p>
          </div>
        </div>

      </div>

      {/* GARIS PEMBATAS */}
      {/* <div className="h-1 bg-[#F0682A] mt-10"></div> */}

      {/* BAGIAN BAWAH */}
        <div className="w-full bg-[#F0682A] mt-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm text-white/90">
            <p>Copyright 2025 Utomo. All Rights Reserved</p>

            <div className="flex space-x-8 mt-2 md:mt-0">
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
    </footer>
  );
}
