"use client";
import Section from "@/components/utils/Section";
import Title from "@/components/utils/Title";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.918903333338!2d110.22079671537913!3d-7.494764676156091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8f47ff6a8b43%3A0x2eca1d6831d04e53!2sSukses%20Mulya!5e0!3m2!1sen!2sid";

export default function Maps() {
  return (
    <Section id="maps" className="">
      <Title
        subtitle="Lokasi"
        titleOne="Kunjungi Toko Kami"
        description="Kami siap melayani Anda langsung di toko untuk melihat produk secara fisik, berkonsultasi, atau pembelian langsung. Klik peta di bawah untuk melihat rute"
      />
      <div className="mt-8 w-full">
        <iframe
          src={mapEmbedUrl}
          className="w-full lg:h-[651px] md:h-[445px] h-[520px]"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
}
