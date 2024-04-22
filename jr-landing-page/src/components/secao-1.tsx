import background from "../assets/imagem-sobre.png";
import background2 from "../assets/image-secao.webp";
import icon1 from "../assets/atendimento-icon.svg";
import icon2 from "../assets/rastreamento-icon.svg";
import icon3 from "../assets/relogio-icon.svg";

export function Secao1() {
  return (
    <div className="flex items-center justify-center w-full mb-20" id="aboutUs">
      <div
        className="
          flex items-center justify-between px-[20px] max-w-screen-2xl
          max-[1260px]:flex-col
          max-[560px]:w-full
          max-[560px]:px-[20px]
        "
      >
        <div className="w-[55%] max-[1260px]:w-full">
          <img
            src={background}
            className="w-full h-[610px] max-[1260px]:hidden"
          />

          <img
            src={background2}
            className=" 
              min-[1260px]:hidden
              w-full h-auto"
          />

          <div
            className="
                w-full rounded-b-md h-[140px] bg-gradient-to-r from-blue-950 to-blue-900  flex justify-center items-center text-2xl text-white text-center
                min-[1260px]:hidden    
                min-[560px]:text-xl    
            "
          >
            Transportando cargas em todo o Brasil
          </div>
        </div>

        <div className="pl-6 w-[45%] max-[1260px]:mt-12 max-[1260px]:w-full max-[1260px]:pl-0">
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
            Para cada problema, uma solução. Contamos com nossa frota própria de
            cavalos mecânicos e diversos implementos, prontos para atuar em
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

          <div className="flex items-center mt-10">
            <img src={icon1} width={63} height={63} alt="" />
            <div className="flex flex-col text-xl ml-3 ">Atendimento 24/7</div>
          </div>

          <div className="flex items-center mt-5">
            <img src={icon2} width={63} height={63} alt="" />
            <div className="flex flex-col text-xl ml-3">
              Entregas Rastreadas
            </div>
          </div>

          <div className="flex items-center mt-5">
            <img src={icon3} width={63} height={63} alt="" />
            <div className="flex flex-col text-xl ml-3">Fretes no Prazo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
