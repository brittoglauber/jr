import logo from "../assets/jr-logo.png";
import icon1 from "../assets/relogio-icon.svg";
import icon2 from "../assets/email-icon.svg";
import icon3 from "../assets/phone-icon.svg";

export function Header() {
  return (
    <div
      className="
        w-full h-32 flex justify-center items-center
        max-[430px]:h-[87px]
      "
      style={{
        fontFamily: "Krub, sans-serif",
      }}
    >
      <div
        className="
                    flex h-16 items-center justify-between gap-6 w-full max-w-screen-2xl text-sm 
                    max-[1260px]:justify-center
                    max-[430px]:mt-5
                    max-[430px]:mb-5
                    "
      >
        <div>
          <img src={logo} width={220} height={47} alt="Logo jr" />
        </div>

        <div className="flex max-[1260px]:hidden font-medium">
          <div className="flex items-center">
            <img src={icon1} width={63} height={63} alt="" />
            <div className="flex flex-col ml-4">
              <span>Horário:</span>
              <span>Seg - Dom 04:00 - 22:00</span>
            </div>
          </div>

          <div className="flex items-center ml-6">
            <img src={icon2} width={63} height={63} alt="" />
            <div className="flex flex-col ml-4">
              <span>Email:</span>
              <span>comercial@jrexpresstransporte.com.br</span>
            </div>
          </div>

          <div className="flex items-center ml-6">
            <img src={icon3} width={63} height={63} alt="" />
            <div className="flex flex-col ml-4">
              <span>Telefones:</span>
              <span>(77) 3441-7739 / (77) 9.9968-2618</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
