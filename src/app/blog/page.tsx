import BlogCard from "@/components/Blog/Artikel/BlogCard";
import BlogSidebar from "@/components/Blog/Artikel/BlogSidebar";
import Pagination from "@/components/Blog/Artikel/Pagination";
import FAQList from "@/components/Blog/FAQList";

export default function BlogPage() {
  const blogs = [
    {
      slug: "cara-memilih-oli-mesin",
      title: "Cara Memilih Oli Mesin yang Tepat untuk Mobil",
      date: "12 Jan, 2025",
      category: "Tutorial",
      excerpt:
        "Memilih oli yang sesuai sangat penting untuk menjaga performa dan usia mesin kendaraan Anda.",
      image: "/images/blog1.jpg",
    },
    {
      slug: "tips-merawat-mesin",
      title: "Tips Merawat Mesin Mobil Agar Tetap Prima",
      date: "10 Jan, 2025",
      category: "Tutorial",
      excerpt:
        "Perawatan rutin pada mesin kendaraan dapat meningkatkan performa dan memperpanjang usia mesin.",
      image: "/images/blog2.jpg",
    },
  ];

  return (
    <div className="w-full container mx-auto px-4 py-1 bg-white">
      <h1 className="text-center text-3xl font-bold mb-10">
        Berita & <span className="text-orange-500">Blog Terbaru</span> Kami
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* LIST ARTIKEL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-2/3">
          {blogs.map((item) => (
            <BlogCard key={item.slug} {...item} />
          ))}
        </div>

        {/* SIDEBAR */}
        <div className="w-full md:w-1/3">
          <BlogSidebar />
        </div>
      </div>

      <div className="mt-10">
        <Pagination />
      </div>

      <div className="mt-16">
        <FAQList />
      </div>
    </div>
  );
}
