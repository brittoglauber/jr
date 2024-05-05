import { IconOutlet } from "./icon-outlet";
import svg1 from "../assets/clarity_truck-solid.svg";
import svg2 from "../assets/mdi_security.svg";
import svg3 from "../assets/mingcute_check-2-line.svg";
import svg4 from "../assets/akar-icons_check-in.svg";
import svg5 from "../assets/oui_package.svg";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function Outlet() {
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
    <div ref={ref}>
      <div
        className="
            flex justify-center  mb-24 w-full h-64 
            max-[1260px]:hidden
        "
        style={{
          fontFamily: "Krub, sans-serif",
          background:
            "linear-gradient(94deg, #22325D -1.21%, #22325D 58.66%, #E6293F 116.84%)",
        }}
      >
        <div
          className={`w-full flex justify-between items-center  max-w-screen-2xl text-white px-5 ${isVisible ? "animate-fade-up animate-duration-[2000ms] " : ""} `}
        >
          <IconOutlet
            title="Frota Própria"
            subTitle="Diversos implementos"
            srcName={svg1}
            altName="Caminhão"
          />

          <IconOutlet
            title="Certificado Sassmaq"
            subTitle="Boas Práticas"
            srcName={svg2}
            altName="Escudo de segurança"
          />

          <IconOutlet
            title="Certificação ISO 9001"
            subTitle="Empresa certificada"
            srcName={svg3}
            altName="Check"
          />

          <IconOutlet
            title="Rastreamento On-Time"
            subTitle="Frota 100% rastreada"
            srcName={svg4}
            altName="Localização"
          />

          <IconOutlet
            title="Soluções Inteligentes"
            subTitle="Para cada cliente uma solução"
            srcName={svg5}
            altName="Caixa"
          />
        </div>
      </div>

      <div
        className="
          flex justify-center items-center mb-[72px] w-full h-[650px] bg-[#23335E] mt-[72px]
          min-[1260px]:hidden
        "
        style={{
          fontFamily: "Krub, sans-serif",
        }}
      >
        <div
          className={`flex flex-col justify-center items-start  gap-10 text-white  ${isVisible ? "animate-fade-up animate-duration-[2000ms] " : ""}`}
        >
          <IconOutlet
            title="Frota Própria"
            subTitle="Diversos implementos"
            srcName={svg1}
            altName="Caminhão"
          />

          <IconOutlet
            title="Certificado Sassmaq"
            subTitle="Boas Práticas"
            srcName={svg2}
            altName="Escudo de segurança"
          />

          <IconOutlet
            title="Certificação ISO 9001"
            subTitle="Empresa certificada"
            srcName={svg3}
            altName="Check"
          />

          <IconOutlet
            title="Rastreamento On-Time"
            subTitle="Frota 100% rastreada"
            srcName={svg4}
            altName="Localização"
          />

          <IconOutlet
            title="Soluções Inteligentes"
            subTitle="Para cada cliente uma solução"
            srcName={svg5}
            altName="Caixa"
          />
        </div>
      </div>
    </div>
  );
}
