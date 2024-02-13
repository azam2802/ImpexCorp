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
                <a href="">О нас</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
              <li>
                <a href="">Локации</a>
              </li>
              <li>
                <a href="">Обзор</a>
              </li>
              <li>
                <a href="">Акции</a>
              </li>
            </ul>
          </div>
          <div className={s["row-2"]}>
            <ul>
              <li>
                <a href="">Поддержка</a>
              </li>
              <li>
                <a href="">Обратная связь</a>
              </li>
              <li>
                <a href="">Условия доставки</a>
              </li>
              <li>
                <a href="">Возврат</a>
              </li>
              <li>
                <a href="">Как оформить заказ</a>
              </li>
            </ul>
          </div>
          <div className={s["row-3"]}>
            <ul>
              <li>
                <a href="">Выбор и покупка</a>
              </li>
              <li>
                <a href="">Модельный ряд</a>
              </li>
              <li>
                <a href="">Финансовые сервисы</a>
              </li>
              <li>
                <a href="">Тест-драйв</a>
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
