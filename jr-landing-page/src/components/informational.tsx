import { Button } from "./button";
import { InformationCard } from "./information-card";

import icon1 from "../assets/minerio.png";
import icon2 from "../assets/Layer_3.svg";
import icon3 from "../assets/Frame.svg";
import icon4 from "../assets/Capa_1.svg";
import icon5 from "../assets/Layer_1.svg";
import icon6 from "../assets/Capa_11.svg";
import icon7 from "../assets/Capa_1 (1).svg";

export function Informational() {
  return (
    <div
      className="
        flex flex-col justify-center items-center w-full bg-[#F4F4F4] 
        min-[1260px]:py-20
        max-[1260px]:px-5
      "
      id="acting"
    >
      {/* DESKTOP */}
      <div className="max-[1260px]:hidden">
        <div className="flex flex-col items-center w-full max-w-screen-2xl">
          <div
            className="
            text-sm  px-[9px] py-[3px] bg-[#E8E8E8] 
          "
            style={{
              borderLeft: "4px solid #E6293F",
            }}
          >
            Áreas de Atuação
          </div>
          <span
            className="
                    text-4xl font-bold w-full  mt-4 
                    min-[430px]:text-center
                    max-[1260px]:text-2xl
                    max-[430px]:w-full
                "
          >
            Veja os materiais que nós transportamos
          </span>

          <div
            className="
                        flex justify-between mt-[55px] h-[203px] gap-[88px] w-full max-w-screen-2xl px-5
                        max-[1260px]:hidden
                        max-[1620px]:gap-[5px] 
                        max-[430px]:w-full
          
                    "
          >
            <InformationCard
              title="Minérios"
              description="Transportamos os principais minérios, sempre garantindo o abastecimento das indústrias."
              imagePath={icon1}
              alt="Minérios"
            />

            <InformationCard
              title="Grãos"
              description="Levamos grãos de forma ágil e confiável, contribuindo para a cadeia alimentar e agrícola."
              imagePath={icon2}
              alt="Grãos"
            />

            <InformationCard
              title="Fertilizantes"
              description="Nossa logística garante a entrega de fertilizantes para impulsionar a produtividade das plantações."
              imagePath={icon3}
              alt="Fertilizantes"
            />

            <InformationCard
              title="Postes"
              description="Transportamos postes com cuidado e precisão para atender às necessidades de infraestrutura."
              imagePath={icon4}
              alt="Postes"
            />
          </div>

          <div
            className="
                    flex justify-center mt-[55px] mb-[80px] h-[203px] gap-[88px] w-6/12 max-w-screen-2xl
                    max-[1620px]:gap-[5px]  
                    max-[1620px]:w-8/12
                    max-[1260px]:hidden 
                    max-[1260px]:flex-col  
                    max-[1260px]:h-[840px]  
                    max-[1260px]:w-10/12  
                    max-[1260px]:mt-[32px]  
                    max-[1260px]:gap-[32px]
                "
          >
            <InformationCard
              title="Brita e Areia"
              description="Fornecemos brita e areia para construções com pontualidade e qualidade."
              imagePath={icon5}
              alt="Brita e Areia"
            />

            <InformationCard
              title="Calcário"
              description="Levamos calcário para correção de solo, promovendo melhores condições para agricultura."
              imagePath={icon6}
              alt="Calcário"
            />

            <InformationCard
              title="Bebidas"
              description="Entregamos bebidas de forma segura e eficiente, mantendo a integridade dos produtos."
              imagePath={icon7}
              alt="Bebidas"
            />
          </div>

          <div className="max-[1260px]:hidden">
            <Button
              text="Solicitar Cotação"
              link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
            />
          </div>
        </div>
      </div>

      {/* TABLET */}
      <div
        className="
          min-[1261px]:hidden 
          max-[570px]:hidden
        "
      >
        <div className="flex flex-col items-center w-full max-w-screen-2xl">
          <div
            className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8] mt-20"
            style={{
              borderLeft: "4px solid #E6293F",
            }}
          >
            Áreas de Atuação
          </div>
          <span
            className="
                    text-4xl font-bold w-full  mt-4 
                    min-[430px]:text-center
                    max-[1260px]:text-2xl
                    max-[430px]:w-full
                "
          >
            Veja os materiais que nós transportamos
          </span>

          <div
            className="
            grid grid-cols-2  mt-6 h-[400px] gap-[32px] w-full max-w-screen-2xl"
          >
            <InformationCard
              title="Minérios"
              description="Transportamos os principais minérios, sempre garantindo o abastecimento das indústrias."
              imagePath={icon1}
              alt="Minérios"
            />

            <InformationCard
              title="Grãos"
              description="Levamos grãos de forma ágil e confiável, contribuindo para a cadeia alimentar e agrícola."
              imagePath={icon2}
              alt="Grãos"
            />

            <InformationCard
              title="Fertilizantes"
              description="Nossa logística garante a entrega de fertilizantes para impulsionar a produtividade das plantações."
              imagePath={icon3}
              alt="Fertilizantes"
            />

            <InformationCard
              title="Postes"
              description="Transportamos postes com cuidado e precisão para atender às necessidades de infraestrutura."
              imagePath={icon4}
              alt="Postes"
            />
          </div>

          <div
            className="
                    grid grid-cols-2 mt-[32px] mb-[80px] h-[420px] gap-[32px] w-full max-w-screen-2xl
                    
                "
          >
            <InformationCard
              title="Brita e Areia"
              description="Fornecemos brita e areia para construções com pontualidade e qualidade."
              imagePath={icon5}
              alt="Brita e Areia"
            />

            <InformationCard
              title="Calcário"
              description="Levamos calcário para correção de solo, promovendo melhores condições para agricultura."
              imagePath={icon6}
              alt="Calcário"
            />

            <InformationCard
              title="Bebidas"
              description="Entregamos bebidas de forma segura e eficiente, mantendo a integridade dos produtos."
              imagePath={icon7}
              alt="Bebidas"
            />
          </div>

          <div className="mb-16">
            <Button
              text="Solicitar Cotação"
              link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
            />
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="min-[571px]:hidden">
        <div className="flex flex-col items-center w-full">
          <div
            className="text-sm  px-[9px] py-[3px] bg-[#E8E8E8] max-[1260px]:mt-16"
            style={{
              borderLeft: "4px solid #E6293F",
            }}
          >
            Áreas de Atuação
          </div>
          <span className="text-2xl font-bold w-full mt-4 text-center">
            Veja os materiais que nós transportamos
          </span>

          <div className="flex flex-col  mt-6 gap-[32px]">
            <InformationCard
              title="Minérios"
              description="Transportamos os principais minérios, sempre garantindo o abastecimento das indústrias."
              imagePath={icon1}
              alt="Minérios"
            />

            <InformationCard
              title="Grãos"
              description="Levamos grãos de forma ágil e confiável, contribuindo para a cadeia alimentar e agrícola."
              imagePath={icon2}
              alt="Grãos"
            />

            <InformationCard
              title="Fertilizantes"
              description="Nossa logística garante a entrega de fertilizantes para impulsionar a produtividade das plantações."
              imagePath={icon3}
              alt="Fertilizantes"
            />

            <InformationCard
              title="Postes"
              description="Transportamos postes com cuidado e precisão para atender às necessidades de infraestrutura."
              imagePath={icon4}
              alt="Postes"
            />

            <InformationCard
              title="Brita e Areia"
              description="Fornecemos brita e areia para construções com pontualidade e qualidade."
              imagePath={icon5}
              alt="Brita e Areia"
            />

            <InformationCard
              title="Calcário"
              description="Levamos calcário para correção de solo, promovendo melhores condições para agricultura."
              imagePath={icon6}
              alt="Calcário"
            />

            <InformationCard
              title="Bebidas"
              description="Entregamos bebidas de forma segura e eficiente, mantendo a integridade dos produtos."
              imagePath={icon7}
              alt="Bebidas"
            />

            <div className="mt-[32px]">
              <Button
                text="Solicitar Cotação"
                link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
