import React from "react"
import s from "@styles/layout/Footer.module.scss"
import Logo from "@images/Logo.svg"
import TelegramIcon from "@images/image 4.png"
import InstagramIcon from "@images/image 5.png"
import TwitterIcon from "@images/image 6.png"
import WhatsUpIcon from "@images/image 7.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={s["logo"]}>
          <Link to="/">
            <img src={Logo} alt="Impex Logotype" />
          </Link>
        </div>
        <div className={s["footer-content"]}>
          <div className={s["row-1"]}>
            <ul>
              <li>
                <Link to={""}>О нас</Link>
              </li>
              <li>
                <Link to={""}>Контакты</Link>
              </li>
              <li>
                <Link to={""}>Локации</Link>
              </li>
              <li>
                <Link to={""}>Обзор</Link>
              </li>
              <li>
                <Link to={""}>Акции</Link>
              </li>
            </ul>
          </div>
          <div className={s["row-2"]}>
            <ul>
              <li>
                <Link to={""}>Поддержка</Link>
              </li>
              <li>
                <Link to={""}>Обратная связь</Link>
              </li>
              <li>
                <Link to={""}>Условия доставки</Link>
              </li>
              <li>
                <Link to={""}>Возврат</Link>
              </li>
              <li>
                <Link to={""}>Как оформить заказ</Link>
              </li>
            </ul>
          </div>
          <div className={s["row-3"]}>
            <ul>
              <li>
                <Link to={""}>Выбор и покупка</Link>
              </li>
              <li>
                <Link to={""}>Модельный ряд</Link>
              </li>
              <li>
                <Link to={""}>Финансовые сервисы</Link>
              </li>
              <li>
                <Link to={""}>Тест-драйв</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={s["social-media"]}>
          <ul>
            <li>
              <img src={TelegramIcon} alt="Telegram Icon" />
            </li>
            <li>
              <img src={InstagramIcon} alt="Instagram Icon" />
            </li>
            <li>
              <img src={TwitterIcon} alt="Twitter Icon" />
            </li>
            <li>
              <img src={WhatsUpIcon} alt="WhatsUp Icon" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
