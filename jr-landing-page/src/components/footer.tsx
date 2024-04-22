import logo from "../assets/Logo JR Extenso 1.png";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";
import linkeDin from "../assets/Linkdin.svg";
import circle from "../assets/email-icon.svg";
import circle2 from "../assets/phone-icon.svg";
import localization from "../assets/localization.webp";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      {/* Desktop */}
      <div
        className="
            w-full flex flex-col justify-center items-center h-[536px] bg-[#22325D]
            max-[1260px]:h-[1200px]
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
              <div>Sobre nós</div>
              <div>Serviços</div>
              <div>Áreas de Atuação</div>
              <div>Trabalhe Conosco</div>
              <div>Nossos Diferenciais</div>
            </div>

            <div
              style={{
                backgroundImage: `url(${localization})`,
                backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
                backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
                width: "460px", // Optional: Set a width for the banner
                height: "242px", // Optional: Set a height for the banner,
              }}
              className="
                  max-[1260px]:mt-8
                  max-[560px]:hidden
              "
            ></div>
          </div>

          <div
            className="
              flex w-11/12 pt-[26px] max-w-screen-2xl mt-[100px] justify-between items-center text-white
              max-[1260px]:hidden
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
            w-full flex flex-col justify-center items-center h-[1200px] bg-[#22325D]
            min-[1400px]:hidden
            max-[429px]:hidden
        "
        style={{
          fontFamily: "Krub, sans-serif",
        }}
      >
        <div className=" w-[360px] flex flex-col ">
          <div className="flex flex-col items-start justify-center text-white  w-11/12 max-w-screen-2xl">
            <div className="flex flex-col h-[242px] justify-between text-base">
              <img src={logo} width={220} height={48} alt="Logo extenso" />
              <div className="mt-8">
                Soluçõess logísticas de ponta, sempre <br />
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

            <div className="flex flex-col items-start ml-[-10px]">
              <div className="flex mb-5 mt-8">
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

            <div className="flex flex-col h-[162px] justify-between items-start mt-9 text-sm w-[260px]">
              <div>Sobre nós</div>
              <div>Serviços</div>
              <div>Áreas de Atuação</div>
              <div>Trabalhe Conosco</div>
              <div>Nossos Diferenciais</div>
            </div>

            <div
              style={{
                backgroundImage: `url(${localization})`,
                backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
                backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
                width: "340px", // Optional: Set a width for the banner
                height: "242px", // Optional: Set a height for the banner,
              }}
              className="
                  max-[1260px]:mt-8
                  max-[560px]:hidden
              "
            ></div>

            <div
              className="flex flex-col mt-8 justify-center items-start "
              style={{
                borderTop: "1px solid #fff",
              }}
            >
              <div className="pt-[26px] text-center">
                Av. Cel. Santos, 955 - São Félix, Brumado - BA, 46107-324
              </div>
              <div>
                <Link to="/faqs">Políticas de Privacidade | </Link>
                <Link to="/about">Termos de Uso</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="
            w-full flex flex-col justify-center items-center h-[536px] bg-[#22325D]
            max-[1260px]:h-[1200px]
            min-[430px]:hidden
        "
        style={{
          fontFamily: "Krub, sans-serif",
        }}
      >
        <div className=" w-full flex flex-col justify-between items-center">
          <div className="flex flex-col items-start justify-center text-white h-[1200px] w-11/12 max-w-screen-2xl">
            <div className="flex flex-col h-[242px] justify-between text-base">
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

            <div className="flex flex-col w-full ">
              <div
                className="
                            flex mb-5
                            max-[1260px]:mt-8
                    "
              >
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
                        flex flex-col h-[180px] justify-between text-base
                        max-[1260px]:mt-9
                        max-[1260px]:text-sm
                    "
            >
              <div>Sobre nós</div>
              <div>Serviços</div>
              <div>Áreas de Atuação</div>
              <div>Trabalhe Conosco</div>
              <div>Nossos Diferenciais</div>
            </div>

            <div
              style={{
                backgroundImage: `url(${localization})`,
                backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
                backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
                width: "100%", // Optional: Set a width for the banner
                height: "242px", // Optional: Set a height for the banner,
              }}
              className="mt-8"
            ></div>

            <div
              className="flex flex-col mt-8 justify-center items-center"
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
