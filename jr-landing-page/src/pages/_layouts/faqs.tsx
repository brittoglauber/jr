import FaqsText from "@/components/faqs-text";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HeaderBanner from "@/components/header-banner";

export default function Faqs() {
  return (
    <>
      <Header />
      <HeaderBanner />
      <FaqsText />
      <Footer />
    </>
  );
}
