import { Button } from "./button";
import { Card } from "./card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Photo1 from "../assets/Photo1.webp";
import Photo2 from "../assets/Photo2.webp";
import Photo3 from "../assets/Photo3.webp";
import Photo4 from "../assets/Photo4.webp";

import photo1 from "../assets/1.webp";
import photo2 from "../assets/2.webp";
import photo3 from "../assets/3.webp";
import photo4 from "../assets/4.webp";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function Carrosel() {
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
    <div ref={ref} id="services">
      {/* DESKTOP VERSION */}
      <div
        className="
          h-[408px] w-full flex items-center justify-center mt-[160px] mb-24 
          max-[1440px]:hidden
        "
      >
        <div
          className={`w-full max-w-screen-2xl flex items-center max justify-between px-5 ${isVisible ? "animate-fade-up animate-duration-[2000ms]" : ""}`}
        >
          <div className="w-[30%]">
            <span
              className="text-sm px-[9px] py-[3px] bg-[#E8E8E8]"
              style={{
                borderLeft: "4px solid #E6293F",
              }}
            >
              Nossos Serviços
            </span>
            <div
              className="
                text-4xl mt-4 font-semibold
                max-[430px]:text-[24px]
                "
            >
              Soluções logísticas <br /> seguras e confiáveis
            </div>
            <div className="text-base mt-6">
              <Button
                text="Solicitar Cotação"
                link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
              />
            </div>
          </div>

          <div className={`w-[70%] animate-fade-up `}>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="max-w-[329px]">
                <Card
                  title={"Transporte Rodoviário"}
                  subTitle={"Contratos de Logística"}
                  srcName={Photo1}
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-[329px]">
                <Card
                  title={"Máquinas Pesadas"}
                  subTitle={"Locação de Equipamentos"}
                  srcName={Photo2}
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-[329px]">
                <Card
                  title={"Armazens & Distribuição"}
                  subTitle={"Locação de Galpões"}
                  srcName={Photo3}
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-[329px]">
                <Card
                  title={"Compra e Venda de Veículos"}
                  subTitle={"Cavalos e Implementos"}
                  srcName={Photo4}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* TABLET VERSION */}
      <div
        className="
          w-full flex items-center justify-center mt-[124px] mb-24
          min-[1441px]:hidden
          max-[1120px]:hidden
        "
      >
        <div className="w-full flex items-center justify-between max-w-screen-2xl">
          <div className="w-[40%] pl-5">
            <span
              className="text-sm px-[9px] py-[3px] bg-[#E8E8E8]"
              style={{
                borderLeft: "4px solid #E6293F",
              }}
            >
              Nossos Serviços
            </span>
            <div
              className="
                text-4xl mt-4 font-semibold
                max-[430px]:text-[24px]
                "
            >
              Soluções logísticas <br /> seguras e confiáveis
            </div>
            <div className="text-base mt-6">
              <Button
                text="Solicitar Cotação"
                link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
              />
            </div>
          </div>

          <div
            className={`w-[60%] ${isVisible ? "animate-fade-up animate-duration-[2000ms]" : ""}`}
          >
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide style={{ maxWidth: "329px" }}>
                <Card
                  title={"Transporte Rodoviário"}
                  subTitle={"Contratos de Logística"}
                  srcName={Photo1}
                />
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: "329px" }}>
                <Card
                  title={"Máquinas Pesadas"}
                  subTitle={"Locação de Equipamentos"}
                  srcName={Photo2}
                />
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: "329px" }}>
                <Card
                  title={"Armazens & Distribuição"}
                  subTitle={"Locação de Galpões"}
                  srcName={Photo3}
                />
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: "329px" }}>
                <Card
                  title={"Compra e Venda de Veículos"}
                  subTitle={"Cavalos e Implementos"}
                  srcName={Photo4}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div
        className=" 
          w-full flex flex-col items-center mt-20 
          min-[1121px]:hidden
          max-[460px]:hidden
        "
      >
        <div
          className="
            w-full flex flex-col justify-center items-center mt-[75px]
            max-[345px]:mt-[170px]
          "
        >
          <span
            className="text-sm  px-[9px] py-[3px]"
            style={{
              backgroundColor: "rgba(232, 232, 232, 0.50)",
              borderLeft: "4px solid #E6293F",
            }}
          >
            Nossos Serviços
          </span>
          <div className="text-4xl mt-4 font-semibold text-center">
            Soluções logísticas seguras e confiáveis
          </div>
        </div>

        <div
          className={`w-full flex items-center justify-center mt-8 ${isVisible ? "animate-fade-up animate-duration-[2000ms]" : ""}`}
        >
          <div className="w-full pl-5">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={15}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="max-w-[329px]">
                <Card
                  title={"Transporte Rodoviário"}
                  subTitle={"Contratos de Logística"}
                  srcName={photo1}
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-[329px]">
                <Card
                  title={"Máquinas Pesadas"}
                  subTitle={"Locação de Equipamentos"}
                  srcName={photo2}
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-[329px]">
                <Card
                  title={"Armazens & Distribuição"}
                  subTitle={"Locação de Galpões"}
                  srcName={photo3}
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-[329px]">
                <Card
                  title={"Compra e Venda de Veículos"}
                  subTitle={"Cavalos e Implementos"}
                  srcName={photo4}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="text-base mt-6">
          <Button
            text="Solicitar Cotação"
            link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
          />
        </div>
      </div>

      {/* MOBILE VERSION - 2 */}
      <div
        className=" 
          w-full flex flex-col items-center mt-20
          min-[461px]:hidden 
        "
      >
        <div
          className="
            w-full flex flex-col justify-center items-center mt-[75px]
            max-[360px]:mt-[100px]
            max-[348px]:mt-[170px]
          "
        >
          <span
            className="text-sm  px-[9px] py-[3px]"
            style={{
              backgroundColor: "rgba(232, 232, 232, 0.50)",
              borderLeft: "4px solid #E6293F",
            }}
          >
            Nossos Serviços
          </span>
          <div
            className="
                text-4xl mt-4 font-semibold
                max-[430px]:text-[24px]
                max-[430px]:leading-tight	
                max-[430px]:w-[94%]
                text-center
                "
          >
            Soluções logísticas seguras e confiáveis
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-8 ">
          <div
            className={`w-[100%] pl-[20px] ${isVisible ? "animate-fade-up animate-duration-[2000ms]" : ""}`}
          >
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide style={{ width: "90%" }}>
                <Card
                  title={"Transporte Rodoviário"}
                  subTitle={"Contratos de Logística"}
                  srcName={photo1}
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "90%" }}>
                <Card
                  title={"Máquinas Pesadas"}
                  subTitle={"Locação de Equipamentos"}
                  srcName={photo2}
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "90%" }}>
                <Card
                  title={"Armazens & Distribuição"}
                  subTitle={"Locação de Galpões"}
                  srcName={photo3}
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "90%" }}>
                <Card
                  title={"Compra e Venda de Veículos"}
                  subTitle={"Cavalos e Implementos"}
                  srcName={photo4}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="text-base mt-6">
          <Button
            text="Solicitar Cotação"
            link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
          />
        </div>
      </div>
    </div>
  );
}
