import React from "react";
import "./testimonial.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials.js";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-wrapper">
        <div className="testimonial-sides">
          <span>Top Rated</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>

        <img src={Hero} alt="image" />

        <div className="testimonial-sides">
          <span>100k</span>
          <span>Happy Customers with us.</span>
        </div>
      </div>

      <div className="reviews">Reviews</div>

      <div className="caraousel">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="testimonial-caraousel"
        >
          {TestimonialsData.map((testimonial, idx) => {
            return (
              <SwiperSlide>
                <div className="testimonial">
                  <img src={testimonial.image} alt="testimonial-img" />
                  <span>{testimonial.comment}</span>
                  <hr />
                  <span>{testimonial.name}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
