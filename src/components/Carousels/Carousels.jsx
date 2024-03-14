import slide1 from "@images/frame1.png"
import slide2 from "@images/frame2.png"
import slide3 from "@images/frame3.png"
import "@styles/components/Carousels.scss"
import React from "react"
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
          <AiFillLeftSquare color="grey" />
        </div>
        <div className="swiper-button-next">
          <AiFillRightSquare color="grey" />
        </div>
      </Swiper>
    </div>
  )
}

export default Carousels
