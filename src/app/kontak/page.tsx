import Kontak from "@/components/Kontak";

export async function generateMetadata() {
  return {
    title: "Kontak Sukses Mulya | Toko Teknik Magelang Terdekat",
    description:
      "Kontak Sukses Mulya Magelang, toko teknik dan alat perkakas terdekat. Dapatkan info produk, lokasi, dan layanan pelanggan.",
    keyword: [
      "kontak toko teknik Magelang",
      "toko alat teknik terdekat",
      "toko teknik terdekat",
      "toko perkakas Magelang",
      "toko alat alat teknik",
      "toko alat mesin",
      "toko alat bengkel",
      "toko alat kunci bengkel terdekat",
      "toko peralatan teknik terdekat",
      "toko alat tukang kayu terdekat",
    ],
  };
}

export default function KontakPage() {
    return (
        
            <Kontak />
        
    );
};