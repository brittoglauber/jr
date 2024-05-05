import logo from "../assets/Logo JR Extenso 1.png";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";
import linkeDin from "../assets/Linkdin.svg";
import circle from "../assets/email-icon.svg";
import circle2 from "../assets/phone-icon.svg";
import localization from "../assets/localization.webp";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      setIsVisible(true);
      hasAnimated.current = true;
    }
  }, [inView]);

  return (
    <>
      {/* Desktop */}
      <div
        ref={ref}
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

            <a
              href="https://maps.app.goo.gl/aEeaZXWDZinZsxFC7"
              target="_blank"
              className={`max-[560px]:hidden  ${isVisible ? "animate-fade-up animate-duration-[2000ms] " : ""}`}
            >
              <img src={localization} width={460} height={242} />
            </a>
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
              <HashLink to="/faqs/#faqs">Políticas de Privacidade | </HashLink>
              <HashLink to="/about/#about">Termos de Uso</HashLink>
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

          <div ref={ref} className="w-full flex items-start mt-8 px-5">
            <a
              href="https://maps.app.goo.gl/aEeaZXWDZinZsxFC7"
              target="_blank"
              className={`max-[1260px]:mt-8 max-[560px]:hidden ${isVisible ? "animate-fade-up animate-duration-[2000ms] " : ""}`}
            >
              <img src={localization} width={340} height={242} />
            </a>
          </div>

          <div
            className="w-full flex  mt-8 justify-between items-start mx-5 mb-[24px]"
            style={{
              borderTop: "1px solid #fff",
            }}
          >
            <div className="text-center mt-6">
              Av. Cel. Santos, 955 - São Félix, Brumado - BA, 46107-324
            </div>
            <div className="mt-6">
              <HashLink to="/faqs/#faqs">Políticas de Privacidade | </HashLink>
              <HashLink to="/about/#about">Termos de Uso</HashLink>
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

            <div>
              <a
                href="https://maps.app.goo.gl/aEeaZXWDZinZsxFC7"
                target="_blank"
                className={`mt-8 ${isVisible ? "animate-fade-up animate-duration-[2000ms] " : ""}`}
              >
                <img src={localization} width={370} height={242} />
              </a>
            </div>
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
              <HashLink to="/faqs/#faqs">Políticas de Privacidade | </HashLink>
              <HashLink to="/about/#about">Termos de Uso</HashLink>
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

            <a
              ref={ref}
              href="https://maps.app.goo.gl/aEeaZXWDZinZsxFC7"
              target="_blank"
              className={`mt-8 ${isVisible ? "animate-fade-up animate-duration-[2000ms] " : ""}`}
            >
              <img src={localization} height={242} style={{ width: "100%" }} />
            </a>

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
                <HashLink to="/faqs/#faqs">
                  Políticas de Privacidade |{" "}
                </HashLink>
                <HashLink to="/about/#about">Termos de Uso</HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
