import logo from "../assets/jr-logo.svg";
import icon1 from "../assets/relogio-icon.svg";
import icon2 from "../assets/email-icon.svg";
import icon3 from "../assets/phone-icon.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div
      className="
        w-full h-32 flex justify-center items-center 
        max-[1260px]:h-[87px]
      "
      style={{
        fontFamily: "Krub, sans-serif",
      }}
    >
      <div
        className="
                    flex h-16 items-center justify-between gap-6 w-full animate-fade-up max-w-screen-2xl text-sm px-5
                    max-[1260px]:justify-center
                    max-[430px]:mt-5
                    max-[430px]:mb-5
                    "
      >
        <Link to="/">
          <img src={logo} width={220} height={47} alt="Logo jr" />
        </Link>

        <div className="flex max-[1260px]:hidden font-medium ">
          <div className="flex items-center animate-fade-up">
            <img src={icon1} width={63} height={63} alt="" />
            <div className="flex flex-col ml-4">
              <span>Horário:</span>
              <span>Seg - Dom 04:00 - 22:00</span>
            </div>
          </div>

          <div className="flex items-center ml-6 animate-fade-up">
            <img src={icon2} width={63} height={63} alt="" />
            <div className="flex flex-col ml-4">
              <span>Email:</span>
              <span>comercial@jrexpresstransporte.com.br</span>
            </div>
          </div>

          <div className="flex items-center ml-6 animate-fade-up">
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
