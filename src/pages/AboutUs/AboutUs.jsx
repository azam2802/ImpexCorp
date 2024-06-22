import React from "react"
import s from "@styles/pages/AboutUs/AboutUs.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"
import Slide1 from "@images/scale_1200 1.png"
import Slide2 from "@images/scale_1200 2.jpg"
import Slide3 from "@images/scale_1200 1.png"
import { motion } from "framer-motion"
import { Pagination } from "swiper/modules"
import img2 from "@images/image44.png"
import img3 from "@images/Rectangle124.png"
import img4 from "@images/Rectangle125.png"
import img5 from "@images/Frame985.png"
import { useTranslation } from "react-i18next"
export const AboutUs = () => {
  const { t } = useTranslation()

  const aboutCardImg = [Slide1, Slide2, Slide3]

  const AnimLeft = {
    hidden: {
      x: -150,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.2 },
    }),
  }

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={s.hero}>
        <div className={s.hero_box}>
          <motion.h1 custom={1} variants={AnimLeft}>
            {t("AboutUs.main_title")}
          </motion.h1>
          <a
            href="https://api.whatsapp.com/send?phone=996500677633"
            rel="noreferrer"
            target="_blank">
            <motion.button custom={1.5} variants={AnimLeft}>
              {t("AboutUs.buttonText")}
            </motion.button>
          </a>
        </div>
      </motion.div>
      <main className={s.about_main}>
        <div className={s.about_cards}>
          <div className={s.question}> {t("AboutUs.title")}</div>
          <div className={s.cards_list}>
            <div className={s.card_item}>
              <img src={img5} alt={img5} />
              <article>
                <span>{t("AboutUs.card1.bold")}</span> {t("AboutUs.card1.text")}
              </article>
            </div>
            <div className={s.card_item}>
              <img src={img4} alt={img4} />
              <article>
                <span>{t("AboutUs.card2.bold")}</span> {t("AboutUs.card2.text")}
              </article>
            </div>
            <div className={s.card_item}>
              <img src={img3} alt={img3} />
              <article>
                <span>{t("AboutUs.card3.bold")}</span> {t("AboutUs.card3.text")}
              </article>
            </div>
          </div>
        </div>
      </main>
      <div className={s.about_back}>
        <div className={s.info}>
          <article className={s.text}>
            {t("AboutUs.back.text")}
            <br />
            {t("AboutUs.back.text2")}
            <span>{t("AboutUs.back.span")}</span>{" "}
          </article>
          <article className={s.text_mobile}>
            {t("AboutUs.back.textMobile")} <span>{t("AboutUs.back.span")}</span>
            {" - "}
            {t("AboutUs.back.textMobile2")}
          </article>
          <div className={s.img_box}>
            <img src={img2} alt={img2} />
          </div>
        </div>
      </div>

      <main className={s.about_main}>
        <div className={s.swiper_container}>
          <Swiper
            speed={1000}
            loop={false}
            effect={"coverflow"}
            grabCursor={true}
            initialSlide={1}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
            }}
            modules={[EffectCoverflow, Pagination]}
            className={s.mySwiper}>
            {aboutCardImg.map((item, i) => (
              <SwiperSlide style={{ width: "35vw", height: "25vw" }} key={i}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                  src={item}
                  alt={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <article className={s.bottom_text}>{t("AboutUs.bottomTitle")}</article>
      </main>
    </>
  )
}

export default AboutUs
