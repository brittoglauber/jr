import background from "../assets/photo33.webp";
import background2 from "../assets/photo33-2.webp";
import { Button } from "./button";
import { InformationCard } from "./information-card";

export function Secao2() {
  const icon1 = "/src/assets/Capa_111.svg";
  const icon2 = "/src/assets/Layer_11.svg";
  const icon3 = "/src/assets/Frame1.svg";
  const icon4 = "/src/assets/Line.svg";

  return (
    <div className="flex flex-col items-center mb-24" id="work">
      <img src={background} className="w-full h-auto max-[520px]:hidden" />

      <img src={background2} className="w-full h-auto min-[521px]:hidden" />

      <div
        className="
                    flex justify-between mt-[-100px] h-[600px] w-full bg-white  max-w-screen-2xl
                    max-[1260px]:flex-col     
                    max-[1260px]:w-11/12
                    max-[1260px]:h-[960px]         
                    max-[620px]:h-[1540px]         
                    max-[1260px]:justify-center         
                    max-[1260px]:items-center        
                    max-[521px]:mt-[-80px]
                "
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div
          className="
                        pl-[100px] pt-[100px] max-w-[680px]
                        max-[1260px]:pl-0
                        max-[1260px]:pt-0
                        max-[1260px]:ml-4
                        max-[430px]:ml-1
                        max-[521px]:pl-4
                    "
        >
          <span
            className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8] "
            style={{
              borderLeft: "4px solid #E6293F",
              width: "fit-content",
            }}
          >
            Trabalhe Conosco
          </span>
          <div
            className="
              text-4xl font-bold mt-3
              max-[430px]:text-[24px]  
              max-[430px]:leading-tight	  
            "
          >
            Se torne um motorista na JR Express
          </div>
          <div
            className="mt-3 mb-5 text-base text-[#666C89]"
            style={{
              fontFamily: "Krub, sans-serif",
            }}
          >
            Veja a lista dos nossos benefícios oferecidos para os nossos
            motoristas.
          </div>

          <div
            className="mt-3 mb-5 text-base text-[#666C89]"
            style={{
              fontFamily: "Krub, sans-serif",
            }}
          >
            Caso você tenha CNH categoria E e experiência comprovada em
            carteira, envie o seu currículo e participe do processo de
            recrutamento e seleção!
          </div>

          <Button
            text="Enviar Currículo"
            link="https://api.whatsapp.com/send?phone=77988430040&text=Olá,%20estou%20interessado%20na%20vaga%20para%20motorista%20divulgada%20no%20site%20da%20empresa "
          />
        </div>

        <div
          className="
            pr-[100px] pt-[100px] mb-10 flex flex-col gap-6
            max-[1260px]:pr-0
            max-[1260px]:pt-0
            max-[430px]:mt-8
          "
        >
          <div
            className="
              flex w-[636px] h-[193px] gap-6
              max-[1260px]:hidden   
            "
          >
            <InformationCard
              title="Salário da Categoria"
              description="Oferecemos salários competitivos dentro da categoria, reconhecendo o valor e a do trabalho dos nossos motoristas."
              imagePath={icon1}
              alt="Salario da Categoria"
            />
            <InformationCard
              title="Benefícios Sociais"
              description="Nossos motoristas possuem acesso a benefícios como plano de saúde, seguro de vida e assistência odontológica."
              imagePath={icon2}
              alt="Benefícios Sociais"
            />
          </div>

          <div
            className="
                        grid grid-cols-2 h-[210px] ml-8 w-full mt-10
                        min-[1260px]:hidden   
                        max-[620px]:hidden   
                        max-[430px]:ml-4
                    "
          >
            <InformationCard
              title="Salário da Categoria"
              description="Oferecemos salários competitivos dentro da categoria, reconhecendo o valor e a do trabalho dos nossos motoristas."
              imagePath={icon1}
              alt="Salario da Categoria"
            />
            <InformationCard
              title="Benefícios Sociais"
              description="Nossos motoristas possuem acesso a benefícios como plano de saúde, seguro de vida e assistência odontológica."
              imagePath={icon2}
              alt="Benefícios Sociais"
            />
          </div>

          <div
            className="
                        flex flex-col item-center justify-center h-[430px] ml-8 mt-10
                        min-[620px]:hidden   
                        max-[430px]:ml-4
                    "
          >
            <InformationCard
              title="Salário da Categoria"
              description="Oferecemos salários competitivos dentro da categoria, reconhecendo o valor e a do trabalho dos nossos motoristas."
              imagePath={icon1}
              alt="Salario da Categoria"
            />
            <InformationCard
              title="Benefícios Sociais"
              description="Nossos motoristas possuem acesso a benefícios como plano de saúde, seguro de vida e assistência odontológica."
              imagePath={icon2}
              alt="Benefícios Sociais"
            />
          </div>

          <div
            className="
              flex w-[636px] h-[193px] gap-6
              max-[1260px]:hidden 
            "
          >
            <InformationCard
              title="Prêmios de Segurança"
              description="Reconhecemos e premiamos financeiramente práticas seguras de condução, garantindo sua segurança e a de todos nas estradas."
              imagePath={icon3}
              alt="Prêmios de Segurança"
            />
            <InformationCard
              title="Prêmios de Produtividade"
              description="Incentivamos a produtividade com prêmios financeiros que reconhecem a eficiência e dedicação dos nossos motoristas."
              imagePath={icon4}
              alt="Prêmios de Produtividade"
            />
          </div>

          <div
            className="
              grid grid-cols-2 h-[210px] ml-8 w-full mt-10
              min-[1260px]:hidden   
              max-[620px]:hidden   
              max-[430px]:ml-4
            "
          >
            <InformationCard
              title="Prêmios de Segurança"
              description="Reconhecemos e premiamos financeiramente práticas seguras de condução, garantindo sua segurança e a de todos nas estradas."
              imagePath={icon3}
              alt="Prêmios de Segurança"
            />
            <InformationCard
              title="Prêmios de Produtividade"
              description="Incentivamos a produtividade com prêmios financeiros que reconhecem a eficiência e dedicação dos nossos motoristas."
              imagePath={icon4}
              alt="Prêmios de Produtividade"
            />
          </div>

          <div
            className="
            flex flex-col item-center justify-center h-[430px] ml-8 mt-10
            min-[620px]:hidden   
            max-[430px]:ml-4
                    "
          >
            <InformationCard
              title="Prêmios de Segurança"
              description="Reconhecemos e premiamos financeiramente práticas seguras de condução, garantindo sua segurança e a de todos nas estradas."
              imagePath={icon3}
              alt="Prêmios de Segurança"
            />
            <InformationCard
              title="Prêmios de Produtividade"
              description="Incentivamos a produtividade com prêmios financeiros que reconhecem a eficiência e dedicação dos nossos motoristas."
              imagePath={icon4}
              alt="Prêmios de Produtividade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
