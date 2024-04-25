import logo from "../assets/Logo JR Extenso 1.png";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";
import linkeDin from "../assets/Linkdin.svg";
import circle from "../assets/email-icon.svg";
import circle2 from "../assets/phone-icon.svg";
import localization from "../assets/localization.webp";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Footer() {
  return (
    <>
      {/* Desktop */}
      <div
        className="
            w-full flex flex-col justify-center items-center h-[536px] bg-[#22325D]
            max-[1400px]:hidden
        "
        style={{
          fontFamily: "Krub, sans-serif",
        }}
      >
        <div className=" w-full flex flex-col justify-between items-center">
          <div className="flex items-center justify-between text-white h-[242px] w-11/12 max-w-screen-2xl mt-24">
            <div className="flex flex-col h-[242px] text-base">
              <img src={logo} width={220} height={48} alt="Logo extenso" />
              <div className="mt-8">
                Soluçõesss logísticas de ponta, sempre <br />
                ajudando quem precisa ir para todas as <br />
                direções.
              </div>
              <div className="flex gap-6 mt-8">
                <Link
                  to="https://www.instagram.com/jrexpresstransportes/"
                  target="_blank"
                >
                  <img
                    src={instagram}
                    width={20}
                    height={15}
                    alt="icone-instagram"
                  />
                </Link>
                <Link
                  to="https://www.facebook.com/jrexpresstransportes"
                  target="_blank"
                >
                  <img
                    src={facebook}
                    width={20}
                    height={15}
                    alt="icone-instagram"
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/101206737/"
                  target="_blank"
                >
                  <img
                    src={linkeDin}
                    width={20}
                    height={15}
                    alt="icone-instagram"
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-start h-full">
              <div className="flex mb-5">
                <img
                  src={circle}
                  width={63}
                  height={63}
                  alt=""
                  className="mr-4"
                />
                <div className="text-sm">
                  Email <br />
                  comercial@jrexpresstransporte.com.br
                </div>
              </div>
              <div className="flex">
                <img
                  src={circle2}
                  width={63}
                  height={63}
                  alt=""
                  className="mr-4"
                />
                <div className="text-sm">
                  Telefones: <br />
                  (77) 3441-7739 / (77) 9.9968-0779 <br />
                  (77) 9.9968-2618 / (77) 9.9968-1306
                </div>
              </div>
            </div>

            <div className="flex flex-col h-[242px] gap-2 text-base">
              <HashLink
                to="#aboutUs"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Sobre Nós
              </HashLink>
              <HashLink
                to="#services"
                className="pr-4"
                smooth
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Serviços
              </HashLink>
              <HashLink
                to="#acting"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = -20; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "auto" });
                }}
              >
                Áreas de Atuação
              </HashLink>
              <HashLink
                to="#work"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = 0; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Trabalhe Conosco
              </HashLink>
              <HashLink
                to="#contact"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = 0; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Nossos Diferenciais
              </HashLink>
            </div>

            <div
              style={{
                backgroundImage: `url(${localization})`,
                backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
                backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
                width: "460px", // Optional: Set a width for the banner
                height: "242px", // Optional: Set a height for the banner,
              }}
              className="max-[560px]:hidden"
            ></div>
          </div>

          <div
            className="
              flex w-11/12 pt-[26px] max-w-screen-2xl mt-[100px] justify-between items-center text-white
            "
            style={{
              borderTop: "1px solid #fff",
            }}
          >
            <div>Av. Cel. Santos, 955 - São Félix, Brumado - BA, 46107-324</div>
            <div>
              <Link to="/faqs">Políticas de Privacidade | </Link>
              <Link to="/about">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div
        className="
            w-full flex flex-col justify-center items-center bg-[#22325D]
            min-[1401px]:hidden
            max-[1060px]:hidden
        "
        style={{
          fontFamily: "Krub, sans-serif",
        }}
      >
        <div className="w-full flex flex-col items-center justify-center text-white ">
          <div className="w-full flex justify-between items-start mt-[72px] px-5">
            <div className="flex flex-col text-base">
              <img src={logo} width={220} height={48} alt="Logo extenso" />
              <div className="mt-8">
                Soluções logísticas de ponta, sempre <br />
                ajudando quem precisa ir para todas as <br />
                direções.
              </div>
              <div className="flex gap-6 mt-8">
                <img
                  src={instagram}
                  width={20}
                  height={15}
                  alt="icone-instagram"
                />
                <img
                  src={facebook}
                  width={20}
                  height={15}
                  alt="icone-instagram"
                />
                <img
                  src={linkeDin}
                  width={20}
                  height={15}
                  alt="icone-instagram"
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex mb-5">
                <img
                  src={circle}
                  width={63}
                  height={63}
                  alt=""
                  className="mr-4"
                />
                <div className="text-base">
                  Email <br />
                  comercial@jrexpresstransporte.com.br
                </div>
              </div>
              <div className="flex">
                <img
                  src={circle2}
                  width={63}
                  height={63}
                  alt=""
                  className="mr-4"
                />
                <div className="text-base">
                  Telefones: <br />
                  (77) 3441-7739 / (77) 9.9968-0779 <br />
                  (77) 9.9968-2618 / (77) 9.9968-1306
                </div>
              </div>
            </div>

            <div className="flex flex-col h-[162px] justify-between items-start text-base">
              <HashLink
                to="#aboutUs"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Sobre Nós
              </HashLink>
              <HashLink
                to="#services"
                className="pr-4 "
                smooth
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Serviços
              </HashLink>
              <HashLink
                to="#acting"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = -20; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "auto" });
                }}
              >
                Áreas de Atuação
              </HashLink>
              <HashLink
                to="#work"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = 0; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Trabalhe Conosco
              </HashLink>
              <HashLink
                to="#contact"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = 0; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Nossos Diferenciais
              </HashLink>
            </div>
          </div>

          <div className="w-full flex items-start mt-8 px-5">
            <div
              style={{
                backgroundImage: `url(${localization})`,
                backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
                borderRadius: "8px",
                backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
                width: "340px", // Optional: Set a width for the banner
                height: "242px", // Optional: Set a height for the banner,
              }}
              className="
                  max-[1260px]:mt-8
                  max-[560px]:hidden
              "
            ></div>
          </div>

          <div
            className="w-full flex  mt-8 justify-between items-start px-5 mb-[24px]"
            style={{
              borderTop: "1px solid #fff",
            }}
          >
            <div className="text-center mt-6">
              Av. Cel. Santos, 955 - São Félix, Brumado - BA, 46107-324
            </div>
            <div className="mt-6">
              <Link to="/faqs">Políticas de Privacidade | </Link>
              <Link to="/about">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet-2 */}
      <div
        className="
            w-full flex flex-col justify-center items-center bg-[#22325D]
            min-[1061px]:hidden
            max-[780px]:hidden
        "
        style={{
          fontFamily: "Krub, sans-serif",
        }}
      >
        <div className="w-full flex flex-col items-center justify-center text-white ">
          <div className="w-full flex justify-between items-start mt-[72px] px-5">
            <div className="flex flex-col text-base">
              <img src={logo} width={220} height={48} alt="Logo extenso" />
              <div className="mt-8">
                Soluções logísticas de ponta, sempre <br />
                ajudando quem precisa ir para todas as <br />
                direções.
              </div>
              <div className="flex gap-6 mt-8">
                <img
                  src={instagram}
                  width={20}
                  height={15}
                  alt="icone-instagram"
                />
                <img
                  src={facebook}
                  width={20}
                  height={15}
                  alt="icone-instagram"
                />
                <img
                  src={linkeDin}
                  width={20}
                  height={15}
                  alt="icone-instagram"
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex mb-5">
                <img
                  src={circle}
                  width={63}
                  height={63}
                  alt=""
                  className="mr-4"
                />
                <div className="text-base">
                  Email <br />
                  comercial@jrexpresstransporte.com.br
                </div>
              </div>
              <div className="flex">
                <img
                  src={circle2}
                  width={63}
                  height={63}
                  alt=""
                  className="mr-4"
                />
                <div className="text-base">
                  Telefones: <br />
                  (77) 3441-7739 / (77) 9.9968-0779 <br />
                  (77) 9.9968-2618 / (77) 9.9968-1306
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex items-start justify-between mt-8 px-5">
            <div className="flex flex-col h-[162px] mt-8 justify-between items-start text-base">
              <HashLink
                to="#aboutUs"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Sobre Nós
              </HashLink>
              <HashLink
                to="#services"
                className="pr-4 "
                smooth
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Serviços
              </HashLink>
              <HashLink
                to="#acting"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = -20; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "auto" });
                }}
              >
                Áreas de Atuação
              </HashLink>
              <HashLink
                to="#work"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = 0; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Trabalhe Conosco
              </HashLink>
              <HashLink
                to="#contact"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = 0; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Nossos Diferenciais
              </HashLink>
            </div>
            <div
              style={{
                backgroundImage: `url(${localization})`,
                backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
                borderRadius: "8px",
                backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
                width: "370px", // Optional: Set a width for the banner
                height: "242px", // Optional: Set a height for the banner,
              }}
              className="mt-8"
            ></div>
          </div>

          <div
            className="w-full flex  mt-8 justify-between items-start mb-[24px] px-5"
            style={{
              borderTop: "1px solid #fff",
            }}
          >
            <div className="text-center mt-6">
              Av. Cel. Santos, 955 - São Félix, Brumado - BA, 46107-324
            </div>
            <div className="mt-6">
              <Link to="/faqs">Políticas de Privacidade | </Link>
              <Link to="/about">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="w-full flex flex-col justify-center items-center bg-[#22325D] px-5 min-[781px]:hidden"
        style={{
          fontFamily: "Krub, sans-serif",
        }}
      >
        <div className=" w-full flex flex-col justify-between items-center mt-[72px]">
          <div className="flex flex-col items-start justify-center text-white ">
            <div className="text-base">
              <img src={logo} width={220} height={48} alt="Logo extenso" />
              <div className="mt-8">
                Soluções logísticas de ponta, sempre ajudando quem precisa ir
                para todas as direções.
              </div>
              <div className="flex gap-6 mt-8">
                <img
                  src={instagram}
                  width={20}
                  height={15}
                  alt="icone-instagram"
                />
                <img
                  src={facebook}
                  width={20}
                  height={15}
                  alt="icone-instagram"
                />
                <img
                  src={linkeDin}
                  width={20}
                  height={15}
                  alt="icone-instagram"
                />
              </div>
            </div>

            <div className="flex flex-col w-full mt-8">
              <div className="flex mb-5">
                <img
                  src={circle}
                  width={63}
                  height={63}
                  alt=""
                  className="mr-4"
                />
                <div className="flex flex-col text-sm justify-center">
                  <div>Email</div>
                  <div className="max-[352px]:text-xs">
                    comercial@jrexpresstransporte.com.br
                  </div>
                </div>
              </div>
              <div className="flex">
                <img
                  src={circle2}
                  width={63}
                  height={63}
                  alt=""
                  className="mr-4"
                />
                <div className="text-sm">
                  Telefones: <br />
                  (77) 3441-7739 / (77) 9.9968-0779 <br />
                  (77) 9.9968-2618 / (77) 9.9968-1306
                </div>
              </div>
            </div>

            <div
              className="
                        flex flex-col h-[180px] justify-between text-base mt-9
                        
                    "
            >
              <HashLink
                to="#aboutUs"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Sobre Nós
              </HashLink>
              <HashLink
                to="#services"
                className="pr-4"
                smooth
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Serviços
              </HashLink>
              <HashLink
                to="#acting"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = -20; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "auto" });
                }}
              >
                Áreas de Atuação
              </HashLink>
              <HashLink
                to="#work"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = 0; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Trabalhe Conosco
              </HashLink>
              <HashLink
                to="#contact"
                className="pr-4"
                scroll={(el: any) => {
                  const yOffset = -200; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Nossos Diferenciais
              </HashLink>
            </div>

            <div
              style={{
                backgroundImage: `url(${localization})`,
                borderRadius: "8px",
                backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
                backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
                width: "100%", // Optional: Set a width for the banner
                height: "242px", // Optional: Set a height for the banner,
              }}
              className="mt-8"
            ></div>

            <div
              className="flex flex-col w-full my-8 justify-center items-center "
              style={{
                borderTop: "1px solid #fff",
              }}
            >
              <div className="pt-[26px] text-center">
                Av. Cel. Santos, 955 - São Félix, Brumado - BA, 46107-324
              </div>
              <div className="mt-6">
                <Link to="/faqs">Políticas de Privacidade | </Link>
                <Link to="/about">Termos de Uso</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
