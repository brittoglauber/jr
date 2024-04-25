import background from "../assets/imagem-sobre.png";
import background2 from "../assets/image-secao.webp";
import icon1 from "../assets/atendimento-icon.svg";
import icon2 from "../assets/rastreamento-icon.svg";
import icon3 from "../assets/relogio-icon.svg";

export function Secao1() {
  return (
    <div className="flex items-center justify-center w-full mb-20" id="aboutUs">
      {/* DESKTOP */}
      <div className="max-[1280px]:hidden">
        <div className="flex items-center justify-between px-[20px] max-w-screen-2xl">
          <div className="w-[55%] ">
            <img src={background} className="w-full h-auto" />
          </div>

          <div className="pl-6 w-[45%]">
            <span
              className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8]"
              style={{
                borderLeft: "4px solid #E6293F",
              }}
            >
              Sobre a JR Express
            </span>

            <div className="text-4xl font-bold mt-4">
              Atuamos no ramo de transporte logística ha mais de 40 anos!
            </div>

            <div
              className="text-base text-[#666C89] mt-5 font-medium"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Com experiência sólida, oferecemos soluções inteligentes e
              econômicas para clientes de médio a grande porte.
            </div>

            <div
              className="text-base text-[#666C89] mt-3 font-medium"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Para cada problema, uma solução. Contamos com nossa frota própria
              de cavalos mecânicos e diversos implementos, prontos para atuar em
              diferentes nichos de mercado.
            </div>

            <div
              className="text-base text-[#666C89] mt-3 font-medium"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Entre em contato e faça um orçamento!
            </div>

            <div className="flex items-center mt-10 animate-fade-up">
              <img src={icon1} width={63} height={63} alt="" />
              <div className="flex flex-col text-xl ml-3 ">
                Atendimento 24/7
              </div>
            </div>

            <div className="flex items-center mt-5 animate-fade-up">
              <img src={icon2} width={63} height={63} alt="" />
              <div className="flex flex-col text-xl ml-3">
                Entregas Rastreadas
              </div>
            </div>

            <div className="flex items-center mt-5 animate-fade-up">
              <img src={icon3} width={63} height={63} alt="" />
              <div className="flex flex-col text-xl ml-3">Fretes no Prazo</div>
            </div>
          </div>
        </div>
      </div>

      {/* TABLET */}

      <div
        className="
          min-[1281px]:hidden 
          max-[780px]:hidden"
      >
        <div className="w-full flex flex-col items-center justify-center px-[20px]">
          <div className="w-full ">
            <img src={background} className="w-full h-auto" />
          </div>

          <div className="w-full mt-10">
            <span
              className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8]"
              style={{
                borderLeft: "4px solid #E6293F",
              }}
            >
              Sobre a JR Express
            </span>

            <div className="text-4xl font-bold mt-4">
              Atuamos no ramo de transporte logística ha mais de 40 anos!
            </div>

            <div
              className="text-base text-[#666C89] mt-5 font-medium"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Com experiência sólida, oferecemos soluções inteligentes e
              econômicas para clientes de médio a grande porte.
            </div>

            <div
              className="text-base text-[#666C89] mt-3 font-medium"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Para cada problema, uma solução. Contamos com nossa frota própria
              de cavalos mecânicos e diversos implementos, prontos para atuar em
              diferentes nichos de mercado.
            </div>

            <div
              className="text-base text-[#666C89] mt-3 font-medium"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Entre em contato e faça um orçamento!
            </div>

            <div className="flex items-center mt-10 animate-fade-up">
              <img src={icon1} width={63} height={63} alt="" />
              <div className="flex flex-col text-xl ml-3 ">
                Atendimento 24/7
              </div>
            </div>

            <div className="flex items-center mt-5 animate-fade-up">
              <img src={icon2} width={63} height={63} alt="" />
              <div className="flex flex-col text-xl ml-3">
                Entregas Rastreadas
              </div>
            </div>

            <div className="flex items-center mt-5 animate-fade-up">
              <img src={icon3} width={63} height={63} alt="" />
              <div className="flex flex-col text-xl ml-3">Fretes no Prazo</div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="min-[781px]:hidden">
        <div className="flex flex-col items-center justify-between px-[20px]">
          <div className="w-full">
            <img src={background2} className="w-full h-auto" />
            <div
              className="w-full rounded-b-md h-[90px] bg-gradient-to-r from-blue-950 to-blue-900  flex justify-center items-center text-xl  text-white text-center mt-[-2px]"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              <div className="w-[240px]">
                Transportando cargas em todo o Brasil
              </div>
            </div>
          </div>

          <div className="mt-12 w-full pl-0">
            <span
              className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8]"
              style={{
                borderLeft: "4px solid #E6293F",
              }}
            >
              Sobre a JR Express
            </span>

            <div
              className="
                text-4xl font-bold mt-4
                max-[430px]:text-[24px]
                max-[430px]:leading-tight	
              "
            >
              Atuamos no ramo de transporte logística ha mais de 40 anos!
            </div>

            <div
              className="text-base text-[#666C89] mt-5 font-medium"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Com experiência sólida, oferecemos soluções inteligentes e
              econômicas para clientes de médio a grande porte.
            </div>

            <div
              className="text-base text-[#666C89] mt-3 font-medium"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Para cada problema, uma solução. Contamos com nossa frota própria
              de cavalos mecânicos e diversos implementos, prontos para atuar em
              diferentes nichos de mercado.
            </div>

            <div
              className="text-base text-[#666C89] mt-3 font-medium"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Entre em contato e faça um orçamento!
            </div>

            <div className="flex items-center mt-10 animate-fade-up">
              <img src={icon1} width={63} height={63} alt="" />
              <div className="flex flex-col text-xl ml-3 ">
                Atendimento 24/7
              </div>
            </div>

            <div className="flex items-center mt-5 animate-fade-up">
              <img src={icon2} width={63} height={63} alt="" />
              <div className="flex flex-col text-xl ml-3">
                Entregas Rastreadas
              </div>
            </div>

            <div className="flex items-center mt-5 animate-fade-up">
              <img src={icon3} width={63} height={63} alt="" />
              <div className="flex flex-col text-xl ml-3">Fretes no Prazo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
