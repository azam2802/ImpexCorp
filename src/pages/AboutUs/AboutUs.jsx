import React from "react"
import s from "@styles/pages/AboutUs/AboutUs.module.scss"
import { useTranslation } from "react-i18next"
import carImg1 from "@images/AboutUsTopImg.webp"
import carImg2 from "@images/Group67.png"
export const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <main>
      <h1 className={s["AboutCompanyTitle"]}>
        {t("AboutUs.AboutCompanyTitle")}
      </h1>
      <h1 className={s["AboutUsTitle"]}>{t("AboutUs.AboutUsTitle")}</h1>
      <p className={s["AboutUsText"]}>
        <b>{t("AboutUs.AboutUsText.bold")}</b>
        {t("AboutUs.AboutUsText.thin")}
      </p>
      <div className={s["car-convience"]}>
        <div className={s["car-img"]}>
          <img src={carImg1} alt="carImg" />
        </div>
        <ul className={s["convience-list"]}>
          <li>{t("AboutUs.AboutUsTechnichUl.quality")}</li>
          <li>{t("AboutUs.AboutUsTechnichUl.workersExp")}</li>
          <li>{t("AboutUs.AboutUsTechnichUl.insurance")}</li>
          <li>{t("AboutUs.AboutUsTechnichUl.logistic")}</li>
        </ul>
      </div>

      <ul className={s["car-infoList"]}>
        <li>
          <b>{t("AboutUs.key.bold")}</b> - {t("AboutUs.key.thin")}
        </li>
        <li>
          <b className={s["receiveTitle"]}>{t("AboutUs.receive.title")}</b>
          <b>{t("AboutUs.receive.bold")}</b>- {t("AboutUs.receive.thin")}
        </li>
        <li>
          <b>{t("AboutUs.choice.bold")}</b> - {t("AboutUs.choice.thin")}
        </li>
        <li>{t("AboutUs.choice.bottom")}</li>
      </ul>

      <h1 className={s["AboutCompanyTitle"]}>
        {t("AboutUs.AboutUsBottom.title")}
      </h1>

      <div className={s["car-convience-bottom"]}>
        <ul className={s["convience-list"]}>
          <li>{t("AboutUs.AboutUsBottom.ul.li1")}</li>
          <li>{t("AboutUs.AboutUsBottom.ul.li2")}</li>
          <li>{t("AboutUs.AboutUsBottom.ul.li3")}</li>
          <li>{t("AboutUs.AboutUsBottom.ul.li4")}</li>
          <li>{t("AboutUs.AboutUsBottom.ul.li5")}</li>
        </ul>
        <div className={s["car-img"]}>
          <img src={carImg2} alt="" />
        </div>
      </div>

      <h1 className={s["bottomTitle"]}>
        {t("AboutUs.AboutUsBottom.bottomTitle")}
      </h1>
    </main>
  )
}

export default AboutUs
