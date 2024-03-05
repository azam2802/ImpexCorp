import React, { useState } from "react"
import s from "@styles/components/QuestionItem.module.scss"

export const QuestionItem = () => {
  const [show, setShow] = useState(false)
  return (
    <li className={s["questions-item"]}>
      <div onClick={() => setShow(!show)}>
        <h1 className={s["questions-item-title"]}>
          Lorem ipsum dolor sit amet.
        </h1>
        <span className={s["questions-plus"]}>
          <span
            className={`${show === false ? s["plus-h"] : s["hide-h"]}`}></span>
          <span
            className={`${show === false ? s["plus-g"] : s["hide-g"]}`}></span>
        </span>
      </div>
      <hr />
      <div
        className={`${show === false ? s["questions-text-box"] : s["show-box"]}`}>
        <p className={`${show === false ? s["questions-text"] : s["show"]}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          accusantium recusandae officiis, unde doloribus ducimus ipsa nobis
          veniam alias odio laborum repellat dolor nam laboriosam accusamus
          eveniet nulla! Impedit, earum?
        </p>
      </div>
    </li>
  )
}
