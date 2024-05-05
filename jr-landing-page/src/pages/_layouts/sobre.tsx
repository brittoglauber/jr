import AboutText from "@/components/aboutText";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HeaderBanner from "@/components/header-banner";

export default function Sobre() {
  return (
    <div id="about">
      <Header />
      <HeaderBanner />
      <AboutText />
      <Footer />
    </div>
  );
}
