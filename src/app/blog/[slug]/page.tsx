import Image from "next/image";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = params;

  // Nanti ini bisa diganti fetch ke API
  const blogData = {
    title: "Cara Memilih Oli Mesin yang Tepat untuk Mobil",
    date: "12 Jan, 2025",
    category: "Tutorial",
    image: "/images/blog1.jpg",
    content: `
      Memilih oli mesin yang tepat sangat penting untuk menjaga performa kendaraan.
      Oli yang sesuai dapat melindungi komponen mesin dari gesekan berlebih
      dan meningkatkan efisiensi bahan bakar.

      Berikut beberapa tips dalam memilih oli:
      - Pilih kekentalan (viscosity) sesuai rekomendasi pabrik.
      - Periksa jenis oli: sintetis, semi sintetis, atau mineral.
      - Pastikan oli memiliki standar API dan SAE.
    `,
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Image
        src={blogData.image}
        alt={blogData.title}
        width={800}
        height={500}
        className="rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-3">{blogData.title}</h1>

      <p className="text-gray-500 text-sm mb-6">
        {blogData.date} · {blogData.category}
      </p>

      <div className="prose prose-lg">
        {blogData.content.split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
