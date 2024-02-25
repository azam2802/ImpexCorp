import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import s from "@styles/components/QuestionItem.module.scss"
export const QuestionItem = () => {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  return (
    <li className={s["questions-item"]}>
      <div onClick={() => setShow(!show)}>
        <h1 className={s["questions-item-title"]}>
          {t("Lorem ipsum dolor sit amet.")}
        </h1>
        <span className={s["questions-plus"]}>
          {/* <img src={plus} alt="plus" width={50} /> */}
          <span
            className={`${show === false ? s["plus-h"] : s["hide-h"]}`}></span>
          <span className={s["plus-g"]}></span>
        </span>
      </div>
      <hr />
      <div
        className={`${show === false ? s["questions-text-box"] : s["show-box"]}`}>
        <p className={`${show === false ? s["questions-text"] : s["show"]}`}>
          {t(
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At accusantium recusandae officiis, unde doloribus ducimus ipsa nobis veniam alias odio laborum repellat dolor nam laboriosam accusamus eveniet nulla! Impedit, earum?.",
          )}
        </p>
      </div>
    </li>
  )
}
