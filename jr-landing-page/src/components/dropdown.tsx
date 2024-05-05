import {
  Contact,
  CreditCard,
  Keyboard,
  Menu,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end w-[180px] max-[330px]:w-[170px]">
      <button
        className="
          flex items-center justify-center ml-[126px] w-16 h-12 bg-[#24325D] text-white font-bold py-2 px-4 rounded-md
          
        "
        onClick={toggleDropDown}
      >
        <Menu width={24} height={24} />
      </button>
      {isOpen && (
        <div className="w-[196px] absolute mt-[60px] shadow-md rounded-md bg-white overflow-x-auto ">
          <ul className="p-2 text-base ml-1">
            <div className="h-8 ml-1">Menu</div>
            <hr />
            <li className="flex items-center h-8 ">
              <CreditCard className="mr-2 h-4 w-4" />
              <HashLink
                to="/#services"
                className="pr-4"
                smooth
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Serviços
              </HashLink>
            </li>

            <li className="flex items-center h-8">
              <Search className="mr-2 h-4 w-4" />
              <HashLink
                to="/#aboutUs"
                className="pr-4"
                smooth
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Sobre Nós
              </HashLink>
            </li>

            <li className="flex items-center h-8">
              <Keyboard className="mr-2 h-4 w-4" />
              <HashLink
                to="/#acting"
                className="pr-4"
                smooth
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Atuação
              </HashLink>
            </li>

            <li className="flex items-center h-8">
              <Users className="mr-2 h-4 w-4" />
              <HashLink
                to="/#work"
                className="pr-4"
                smooth
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Trabalhe Conosco
              </HashLink>
            </li>

            <li className="flex items-center h-8">
              <Contact className="mr-2 h-4 w-4" />
              <HashLink
                to="/#contact"
                className="pr-4"
                smooth
                scroll={(el: any) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Contato
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
