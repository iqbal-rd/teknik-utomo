import BlogCard from "@/components/Blog/Artikel/BlogCard";
import BlogSidebar from "@/components/Blog/Artikel/BlogSidebar";
import Pagination from "@/components/Blog/Artikel/Pagination";
import FAQList from "@/components/Blog/FAQList";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Cara Memilih Oli Mesin yang Tepat untuk Mobil",
      date: "12 Jan, 2025",
      category: "Tutorial",
      excerpt:
        "Memilih oli yang sesuai sangat penting untuk menjaga performa dan usia mesin.",
      image: "/images/blog1.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-3xl font-bold">
        Berita & <span className="text-orange-500">Blog Terbaru</span> Kami
      </h1>

      <div className="mt-10 flex flex-col md:flex-row gap-8">
        
        {/* List Artikel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-2/3">
          {blogs.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>

        {/* Sidebar */}
        <BlogSidebar />
      </div>

      <Pagination />
      <FAQList />
    </div>
  );
}
