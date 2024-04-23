import background from "../assets/Background.webp";
import { Button } from "./button";
import Formulario from "./formulario";
import HeaderBanner from "./header-banner";

export function Banner() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
          backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
          width: "100%", // Optional: Set a width for the banner
          height: "746.46px", // Optional: Set a height for the banner,
        }}
        className="
                flex flex-col items-center mb-56

                max-[1260px]:mb-[520px]
                max-[1260px]:hidden
            "
      >
        <HeaderBanner />

        <div
          className="
                    flex justify-between w-full max-w-screen-2xl mt-[60px] 
                    max-[1260px]:flex-col
                    max-[1260px]:justify-center
                    max-[1260px]:items-center
                    max-[448px]:w-full
                    max-[448px]:mt-[10px]
                "
        >
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
                text-6xl font-bold mt-2
                max-[1260px]:text-[34px]
                max-[1260px]:hidden
                max-[448px]:w-full
                leading-tight	
            "
            >
              Soluções inteligentes e <br /> econômicas para quem vai <br />{" "}
              para todas as direções!
            </div>

            <div
              className="
                            text-6xl font-bold mt-2
                            min-[1260px]:hidden
                            max-[1260px]:text-[34px]
                            max-[448px]:w-full
                        "
            >
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
          <div
            className="
                        h-[650px] w-[460px] items-end bg-white rounded-md 
                        max-[1260px]:mt-[60px]
                        max-[490px]:w-11/12
                    "
          >
            <Formulario />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // Adjust as needed (contain, auto, etc.)
          backgroundPosition: "center", // Adjust as needed (top, bottom, left, right)
          width: "100%", // Optional: Set a width for the banner
          height: "555px", // Optional: Set a height for the banner,
        }}
        className="
                flex flex-col items-center mb-52 
                max-[1260px]:mb-[520px]
                min-[1260px]:hidden
            "
      >
        <HeaderBanner />

        <div
          className="
                    flex justify-between w-11/12 max-w-screen-2xl mt-[60px]
                    max-[1260px]:flex-col
                    max-[1260px]:justify-center
                    max-[1260px]:items-center
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

            <div
              className="
            text-6xl font-bold mt-2
            max-[1260px]:text-[34px]
            max-[1260px]:hidden
            max-[448px]:w-full
            "
            >
              Soluções inteligentes e <br /> econômicas para quem vai <br />{" "}
              para todas as direções!
            </div>

            <div
              className="
                            text-6xl font-bold mt-2
                            min-[1260px]:hidden
                            max-[1260px]:text-[34px]
                            max-[448px]:w-full
                        "
            >
              Soluções inteligentes e econômicas para quem vai para todas as
              direções!
            </div>

            <div className="text-base mt-4 mb-6">
              Entre em contato conosco para descobrir todas as nossas soluções!
            </div>

            <Button
              text="Entrar em Contato"
              link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20empresa%20e%20seus%20serviços"
            />
          </div>

          <div
            className="
                        h-[650px] w-[460px] items-end bg-white rounded-md 
                        max-[1260px]:mt-[48px]
                        max-[490px]:w-11/12
                    "
          >
            <Formulario />
          </div>
        </div>
      </div>
    </div>
  );
}
