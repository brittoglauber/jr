import background from "../assets/Background.webp";
import { Button } from "./button";
import Formulario from "./formulario";
import HeaderBanner from "./header-banner";

export function Banner() {
  return (
    <div>
      {/* DESKTOP */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
          backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
          width: "100%", // Optional: Set a width for the banner
          height: "746.46px", // Optional: Set a height for the banner,
        }}
        className="
                flex flex-col items-center

                max-[1024px]:mb-[520px]
                max-[1024px]:hidden
            "
      >
        <HeaderBanner />

        <div className="flex justify-between w-full max-w-screen-2xl mt-[60px]  px-5">
          <div className="text-white mt-10">
            <span
              style={{
                padding: "5px",
                backgroundColor: "#3B3F44",
                borderLeft: "5px solid #E6293F",
                minWidth: "350px",
              }}
              className="max-[448px]:text-xs"
            >
              Expertise em Logística, Mineração e Armazenamento
            </span>

            <div
              className="
                text-6xl font-bold mt-2 max-w-[790px]
                max-[1260px]:text-[34px]
                max-[1260px]:hidden
                max-[448px]:w-full
                leading-tight	
            "
            >
              Soluções inteligentes e econômicas para quem vai para todas as
              direções!
            </div>

            <div className="text-[50px] font-bold mt-2 max-w-[790px] min-[1261px]:hidden">
              Soluções inteligentes e econômicas para quem vai para todas as
              direções!
            </div>

            <div className="text-base mt-4 mb-8">
              Entre em contato conosco para descobrir todas as nossas soluções!
            </div>

            <Button
              text="Entrar em Contato"
              link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20empresa%20e%20seus%20serviços"
            />
          </div>
          <div className="h-[650px] w-[460px] items-end bg-white rounded-md min-w-[459px]">
            <Formulario />
          </div>
        </div>
      </div>

      {/* TABLET */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
          backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
          width: "100%", // Optional: Set a width for the banner
          height: "780px", // Optional: Set a height for the banner,
        }}
        className="flex flex-col items-center  min-[1025px]:hidden 
        max-[768px]:hidden"
      >
        <HeaderBanner />

        <div className="flex justify-center mt-[10px] px-5">
          <div className="text-white mt-10 w-[50%]">
            <span
              style={{
                padding: "5px",
                backgroundColor: "#3B3F44",
                borderLeft: "5px solid #E6293F",
                minWidth: "350px",
              }}
              className="max-[448px]:text-xs"
            >
              Expertise em Logística, Mineração e Armazenamento
            </span>

            <div className="text-[50px] leading-none font-bold mt-2 max-[448px]:w-full">
              Soluções inteligentes e econômicas para quem vai para todas as
              direções!
            </div>

            <div className="text-base mt-2 mb-6">
              Entre em contato conosco para descobrir todas as nossas soluções!
            </div>

            <Button
              text="Entrar em Contato"
              link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20empresa%20e%20seus%20serviços"
            />
          </div>

          <div className="w-[50%] mt-[20px] items-end bg-white rounded-md ">
            <Formulario />
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
          backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
          width: "100%", // Optional: Set a width for the banner
          height: "555px", // Optional: Set a height for the banner,
        }}
        className="flex flex-col items-center  mb-[520px] min-[769px]:hidden"
      >
        <HeaderBanner />

        <div
          className="
            flex flex-col justify-center items-center  mt-[60px]
            max-[448px]:w-full 
            max-[448px]:mt-[10px]
          "
        >
          <div className="text-white mt-10 mx-5">
            <span
              style={{
                padding: "5px",
                backgroundColor: "#3B3F44",
                borderLeft: "5px solid #E6293F",
                minWidth: "350px",
              }}
              className="max-[448px]:text-xs"
            >
              Expertise em Logística, Mineração e Armazenamento
            </span>

            <div className="text-[34px] leading-none	font-bold mt-2 max-[448px]:w-full">
              Soluções inteligentes e econômicas para quem vai para todas as
              direções!
            </div>

            <div className="text-base mt-2 mb-6">
              Entre em contato conosco para descobrir todas as nossas soluções!
            </div>

            <Button
              text="Entrar em Contato"
              link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20empresa%20e%20seus%20serviços"
            />
          </div>

          <div className="w-[460px] mt-[48px] items-end bg-white rounded-md max-[490px]:w-11/12">
            <Formulario />
          </div>
        </div>
      </div>
    </div>
  );
}
