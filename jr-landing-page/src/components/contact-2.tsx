import background from "../assets/Photo5.webp";
import icon from "../assets/phone-icon.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Contact2() {
  return (
    <div className="w-full flex justify-center items-center" id="contact">
      <div
        className="
                flex items-center justify-between w-11/12 max-w-screen-2xl mb-[200px]
                max-[1260px]:flex-col
                max-[1260px]:justify-center
                max-[430px]:mb-[100px]
                
            "
      >
        <div
          className="
                        w-2/5
                        max-[1260px]:w-full
                    "
        >
          <span
            className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8] "
            style={{
              borderLeft: "4px solid #E6293F",
            }}
          >
            Nossos Diferenciais
          </span>
          <div
            className="
              text-4xl text-[#1C1F35] font-semibold mt-4
              max-[430px]:text-[24px]  
              max-[430px]:leading-tight	
            "
          >
            Por que nos escolher
          </div>
          <Accordion
            type="single"
            collapsible
            className="
              w-full text-xl
              max-[430px]:text-lg
            "
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-[#1C1F35] mt-1">
                Motoristas treinados e capacitados
              </AccordionTrigger>
              <AccordionContent
                className="text-base font-medium  text-[#666C89] mt-4"
                style={{
                  fontFamily: "Krub, sans-serif",
                }}
              >
                Nossa equipe de motoristas é composta por profissionais
                treinados e capacitados, garantindo uma condução segura,
                eficiente e de alta qualidade para atender às suas
                necessidades de transporte.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className=" text-[#1C1F35] mt-1">
                Certificações ISO
              </AccordionTrigger>
              <AccordionContent className="text-base font-medium  text-[#666C89] mt-4">
                Possuímos certificações ISO que garantem a qualidade e segurança
                dos nossos serviços, demonstrando nosso compromisso com os mais
                altos padrões do setor de transporte
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-[#1C1F35] mt-1">
                Custo
              </AccordionTrigger>
              <AccordionContent className="text-base font-medium  text-[#666C89] mt-4">
                O preço justo e competitivo de acordo aos parâmetros do mercado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className=" text-[#1C1F35] mt-1">
                Confiabilidade
              </AccordionTrigger>
              <AccordionContent className="text-base font-medium  text-[#666C89] mt-4">
                Suas cargas serão entregues no prazo e em boas condições.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className=" text-[#1C1F35] mt-1">
                Reputação
              </AccordionTrigger>
              <AccordionContent className="text-base font-medium  text-[#666C89] mt-4">
                Empresa atuando há mais de 40 anos no mercado rodoviário de
                cargas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className=" text-[#1C1F35] mt-1">
                Cobertura
              </AccordionTrigger>
              <AccordionContent className="text-base font-medium  text-[#666C89] mt-4">
                Atuamos com os nossos serviços em todo o território nacional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "760px",
            height: "560px",
          }}
          className="flex w-3/5 items-center max-[1260px]:hidden"
        >
          <div
            className="
              flex flex-col items-start px-16 ml-[-70px] justify-center w-[448px] h-[348px] bg-[#24325D] text-white
              max-[1560px]:ml-[-40px]
              max-[1480px]:ml-[0px]
            "
          >
            <div
              className="text-sm  px-[9px] py-[3px] bg-[#111C55]"
              style={{
                borderLeft: "4px solid #E6293F",
              }}
            >
              Vamos conversar
            </div>
            <div className="text-xl font-medium mt-6">
              Entre Em Contato Conosco!
            </div>
            <div className="flex text-base mt-5">
              <img src={icon} alt="Icon" className="mr-3" />
              <div
                style={{
                  fontFamily: "Krub, sans-serif",
                }}
              >
                Está com alguma dúvida? <br />
                (77) 3441-7739 <br />
                (77) 9.9968-2618
              </div>
            </div>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20empresa%20e%20seus%20serviços"
            >
              <button
                className="
                    w-[208px] h-[60px] mt-6 rounded-sm bg-gradient-to-r from-red-800 to-red-950 
                    transition ease-in-out delay-150  hover:scale-105 duration-300
                        "
              >
                Entrar em contato
              </button>
            </a>
          </div>
        </div>

        <div
          className="
                        flex flex-col items-start px-5 ml-[-70px] justify-center 
                        w-[448px] h-[348px] bg-[#24325D] text-white
                        mt-7
                        min-[1260px]:hidden
                        max-[1260px]:ml-0
                        max-[460px]:w-full
                    "
        >
          <div
            className="text-sm  px-[9px] py-[3px] bg-[#111C55]"
            style={{
              borderLeft: "4px solid #E6293F",
            }}
          >
            Vamos conversar
          </div>
          <div className="text-xl font-medium mt-6">
            Entre Em Contato Conosco!
          </div>
          <div className="flex text-base mt-5">
            <img src={icon} alt="Icon" className="mr-3" />
            <div
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Está com alguma dúvida? <br />
              (77) 3441-7739 <br />
              (77) 9.9968-2618
            </div>
          </div>
          <a href="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20estou%20interessado%20na%20vaga%20para%20motorista%20divulgada%20no%20site%20da%20empresa">
            <button
              className="
                            w-[208px] h-[60px] mt-6 rounded-sm bg-[#E6293F]
                            hover:bg-[#C9123F] transition duration-300
                        "
            >
              Entrar em contato
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
