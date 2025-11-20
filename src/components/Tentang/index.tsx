import Brand from "@/components/Tentang/Brand/index";
import Keunggulan from "@/components/Tentang/Keunggulan/index";
// import Hero from "@/components/Tentang/Hero/index";
import Main from "@/components/utils/Main";
import AboutUs from "@/components/Tentang/About/index";

export default function Tentang() {
  return (
    <Main id="tentang">
      {/* <Hero /> */}
      <AboutUs />
      <Brand />
      <Keunggulan />
    </Main>
  );
}
