import React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import searchIcon from "@images/search.svg"
import registrationIcon from "@images/registration.svg"
import autoIcon from "@images/auto.svg"
import insuranceIcon from "@images/insurance.svg"
import styles from "@styles/pages/Home/OurServices.module.scss"

const OurServices = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.parentContainer}>
      <h1>{t("HomePage.OurServices.title")}</h1>
      <div className={styles.servicesContainer}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.serviceItem}>
          <img className={styles.searchImg} src={searchIcon} alt="search" />
          <div>
            <p className={styles.paragraph1}>
              {t("HomePage.OurServices.search")}
            </p>
            <span className={styles.span1}>
              {t("HomePage.OurServices.cars")}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.serviceItem}>
          <img src={autoIcon} alt="auto" />
          <div>
            <p className={styles.paragraph3}>
              {t("HomePage.OurServices.delivery")}
            </p>
            <span className={styles.span3}>
              {t("HomePage.OurServices.guarantee")}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.serviceItem}>
          <img src={registrationIcon} alt="registration" />
          <div>
            <p className={styles.paragraph2}>
              {t("HomePage.OurServices.registration")}
            </p>
            <span className={styles.span2}>
              {t("HomePage.OurServices.accounting")}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.serviceItem}>
          <img src={insuranceIcon} alt="insurance" />
          <div>
            <p className={styles.paragraph4}>
              {t("HomePage.OurServices.insurance")}
            </p>
            <span className={styles.span4}>
              {t("HomePage.OurServices.auto")}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OurServices
