import React from "react"
import { motion } from "framer-motion"
import s from "@styles/pages/Home/FirstBlock.module.scss"
import { useTranslation } from "react-i18next"

const FirstBlock = () => {
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

  const AnimBottom = {
    hidden: {
      y: 80,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.2 },
    }),
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={s.FirstBlock_section}
      viewport={{ once: true, amount: 0.3 }}>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.block_title}>
            <div className={s.title}>
              <p>
                <motion.span custom={1} variants={AnimLeft}>
                  IMPEXCORP
                </motion.span>
                <motion.span custom={1} variants={AnimLeft}>
                  {t("HomePage.firstBlock.title1")}
                </motion.span>
              </p>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=996500677633"
                rel="noreferrer"
                target="_blank">
                <motion.button
                  custom={2}
                  variants={AnimBottom}
                  className={s.button}>
                  {t("HomePage.firstBlock.buttonText")}
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default FirstBlock
