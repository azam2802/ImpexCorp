import React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import searchIcon from "@images/search.svg"
import registrationIcon from "@images/registration.svg"
import autoIcon from "@images/auto.svg"
import insuranceIcon from "@images/insurance.svg"
import s from "@styles/pages/Home/OurServices.module.scss"

const OurServices = () => {
  const { t } = useTranslation()

  return (
    <div className={s.parentContainer}>
      <h1>{t("HomePage.OurServices.title")}</h1>
      <div className={s.servicesContainer}>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={s.serviceItem}>
          <img className={s.searchImg} src={searchIcon} alt="search" />
          <div>
            <p className={s.paragraph1}>{t("HomePage.OurServices.search")}</p>
            <p className={s.span1}>{t("HomePage.OurServices.cars")}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={s.serviceItem}>
          <img src={autoIcon} alt="auto" />
          <div>
            <p className={s.paragraph3}>{t("HomePage.OurServices.delivery")}</p>
            <p className={s.span3}>{t("HomePage.OurServices.guarantee")}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={s.serviceItem}>
          <img src={registrationIcon} alt="registration" />
          <div>
            <p className={s.paragraph2}>
              {t("HomePage.OurServices.registration")}
            </p>
            <p className={s.span2}>{t("HomePage.OurServices.accounting")}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={s.serviceItem}>
          <img src={insuranceIcon} alt="insurance" />
          <div>
            <p className={s.paragraph4}>
              {t("HomePage.OurServices.insurance")}
            </p>
            <p className={s.span4}>{t("HomePage.OurServices.auto")}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OurServices
