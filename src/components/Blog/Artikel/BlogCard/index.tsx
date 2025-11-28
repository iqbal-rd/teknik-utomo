import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  id: number;
}

export default function BlogCard({
  id,
  title,
  date,
  category,
  excerpt,
  image,
}: BlogCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded">
          {category}
        </span>

        <p className="text-xs text-gray-500 mt-1">{date}</p>

        <h3 className="text-lg font-semibold mt-2">{title}</h3>

        <p className="text-sm text-gray-600 mt-2">{excerpt}</p>

        <Link
          href={`/blog/${id}`}
          className="text-blue-600 font-medium text-sm block mt-3"
        >
          Baca Selengkapnya →
        </Link>
      </div>
    </div>
  );
}
