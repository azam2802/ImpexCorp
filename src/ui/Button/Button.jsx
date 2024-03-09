import React from "react"
import PropTypes from "prop-types"
import s from "@styles/ui/Button.module.scss"

const Button = ({ title }) => {
  return (
    <div>
      <button className={s["button"]}>{title}</button>
    </div>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Button
