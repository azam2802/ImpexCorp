import React from "react"
import ImageCar from "@images/image 44.png"
import s from "@styles/pages/Home/FirstBlock.module.scss"
import Button from "@ui/Button/Button"
import { useTranslation } from "react-i18next"

const FirstBlock = () => {
  const { t } = useTranslation()
  return (
    <div className={s["container"]}>
      <div className={s["block"]}>
        <div className={s["block-title"]}>
          <p className={s["title"]}>
            <span>IMPEXCORP</span> {t("HomePage.firstBlock.title")}
          </p>

          <Button title={t("uiButton.title")} />
        </div>

        <img src={ImageCar} alt="imageCar" />
      </div>
    </div>
  )
}

export default FirstBlock
