import api from "./api";
import {
  BlogResponse,
  PaginationTypes,
  SuksesBlog,
} from "@/types/Blog";
import { formatDate } from "./utils";

const PREFIX_STRAPI_COLLECTION =
  process.env.NEXT_PUBLIC_STRAPI_PREFIX_COLLECTION || "sukses";

/* ------------------------------------------------------------------
   DUMMY DATA FALLBACK (Jika API error)
------------------------------------------------------------------- */
// 1️⃣ TYPES / INTERFACES
export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  created_at?: string;
}

export interface BlogAuthor {
  id: number;
  name: string;
  image_url: string;
  image_alt: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  image_alt: string;
  created_at: string;
  author: BlogAuthor;
  categories: BlogCategory[];
}


// Dummy categories
const dummyCategories: BlogCategory[] = [
  {
    id: 1,
    name: "Technology",
    slug: "technology",
  },
  {
    id: 2,
    name: "Programming",
    slug: "programming",
  },
  {
    id: 3,
    name: "Design",
    slug: "design",
  },
];

// Dummy blog list
const dummyBlogs: Blog[] = [
  {
    id: 1,
    title: "Apa Itu Next.js 14? Fitur dan Keunggulannya",
    slug: "apa-itu-nextjs-14",
    excerpt: "Mengenal fitur dan keunggulan Next.js 14.",
    content:
      "Next.js 14 membawa peningkatan performa besar seperti Partial Rendering dan Server Actions.",
    image_url:
      "https://images.unsplash.com/photo-1526378722484-c1d7000a5a02?q=80&w=1600",
    image_alt: "Next.js illustration",
    created_at: "20 Jan 2025",
    author: {
      id: 1,
      name: "Admin",
      image_url: "",
      image_alt: "",
    },
    categories: [dummyCategories[0]],
  },
  {
    id: 2,
    title: "Belajar Tailwind CSS untuk Pemula",
    slug: "belajar-tailwind-css",
    excerpt: "Panduan dasar Tailwind CSS untuk pemula.",
    content:
      "Tailwind CSS adalah utility-first CSS framework yang mempermudah styling.",
    image_url:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600",
    image_alt: "Tailwind CSS example",
    created_at: "21 Jan 2025",
    author: {
      id: 2,
      name: "Admin",
      image_url: "",
      image_alt: "",
    },
    categories: [dummyCategories[1]],
  },
];

/* ------------------------------------------------------------------
   GET ALL BLOGS (List)
------------------------------------------------------------------- */

export async function getAllBlogs(
  query: string
): Promise<{ blogs: Blog[]; pagination: PaginationTypes }> {
  try {
    const res = await api.get(
      `/${PREFIX_STRAPI_COLLECTION}-blogs?${query}`
    );

    return {
      blogs: res.data.data,
      pagination: res.data.meta.pagination,
    };
  } catch (error) {
    console.error("API ERROR (getAllBlogs) → Pakai dummy fallback.");
    return {
      blogs: dummyBlogs,
      pagination: {
        page: 1,
        pageSize: dummyBlogs.length,
        pageCount: 1,
        total: dummyBlogs.length,
      },
    };
  }
}

/* ------------------------------------------------------------------
   GET SINGLE BLOG DETAIL
------------------------------------------------------------------- */

export async function getBlog(
  query: string
): Promise<{ blogs: Blog[] }> {
  try {
    const res = await api.get(
      `/${PREFIX_STRAPI_COLLECTION}-blogs?${query}`
    );

    const blogs: Blog[] = res.data.data.map((blog: BlogResponse) => ({
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.meta_description || "",
      content: blog.content,
      image_url: blog.image_url,
      image_alt: blog.image_alt,
      created_at: formatDate(blog.createdAt),
      author: {
        id: blog.sukses_blog_authors?.[0]?.id || 0,
        name: blog.sukses_blog_authors?.[0]?.name || "Admin",
        image_url: blog.sukses_blog_authors?.[0]?.image_url || "",
        image_alt: blog.sukses_blog_authors?.[0]?.image_alt || "",
      },
      categories:
        blog.sukses_blog_categories?.map((category: SuksesBlog) => ({
          id: category.id,
          name: category.name,
          slug: category.slug,
        })) || [],
    }));

    return { blogs };
  } catch (error) {
    console.error("API ERROR (getBlog) → Pakai dummy fallback.");
    return { blogs: dummyBlogs };
  }
}

/* ------------------------------------------------------------------
   GET ALL CATEGORIES
------------------------------------------------------------------- */

export async function getBlogCategory(): Promise<BlogCategory[]> {
  try {
    const res = await api.get(
      `/${PREFIX_STRAPI_COLLECTION}-blog-categories`
    );
    return res.data.data;
  } catch (error) {
    console.error(
      "API ERROR (getBlogCategory) → Pakai dummy fallback."
    );
    return dummyCategories;
  }
}
