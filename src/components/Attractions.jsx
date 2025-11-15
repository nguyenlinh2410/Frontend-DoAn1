import { useTranslation } from "react-i18next";
import "./Attractions.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import anh from "../assets/img/anhheader.png";
import { getAllDiTich } from "../services/DiTichService";

export default function Attractions() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllDiTich();
    setPlaces(data);
  };
  return (
    <div className="attractions-section container py-4">
      <h3 className="attractions-title text-xl font-semibold mb-4">
        {t("Attractions.tittle")}
      </h3>
      <div className="attractions-list swiper-wrapper-container">
        <button className="swiper-button-prev-custom  ">{"<"}</button>
        <button className="swiper-button-next-custom ">{">"}</button>
        <Swiper
          className="mySwiper"
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {places.length > 0 ? (
            places.map((place, index) => (
              <SwiperSlide key={index}>
                <div className="place-card">
                  <img src={place.hinh_anh} alt="" />
                  <p>
                    {i18n.language === "vi"
                      ? place.tieu_de_vi
                      : place.tieu_de_en}
                  </p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="place-card">
                <img src={anh} alt="" />
                <p>Tràng An</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}
