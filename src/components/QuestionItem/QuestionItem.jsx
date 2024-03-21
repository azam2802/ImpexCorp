import React, { useState } from "react"
import s from "@styles/components/QuestionItem.module.scss"

export const QuestionItem = () => {
  const [show, setShow] = useState(false)
  return (
    <li className={s.questions_item}>
      <div onClick={() => setShow(!show)}>
        <h1 className={s.questions_item_title}>Lorem ipsum dolor sit amet.</h1>
        <span className={s.questions_plus}>
          <span className={`${show === false ? s.plus_h : s.hide_h}`}></span>
          <span className={s.plus_g}></span>
        </span>
      </div>
      <hr />
      <div className={`${show === false ? s.questions_text_box : s.show_box}`}>
        <p className={`${show === false ? s.questions_text : s.show}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          accusantium recusandae officiis, unde doloribus ducimus ipsa nobis
          veniam alias odio laborum repellat dolor nam laboriosam accusamus
          eveniet nulla! Impedit, earum?
        </p>
      </div>
    </li>
  )
}
