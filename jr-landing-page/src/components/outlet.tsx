import { IconOutlet } from "./icon-outlet";

export function Outlet() {
  const svg1 = "/src/assets/clarity_truck-solid.svg";
  const svg2 = "/src/assets/mdi_security.svg";
  const svg3 = "/src/assets/mingcute_check-2-line.svg";
  const svg4 = "/src/assets/akar-icons_check-in.svg";
  const svg5 = "/src/assets/oui_package.svg";

  return (
    <>
      <div
        className="
            flex justify-center mb-32 w-full h-64 
            max-[1260px]:hidden
        "
        style={{
          fontFamily: "Krub, sans-serif",
          background:
            "linear-gradient(94deg, #22325D -1.21%, #22325D 58.66%, #E6293F 116.84%)",
        }}
      >
        <div className="w-full flex justify-between items-center  max-w-screen-2xl   text-white">
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
          flex justify-center mb-32 w-full h-[650px] bg-[#23335E] mt-[72px]
          min-[1260px]:hidden
        "
        style={{
          fontFamily: "Krub, sans-serif",
        }}
      >
        <div className="flex flex-col justify-center items-start w-8/12 max-w-[250px] gap-10 text-white">
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
    </>
  );
}
