import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
/* Importing Swipper Styles */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

import { SliderProducts } from "../../data/products.js";

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        {SliderProducts.map((slide, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="left-slide">
                <div className="name">
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
                <span>{slide.price}₹</span>
                <div>Shop now</div>
              </div>
              <img src={slide.img} alt="product-img" className="img-product" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
