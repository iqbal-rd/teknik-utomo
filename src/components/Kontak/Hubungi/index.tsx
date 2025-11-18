"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="overflow-hidden max-w-[430px] md:max-w-[744px] lg:max-w-[1440px] mx-auto px-[28px] md:px-[44px] lg:px-[88px] pt-[70px] mb-[30px] md:pt-[90px] md:mb-[40px] lg:pt-[140px] lg:mb-[80px]">
      <p className="text-[#2F2D93] text-[14px] md:text-[16px] lg:text-[18px] mb-1 text-center">
        Contact
      </p>
      <h2 className="text-center text-3xl font-semibold text-blue-900 mb-8">
        Hubungi<span className="text-orange-500"> Kami</span>
      </h2>
      {/* Info Kontak */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-5 mb-[30px] md:mb-[40px] lg:mb-[80px]">
        <div className="bg-[#0F2464] px-2.5 py-3 md:pt-4 md:pb-9 lg:py-5 rounded-lg flex md:flex-col lg:flex-row justify-center items-center gap-2.5">
          <Phone className="text-orange-400" size={50} />
          <h3 className="text-white text-[14px] md:text-[16px] lg:text-[20px] font-semibold truncate">0896 - 4338 - 0202</h3>
        </div>

        <div className="bg-[#0F2464] px-2.5 py-3 md:pt-4 md:pb-9 lg:py-5 rounded-lg flex md:flex-col lg:flex-row justify-center items-center gap-2.5">
          <Mail className="text-orange-400" size={50} />
          <h3 className="text-white text-[14px] md:text-[16px] lg:text-[20px] font-semibold truncate">murbaututomo@gmail.com</h3>
        </div>

        <div className="bg-[#0F2464] px-2.5 py-3 md:pt-4 md:pb-9 lg:py-5 rounded-lg flex md:flex-col lg:flex-row justify-center items-center gap-2.5">
          <MapPin className="text-orange-400" size={50} />
          <h3 className="text-white text-[14px] md:text-[16px] lg:text-[20px] font-semibold truncate">Temanggung</h3>
        </div>
      </div>

      {/* Form dan Peta */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-[30px] lg:gap-5">
        {/* Form */}
        <form className="bg-white p-6 rounded-xl shadow-md space-y-4 border border-[#EEEEEE] style-opacity-1 transform-none"
        >
          <h3 className="text-black text-2xl font-semibold mb-4">Kirim Pesan Kepada Kami</h3>

          <div>
            <label className="text-black block text-sm font-medium mb-1">
              Nama<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nama"
              className="text-black w-full border-1 border-[#888888] rounded-lg px-3 py-2 focus:ring-0 focus:ring-black-400 outline-none text-[12px] md:text-[14px] lg:text-[16px]"
              required
            />
          </div>

          <div>
            <label className="text-black block text-sm font-medium mb-1">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nomor HP"
              className="text-black w-full border-1 border-[#888888] rounded-lg px-3 py-2 focus:ring-0 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-black block text-sm font-medium mb-1">Subjek</label>
            <input
              type="text"
              placeholder="Subjek"
              className="text-black w-full border-1 border-[#888888] rounded-lg px-3 py-2 focus:ring-0 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="text-black block text-sm font-medium mb-1">
              Pesan<span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tulis pesan Anda disini"
              className="text-black w-full border-1 border-[#888888] rounded-lg px-3 py-2 focus:ring-0 focus:ring-orange-400 outline-none"
              required
            ></textarea>
          </div>
          <div className="flex justify-end lg:mt-4 items-end">
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Kirim Pesan
          </button>
          </div>
        </form>

        {/* Lokasi */}
        <div>
          <h3 className="text-black text-2xl font-semibold font-inter mb-4">Lokasi Kami</h3>
          <p className="text-[#4F4F4F] text-[14px] md:text-[16px] lg:text-[18px]">
            Temukan toko Utomo Mur Baut & Teknik dengan mudah melalui peta di bawah ini.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.348972649283!2d110.1762910758884!3d-7.314637671924093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a83e6f1d9bad9%3A0xd3a2398f8648bb5a!2sUtomo%20Mur%20Baut%20dan%20Teknik!5e0!3m2!1sen!2sid!4v1759227832735!5m2!1sen!2sid"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            className="rounded-xl border"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
