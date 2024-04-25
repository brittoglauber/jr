import background from "../assets/photo33.webp";
import background2 from "../assets/photo33-2.webp";
import { Button } from "./button";
import { InformationCard } from "./information-card";

import icon1 from "../assets/Capa_111.svg";
import icon2 from "../assets/Layer_11.svg";
import icon3 from "../assets/Frame1.svg";
import icon4 from "../assets/Line.svg";

export function Secao2() {
  return (
    <div className="flex flex-col items-center mb-[72px]" id="work">
      <img src={background} className="w-full h-auto max-[520px]:hidden" />

      <img src={background2} className="w-full h-auto min-[521px]:hidden" />

      {/* DESKTOP */}
      <div className="max-[1260px]:hidden">
        <div
          className="flex justify-between mt-[-100px] h-[600px] w-full bg-white  max-w-screen-2xl gap-5"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="pl-[100px] pt-[100px] max-w-[680px]">
            <span
              className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8] mr-5"
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

          <div className="pr-[100px] pt-[100px] mb-10 flex flex-col gap-6">
            <div className="flex w-[636px] h-[193px] gap-6">
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

            <div className="flex w-[636px] h-[193px] gap-6">
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

      {/* TABLET */}
      <div className="min-[1261px]:hidden max-[780px]:hidden">
        <div
          className="flex flex-col items-center  justify-center  w-full bg-white"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="w-[100%] mt-10 px-5">
            <span
              className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8] "
              style={{
                borderLeft: "4px solid #E6293F",
                width: "fit-content",
              }}
            >
              Trabalhe Conosco
            </span>
            <div className="text-4xl font-bold mt-3">
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

          <div className="w-[100%] mb-10 flex flex-col px-5 ">
            <div className="grid grid-cols-2 h-[210px] gap-5 w-full mt-10 ">
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

            <div className="grid grid-cols-2 h-[210px] gap-5 w-full mt-10">
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

      {/* MOBILE */}
      <div className="w-full min-[781px]:hidden px-5">
        <div
          className="
            flex flex-col items-center mt-[-100px] w-full bg-white pt-[30px] px-5           
            max-[521px]:mt-[-80px]
          "
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="pl-0 pt-0 max-w-[680px]">
            <span
              className="text-sm px-[9px] py-[3px] bg-[#E8E8E8] "
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

          <div className="flex flex-col gap-6 my-8">
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
