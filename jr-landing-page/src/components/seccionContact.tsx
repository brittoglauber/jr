import background from "../assets/Photo.webp";
import background2 from "../assets/Photo-2.webp";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AlertDialogComponent from "./alert-dialog";

export function SeccionContact() {
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
    <div
      ref={ref}
      className={`flex justify-center items-center w-full mt-[64px] ${isVisible ? "animate-fade-up animate-duration-[2000ms]" : ""}`}
    >
      <div
        className="
                flex justify-between items-center w-full max-w-screen-2xl mb-24 gap-8 px-5 
                max-[1260px]:flex-col
                max-[1260px]:gap-0
                max-[1260px]:px-[20px]
                max-[1260px]:mb-[72px] 
            "
      >
        <div className="w-full ">
          <img src={background} className="w-full h-auto max-[720px]:hidden" />
        </div>

        <img src={background2} className="w-full h-auto min-[721px]:hidden" />

        <div className="w-full max-[1260px]:mt-10 ">
          <div>
            <span
              className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8] "
              style={{
                borderLeft: "4px solid #E6293F",
              }}
            >
              Compra e Venda
            </span>
            <div
              className="
              text-4xl font-bold mt-3
              max-[430px]:text-[24px]  
              max-[430px]:mt-2   
              max-[430px]:leading-tight	  
            "
            >
              Compra e venda de veículos pesados
            </div>
            <div
              className=" mt-3 text-[#666C89]"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Estamos constantemente renovando a nossa frota de Cavalos
              Mecânicos e Implementos Rodoviários.
            </div>
            <div
              className="mt-5 text-[#666C89]"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Se você procura adquirir um veículo semi-novo, a JR Express pode
              lhe ajudar!
            </div>
            <div
              className="mt-5 mb-8 text-[#666C89]"
              style={{
                fontFamily: "Krub, sans-serif",
              }}
            >
              Oferecemos um processo simplificado e transparente, entre em
              contato conosco hoje mesmo para explorar as opções disponíveis.
            </div>

            <AlertDialogComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
