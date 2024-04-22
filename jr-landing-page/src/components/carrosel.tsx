import { Button } from "./button";
import { Card } from "./card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export function Carrosel() {
  return (
    <>
      {/* DESKTOP VERSION */}
      <div
        className="
          h-[408px] w-full flex items-center justify-center mb-24 
          max-[1540px]:hidden
        "
        id="services"
      >
        <div className="flex items-center justify-between  max-w-screen-2xl">
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

          <div className="w-[70%]">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card
                  title={"Transporte Rodoviário"}
                  subTitle={"Contratos de Logística"}
                  imageName={"Photo1.webp"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title={"Máquinas Pesadas"}
                  subTitle={"Locação de Equipamentos"}
                  imageName={"Photo2.webp"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title={"Armazens & Distribuição"}
                  subTitle={"Locação de Galpões"}
                  imageName={"Photo3.webp"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title={"Compra e Venda de Veículos"}
                  subTitle={"Cavalos e Implementos"}
                  imageName={"Photo4.webp"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* TABLET VERSION */}

      <div
        className="
          w-full flex items-center justify-center mb-24
          min-[1540px]:hidden
          max-[650px]:hidden
        "
        id="services"
      >
        <div className="flex flex-col items-center mt-32 justify-between w-11/12 max-w-screen-2xl">
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
              link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação"
            />
          </div>

          <div className="w-full mt-20">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card
                  title={"Transporte Rodoviário"}
                  subTitle={"Contratos de Logística"}
                  imageName={"Photo1.webp"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title={"Máquinas Pesadas"}
                  subTitle={"Locação de Equipamentos"}
                  imageName={"Photo2.webp"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title={"Armazens & Distribuição"}
                  subTitle={"Locação de Galpões"}
                  imageName={"Photo3.webp"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title={"Compra e Venda de Veículos"}
                  subTitle={"Cavalos e Implementos"}
                  imageName={"Photo4.webp"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div
        className=" 
          w-full flex flex-col items-center mt-10 
          min-[650px]:hidden 
          max-[430px]:mt-20
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

        <div className="w-[89%] flex items-center justify-center mt-8">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card
                title={"Transporte Rodoviário"}
                subTitle={"Contratos de Logística"}
                imageName={"1.webp"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={"Máquinas Pesadas"}
                subTitle={"Locação de Equipamentos"}
                imageName={"2.webp"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={"Armazens & Distribuição"}
                subTitle={"Locação de Galpões"}
                imageName={"3.webp"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={"Compra e Venda de Veículos"}
                subTitle={"Cavalos e Implementos"}
                imageName={"4.webp"}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="text-base mt-6">
          <Button
            text="Solicitar Cotação"
            link="https://api.whatsapp.com/send?phone=77999681306&text=Olá,%20vim%20através%20do%20site%20da%20JR%20e%20gostaria%20de%20solicitar%20uma%20cotação "
          />
        </div>
      </div>
    </>
  );
}
