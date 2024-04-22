import { Banner } from "@/components/banner";
import { Carrosel } from "@/components/carrosel";
import { Contact2 } from "@/components/contact-2";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Informational } from "@/components/informational";
import { Outlet } from "@/components/outlet";
import { Secao1 } from "@/components/secao-1";
import { Secao2 } from "@/components/secao-2";
import { SeccionContact } from "@/components/seccionContact";

export function AppLayout() {
  return (
    <div
      className="flex min-h-screen flex-col antialiased"
      style={{
        fontFamily: "Rubik, sans-serif",
      }}
    >
      <Header />
      <Banner />
      <Carrosel />
      <Outlet />
      <Secao1 />
      <Informational />
      <SeccionContact />
      <Secao2 />
      <Contact2 />
      <Footer />
    </div>
  );
}
