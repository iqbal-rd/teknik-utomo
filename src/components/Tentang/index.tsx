import Brand from "@/components/Tentang/Brand/index";
import Keunggulan from "@/components/Tentang/Keunggulan/index";
import Main from "@/components/utils/Main";
import AboutUs from "@/components/Tentang/About/index";

export default function Tentang() {
  return (
    <Main id="tentang">
      <AboutUs />
      <Brand />
      <Keunggulan />
    </Main>
  );
}
