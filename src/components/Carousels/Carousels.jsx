import React from "react"
import "swiper/css"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules"

import icLeft from "@images/ic-left.png"
import icRight from "@images/ic-right.png"

import slide1 from "@images/frame1.png"
import slide2 from "@images/frame2.png"
import slide3 from "@images/frame3.png"
// import s from '@styles/components/Carousels.module.scss'
import "@styles/components/Carousels.css"

const Carousels = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" />
        </SwiperSlide>
        <div className="swiper-button-prev">
          <img src={icLeft} alt="Prev" />
        </div>
        <div className="swiper-button-next">
          <img src={icRight} alt="Next" />
        </div>
      </Swiper>
    </div>
  )
}

export default Carousels
