import { Link, NavLink } from "react-router-dom";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";
import linkeDin from "../assets/Linkdin.svg";
import { Button as Butao } from "./ui/button";
import { HashLink } from "react-router-hash-link";
import DropDown from "./dropdown";

export default function HeaderBanner() {
  return (
    <>
      <div
        className="flex justify-center w-full h-[78px] max-[1164px]:hidden"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          fontFamily: "Krub, sans-serif",
        }}
      >
        <div className="flex items-center justify-between w-full max-w-screen-2xl px-5">
          <nav className="lg:space-x-6 text-white text-base font-semibold">
            <NavLink to="/" className="pr-4 border-r border-slate-500	">
              Início
            </NavLink>
            <HashLink
              to="/#services"
              className="pr-4 border-r border-slate-500	"
              smooth
              scroll={(el: any) => {
                const yOffset = -100; // Adjust the offset to your liking
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              Serviços
            </HashLink>
            <HashLink
              to="/#aboutUs"
              className="pr-4 border-r border-slate-500	"
              smooth
              scroll={(el: any) => {
                const yOffset = -100; // Adjust the offset to your liking
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              Sobre Nós
            </HashLink>
            <HashLink
              to="/#acting"
              className="pr-4 border-r border-slate-500	"
              smooth
              scroll={(el: any) => {
                const yOffset = -100; // Adjust the offset to your liking
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              Atuação
            </HashLink>
            <HashLink
              to="/#work"
              className="pr-4 border-r border-slate-500	"
              smooth
              scroll={(el: any) => {
                const yOffset = -100; // Adjust the offset to your liking
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              Trabalhe Conosco
            </HashLink>
            <HashLink
              to="/#contact"
              className="pr-4"
              smooth
              scroll={(el: any) => {
                const yOffset = -100; // Adjust the offset to your liking
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              Contato
            </HashLink>
          </nav>

          <div className="flex">
            <div className="flex items-center gap-6 mr-[40px] max-[1420px]:hidden">
              <NavLink
                to="https://www.instagram.com/jrexpresstransportes/"
                target="_blank"
              >
                <img src={instagram} alt="Instagram" />
              </NavLink>

              <NavLink
                to="https://www.facebook.com/jrexpresstransportes"
                target="_blank"
              >
                <img src={facebook} alt="Facebook" />
              </NavLink>

              <NavLink
                to="https://www.linkedin.com/company/101206737/"
                target="_blank"
              >
                <img src={linkeDin} alt="Linkedin" />
              </NavLink>
            </div>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
            >
              <button
                className="
                                items-end text-white h-[78px] w-[460px] bg-[#E6293F]
                                hover:bg-[#C9123F] transition duration-300
                            "
              >
                Solicitar Cotação pelo WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center w-full h-[74px]  px-5 py-3 min-[1165px]:hidden"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <div className="flex items-center justify-between w-full">
          <Butao
            variant="secondary"
            className="bg-red-500 font-semibold	text-base  text-white h-12 w-[149px]"
          >
            <Link
              to="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
              target="_blank"
            >
              Orçamento
            </Link>
          </Butao>
          <DropDown />
        </div>
      </div>
    </>
  );
}
