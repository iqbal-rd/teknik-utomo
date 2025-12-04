"use client";

import Image from "next/image";

export default function Footer() {
  return (

    <footer className="border-t border-[#F2F2F2]">

      {/* BAGIAN ATAS */}
      <div
        className="bg-[#0F2464] w-full text-[#F2F2F2] font-poppins py-5 px-6 md:py-5 md:px-[44px] lg:px-[88px]
           grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[30px] lg:gap-6"

      >

        {/* KOLOM KIRI */}
        <div>
          <p className="flex flex-col gap-5 md:gap-[30px] lg:gap-[40px]">
            Utomo Mur Baut & Teknik berkomitmen menghadirkan produk berkualitas
            serta layanan terbaik untuk pelanggan.
          </p>

          {/* Sosial Media + Marketplace sejajar */}
          <div className="flex flex-col sm:flex-row sm:gap-16 gap-8 mb-6">

            {/* Sosial Media */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Sosial Media</h3>
              <div className="flex space-x-4">
                <div className="p-3 bg-white/10 rounded-full cursor-pointer"><Image src="/fesbuk.png" alt="Facebook" width={25} height={25} /></div>
                <div className="p-3 bg-white/10 rounded-full cursor-pointer"><Image src="/tt.png" alt="TikTok" width={25} height={25} /></div>
                <div className="p-3 bg-white/10 rounded-full cursor-pointer"><Image src="/insta.png" alt="Instagram" width={25} height={25} /></div>
              </div>
            </div>

            {/* Marketplace */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Market Place</h3>
              <div className="flex space-x-4">
                <div className="p-3 bg-white/10 rounded-full cursor-pointer"><Image src="/sopi.png" alt="Shopee" width={25} height={25}/></div>
                <div className="p-3 bg-white/10 rounded-full cursor-pointer"><Image src="/wangsaf.png" alt="Whatsapp" width={25} height={25}/></div>
              </div>
            </div>
          </div>

          {/* Alamat */}
          <div className="flex items-start space-x-3">
            <Image src="/location-pin.svg" alt="Lokasi" width={18} height={18}/>
            <p className="text-sm">
              Jl. Diponegoro No. 5 Temanggung ( Terminal lama Temanggung)
            </p>
          </div>
        </div>

        {/* KOLOM KANAN → Navigasi + Hubungi Kami */}

        <div className="grid grid-cols-1 md:flex md:justify-end md:items-start gap-6 md:gap-[40px]">

          {/* NAVIGASI */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="cursor-default hover:underline">Beranda</a></li>
              <li><a href="#" className="cursor-default hover:underline">Tentang Kami</a></li>
              <li><a href="#" className="cursor-default hover:underline">Produk</a></li>
              <li><a href="#" className="cursor-default hover:underline">Blog</a></li>
              <li><a href="#" className="cursor-default hover:underline">Kontak</a></li>
            </ul>
          </div>

          {/* HUBUNGI KAMI */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>

            <div className="flex items-center space-x-3 mb-4">
              <Image src="phone-icon.svg" alt="Nomer Telephone" width={25} height={25}/>
              <p>0896 - 4338 - 0202</p>
            </div>

            <div className="flex items-center space-x-3">
              <Image src="email-icon.svg" alt="Email" width={25} height={25}/>
              <p>murbaututomo@gmail.com</p>
            </div>
          </div>

        </div>

      </div>

      {/* BAGIAN BAWAH */}
      <div className="bg-[#EF5B25] text-[#E2E2E2] text-[14px] md:text-[16px] lg:text-[18px] px-4 py-5 md:px-[44px] md:py-2.5 lg:px-[88px] lg:py-5 grid grid-cols-1 md:grid-cols-[1fr_auto]">
          <p className="order-2 md:order-1 text-center md:text-left cursor-default hover:underline underline-offset-2">Copyright 2025 Utomo. All Rights Reserved</p>

          <div className="order-1 md:order-2 flex justify-between gap-[56px]">
            <a href="#" className="cursor-default hover:underline">Terms of Service</a>
            <a href="#" className="cursor-default hover:underline">Privacy Policy</a>
          </div>
        
      </div>

    </footer>
  );
}
