import Hero from "@/components/hero/hero";
import Brand from "@/components/brand/brand";
import Keunggulan from "@/components/keunggulan/keunggulan";
import ProdukHero from "@/components/produk-hero/produk-hero";
import TestimoniSlider from "@/components/testimonislider/testimonislider";
import BlogHero from "@/components/blog-hero/blog-hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brand />
      <Keunggulan />
      <ProdukHero />
      <TestimoniSlider />
      <BlogHero />
    </>
  );
}
