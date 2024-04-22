import background from "../assets/Photo.webp";
import background2 from "../assets/Photo-2.webp";
import { Button } from "./button";

export function SeccionContact() {
  return (
    <div className="flex justify-center items-center w-full mt-5 ">
      <div
        className="
                flex justify-between items-center w-full max-w-screen-2xl mb-[160px] gap-8
                max-[1260px]:flex-col
                max-[1260px]:px-[20px]
                max-[1260px]:mb-[72px] 
            "
      >
        <div>
          <img src={background} className="w-full h-auto max-[720px]:hidden" />
        </div>

        <img src={background2} className="w-full h-auto min-[431px]:hidden" />

        <div
          className="
                    
                    max-[1260px]:mt-12  
                "
        >
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
              text-4xl full font-bold mt-3
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

            <Button
              text="Entrar em contato"
              link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20compra%20e%20venda%20de%20veículos "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
