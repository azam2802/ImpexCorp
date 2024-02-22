import React from "react"
import s from "@styles/components/Catalog.module.scss"
import ImageCar from "@images/image 35.png"
import Icon from "@images/Union.svg"
import Icon2 from "@images/Vector (1).svg"
import Icon3 from "@images/Vector.svg"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Catalog = ({ setShowCatalog }) => {
  const { t } = useTranslation()

  return (
    <section className={s["container"]}>
      <div className={s["container_childe"]}>
        <div className={s["row_1"]}>
          <div>
            <p className={s["title"]}>{t("main.countries.title")}</p>
            <ul>
              <li>
                <Link to="/" onClick={() => setShowCatalog(false)}>
                  {t("main.countries.items.korea")}
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setShowCatalog(false)}>
                  {t("main.countries.items.china")}
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setShowCatalog(false)}>
                  {t("main.countries.items.japan")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={s["title"]}>{t("main.model")}</p>
            <ul>
              <li>
                <Link to="/" onClick={() => setShowCatalog(false)}>
                  Hundai
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setShowCatalog(false)}>
                  Changan
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setShowCatalog(false)}>
                  Geely
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setShowCatalog(false)}>
                  Haval
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setShowCatalog(false)}>
                  FAW Bestune
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={s["row_2"]}>
          <div className={s["row_2-childe"]}>
            <p className={s["title_car"]}>Mercedes benz 2024</p>
            <div className={s["row_2-characteristic"]}>
              <img src={Icon} alt="" />
              <p>13/100</p>
              <img src={Icon2} />
              <p>Auto</p>
              <img src={Icon3} />
              <p>4</p>
            </div>
            <p className={s["price"]}>$ 34 000</p>
          </div>

          <div>
            <img src={ImageCar} alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}

Catalog.propTypes = {
  setShowCatalog: PropTypes.func.isRequired,
}

export default Catalog
