import React from "react"
import ImageCar from "@images/image 44.png"
import s from "@styles/pages/Home/FirstBlock.module.scss"
import { useTranslation } from "react-i18next"

const FirstBlock = () => {
  const { t } = useTranslation()
  return (
    <section>
      <div className={s["container"]}>
        <div className={s["block"]}>
          <div className={s["block-title"]}>
            <div className={s["title"]}>
              <p>
                <span>IMPEXCORP</span> {t("HomePage.firstBlock.title1")}
              </p>
            </div>
            <div>
              <button className={s["button"]}>
                {t("HomePage.firstBlock.buttonText")}
              </button>
            </div>
          </div>
          <div>
            <img src={ImageCar} alt="imageCar" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstBlock
