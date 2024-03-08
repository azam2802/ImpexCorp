import carImg from "@images/car.png"
import prevIcon from "@images/prev.svg"
import nextIcon from "@images/next.svg" // Подставьте правильные пути к вашим SVG-иконкам
import s from "@styles/pages/Home/GreetingBlock.module.scss"
import { motion } from "framer-motion"
import React from "react"
import { useTranslation } from "react-i18next"

const GreetingBlock = () => {
  const { t } = useTranslation()

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

  const AnimRight = {
    hidden: {
      x: 150,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.2 },
    }),
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={s["container"]}>
      <div className={s["row"]}>
        <div className={s["col-6"]}>
          <motion.div variants={AnimLeft} className={s["carImg"]}>
            <img src={carImg} alt="Car" />
          </motion.div>
        </div>
        <div className={s["col-6"]}>
          <motion.h2 custom={1} variants={AnimRight} className={s["title"]}>
            {t("HomePage.GreetingBlock.title")}
          </motion.h2>
          <motion.p custom={2} variants={AnimRight} className={s["text"]}>
            {t("HomePage.GreetingBlock.text")}
          </motion.p>
          <motion.button
            custom={3}
            variants={AnimRight}
            className={s["button"]}>
            {t("HomePage.GreetingBlock.buttonText")}
          </motion.button>
          {/* Добавляем кнопки prev и next */}
          <motion.button
            custom={4}
            variants={AnimRight}
            className={s["prevButton"]}
            onClick={() => {
              // Обработчик для кнопки prev
            }}>
            <img src={prevIcon} alt="Previous" />
          </motion.button>
          <motion.button
            custom={5}
            variants={AnimRight}
            className={s["nextButton"]}
            onClick={() => {
              // Обработчик для кнопки next
            }}>
            <img src={nextIcon} alt="Next" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default GreetingBlock
