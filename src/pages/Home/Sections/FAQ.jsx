import React from "react"
import s from "@styles/pages/Home/FAQ.module.scss"
import { useTranslation } from "react-i18next"
import { QuestionItem } from "@components/QuestionItem/QuestionItem"

export const FAQ = () => {
  const { t } = useTranslation()
  const myArr = Array.from({ length: 4 })
  return (
    <section>
      <div className={s["question-section"]}>
        <h1 className={s["question-title"]}>
          {t("HomePage.FAQBlock.titles.mainTitle")}
        </h1>
        <ul className={s["questions-lists"]}>
          {myArr.map((_, i) => (
            <QuestionItem key={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
