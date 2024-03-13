import { motion } from "framer-motion"
import React from "react"
import { useTranslation } from "react-i18next"
import carImg from "@images/car.png"
import s from "@styles/pages/Home/GreetingBlock.module.scss"

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
    <section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={s.container}>
        <div className={s.row}>
          <div className={s.col_6}>
            <motion.div variants={AnimLeft} className={s.carImg}>
              <img src={carImg} alt="Car" />
            </motion.div>
          </div>
          <div className={s.col_6}>
            <motion.h2 custom={1} variants={AnimRight} className={s.title}>
              {t("HomePage.GreetingBlock.title")}
            </motion.h2>
            <motion.p custom={2} variants={AnimRight} className={s.text}>
              {t("HomePage.GreetingBlock.text")}
            </motion.p>
            <motion.button custom={3} variants={AnimRight} className={s.button}>
              {t("HomePage.GreetingBlock.buttonText")}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default GreetingBlock
