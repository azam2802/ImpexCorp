import React from "react"
import s from "@styles/pages/AboutUs/AboutUs.module.scss"
import { useTranslation } from "react-i18next"
import heroImg from "@images/aboutUsImg.png"
import img1 from "@images/aboutUs01.png"
import img2 from "@images/aboutUs02.png"
import img3 from "@images/aboutUs03.png"
import img4 from "@images/aboutUs04.png"
import img5 from "@images/aboutUs05.png"
import img6 from "@images/aboutUs06.png"
import img7 from "@images/aboutUs07.png"
import img8 from "@images/aboutUs08.png"
import img9 from "@images/aboutUs09.png"
import AboutCard from "@components/AboutCard/AboutCard"
export const AboutUs = () => {
  const { t } = useTranslation()
  const arr = [undefined, undefined, undefined]
  const aboutCardImg = [img3, img4, img5]
  const aboutCardBottomImg = [img6, img7, img8]
  return (
    <main className={s.about_main}>
      <div className={s.about_hero}>
        <img src={heroImg} alt="" />
      </div>

      <div className={s.about_service}>
        <div className={s.service_left}>{t(`AboutUs.service_left`)}</div>
        <div className={s.service_right}>
          <img src={img1} alt="img1" />
        </div>
      </div>

      <div className={s.double_line}></div>

      <div className={s.about_specialize}>
        <div className={s.specialize_left}>
          <img src={img2} alt="img2" />
          <div>{t(`AboutUs.specialize_right.${0}`)}</div>
        </div>
        <div className={s.specialize_right}>
          {arr.map((_, i) => (
            <div key={i}>{t(`AboutUs.specialize_right.${i}`)}</div>
          ))}
        </div>
      </div>

      <div className={s.double_line_center}></div>

      <div className={s.about_cards}>
        <h1>{t("AboutUs.aboutCard.title")}</h1>
        <ul>
          {aboutCardImg.map((el, i) => (
            <AboutCard
              key={i}
              imgsrc={el}
              text={t(`AboutUs.aboutCard.texts.${i}`)}
            />
          ))}
        </ul>
      </div>

      <div className={s.about_cards_bottom}>
        <h1>{t("AboutUs.aboutCardBottom.title")}</h1>
        <ul id="Services">
          {aboutCardBottomImg.map((el, i) => (
            <AboutCard
              key={i}
              imgsrc={el}
              text={t(`AboutUs.aboutCardBottom.texts.${i}`)}
            />
          ))}
        </ul>
      </div>
      <div className={s.about_contract}>
        <div>
          {t(`AboutUs.AboutUsBottom.info.text1`)} “{" "}
          <span>{t(`AboutUs.AboutUsBottom.info.span`)}</span> “ -
          {t(`AboutUs.AboutUsBottom.info.text2`)}“{" "}
          <span>{t(`AboutUs.AboutUsBottom.info.span`)}</span> “
        </div>

        <h3>{t(`AboutUs.AboutUsBottom.title`)}</h3>
        <ul>
          <li>
            1. <span>{t(`AboutUs.AboutUsBottom.receive.span`)}</span> -
            {t(`AboutUs.AboutUsBottom.receive.text`)}
          </li>
          <li>
            2. <span>{t(`AboutUs.AboutUsBottom.choice.span`)}</span> -
            {t(`AboutUs.AboutUsBottom.choice.text`)}
          </li>
          <li>
            3. {t(`AboutUs.AboutUsBottom.li1.text`)} “{" "}
            <span>{t(`AboutUs.AboutUsBottom.li1.span`)}</span> “ -
            {t(`AboutUs.AboutUsBottom.li1.text2`)}“{" "}
          </li>
        </ul>
      </div>

      <div className={s.bottom_title}>
        {t(`AboutUs.AboutUsBottom.bottomTitle`)}
      </div>

      <div className={s.bottom_img}>
        <img src={img9} alt="img9" />
      </div>
    </main>
  )
}

export default AboutUs
