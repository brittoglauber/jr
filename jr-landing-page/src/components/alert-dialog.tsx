import { useState } from "react";
import image from "../assets/dialog-image.png";
import whatsApp from "../assets/whatsapp-icon.svg";
import { X } from "lucide-react";

export default function AlertDialogComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="
                flex items-center justify-center w-[214px]
                h-[60px] text-white rounded-md font-bold
               
                transition ease-in-out delay-150  hover:scale-105 duration-300
            "
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "Krub, sans-serif",
          background:
            "linear-gradient(94deg, #22325D -1.21%, #22325D 58.66%, #E6293F 116.84%)",
        }}
      >
        Entrar em contato
      </button>
      {showModal && (
        <>
          {/* DESKTOP AND TRABLET DEVICES */}
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 max-[960px]:hidden">
            <div className="flex bg-white rounded-lg shadow-lg h-[485px]">
              <div>
                <img className="rounded-lg" src={image} />
              </div>
              <div className="flex flex-col items-center px-5">
                <div className="flex w-full mt-5  items-end justify-end">
                  <button onClick={handleCloseModal}>
                    <X
                      style={{
                        background: "#E5E5E5",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </button>
                </div>
                <p className="text-2xl font-semibold pt-5">
                  Opções para contato
                </p>
                <p className="text-2xl font-semibold pt-8">WhatsApp</p>
                <p className="text-xl font-semibold pt-2">(77) 9.9968-1306</p>
                <div className="flex mt-4 py-4 px-8 rounded-md items-center justify-center text-white bg-[#25D366]">
                  <img src={whatsApp} alt="" />
                  <button className="ml-1 font-bold text-sm">
                    Cotação por WhatsApp
                  </button>
                </div>
                <p className="text-2xl font-semibold mt-8">E-mails</p>
                <p className="text-lg font-normal mt-4">
                  comercial@jrexpresstransporte.com.br
                </p>
                <p className="text-lg font-normal mt-4">
                  vanderlitojunior@jrexpresstransporte.com.br
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE DEVICES */}
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 min-[961px]:hidden">
            <div className="flex bg-white rounded-lg shadow-lg h-[485px]">
              <div className="flex flex-col items-center px-5">
                <div className="flex w-full mt-5  items-end justify-end">
                  <button onClick={handleCloseModal}>
                    <X
                      style={{
                        background: "#E5E5E5",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </button>
                </div>
                <p className="text-2xl font-semibold pt-5">
                  Opções para contato
                </p>
                <p className="text-2xl font-semibold pt-8">WhatsApp</p>
                <p className="text-xl font-semibold pt-2">(77) 9.9968-1306</p>
                <div className="flex mt-4 py-4 px-8 rounded-md items-center justify-center text-white bg-[#25D366]">
                  <img src={whatsApp} alt="" />
                  <a
                    className="ml-1 font-bold text-sm"
                    href="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20empresa%20e%20seus%20serviços"
                    target="_blank"
                  >
                    Cotação por WhatsApp
                  </a>
                </div>
                <p className="text-2xl font-semibold mt-8">E-mails</p>
                <p className="text-lg font-normal mt-4">
                  comercial@jrexpresstransporte.com.br
                </p>
                <p className="text-lg font-normal mt-4">
                  vanderlitojunior@jrexpresstransporte.com.br
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
