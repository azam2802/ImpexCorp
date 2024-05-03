import React from "react"
import s from "@styles/pages/AboutUs/AboutUs.module.scss"
// import { useTranslation } from "react-i18next"
import heroImage from "@images/image56.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"

import img2 from "@images/image44.png"
import img3 from "@images/Rectangle124.png"
import img4 from "@images/Rectangle125.png"
import img5 from "@images/Frame985.png"
import { useTranslation } from "react-i18next"
export const AboutUs = () => {
  const { t } = useTranslation()

  const aboutCardImg = [
    "http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/12.jpg",
    "http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/11.jpg",
    "http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/12.jpg",
  ]

  return (
    <>
      <div className={s.hero}>
        <img className={s.hero_image} src={heroImage} alt={heroImage} />
        <div className={s.back}></div>
        <div className={s.hero_box}>
          <h1>{t("AboutUs.main_title")}</h1>
          <button>{t("AboutUs.buttonText")}</button>
        </div>
      </div>
      <main className={s.about_main}>
        <div className={s.about_cards}>
          <div className={s.question}> {t("AboutUs.title")}</div>
          <div className={s.cards_list}>
            <div className={s.card_item}>
              <img src={img3} alt={img5} />
              <div>
                <span>{t("AboutUs.card1.bold")}</span> {t("AboutUs.card1.text")}
              </div>
            </div>
            <div className={s.card_item}>
              <img src={img4} alt={img4} />
              <div>
                <span>{t("AboutUs.card2.bold")}</span> {t("AboutUs.card2.text")}
              </div>
            </div>
            <div className={s.card_item}>
              <img src={img5} alt={img5} />
              <div>
                <span>{t("AboutUs.card3.bold")}</span> {t("AboutUs.card3.text")}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={s.about_back}>
        <div className={s.info}>
          <div className={s.text}>
            {t("AboutUs.back.text")} <span>{t("AboutUs.back.span")} </span>“{" "}
            {t("AboutUs.back.text2")}
          </div>
          <div className={s.img_box}>
            <img src={img2} alt={img2} />
          </div>
        </div>
      </div>

      <main className={s.about_main}>
        <div className={s.swiper_container}>
          <Swiper
            speed={1000}
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow]}
            className="mySwiper">
            {aboutCardImg.map((item, i) => (
              <SwiperSlide
                style={{ width: "20vw", height: "20vw", overflow: "hidden" }}
                key={i}>
                <img style={{ width: "100%" }} src={item} alt={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.bottom_text}>{t("AboutUs.bottomTitle")}</div>
      </main>
    </>
  )
}

export default AboutUs
