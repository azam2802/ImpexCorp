import React, { useEffect, useState } from "react"
import img1 from "@images/Rectangle63.png"
import img2 from "@images/Rectangle64.png"
import img3 from "@images/Rectangle65.png"
import img4 from "@images/Rectangle66.png"
import img5 from "@images/Rectangle67.png"
import Icon1 from "@images/Vector5.svg"
import Icon2 from "@images/Vector4.svg"
import s from "@styles/pages/CardInfo/CardInfo.module.scss"
import {
  FaAngleRight,
  FaAngleLeft,
  FaRegCalendar,
  FaFlag,
} from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import { LuFuel } from "react-icons/lu"
import { MdOutlineSpeed } from "react-icons/md"
import CharacterCard from "@components/CharacterCard/CharacterCard"
import { IoShareSocial } from "react-icons/io5"
const CardInfo = () => {
  const images = [img1, img2, img3, img4, img5]

  const character = [
    {
      title: "Общая информация",
      keys: [
        "Тип кузова",
        "Количество дверей",
        "Количество мест",
        "Страна сборки",
        "Период выпуска",
        "Коробка передач",
        "Привод",
      ],
      value: ["КРОССОВЕР", 5, 5, "КИТАЙ", "2022", "АВТОМАТ", "ПЕРЕДНИЙ"],
    },
    {
      title: "Размеры",
      keys: [
        "Ширина передней колеи",
        "Ширина задней колеи",
        "Размер колес",
        "Клиренс",
      ],
      value: ["1650", "1630", "255/50/R20", "180 мм"],
    },
    {
      title: "Двигатель",
      keys: ["Тип двигателя", "Мощность", "Объем в см³", "Расход"],
      value: ["ЭЛЕКТРО", "245 л.с", "1497", "6.5 л"],
    },
  ]

  const [mainImg, setMainImg] = useState(images[0])

  const [bodyWidth, setBodyWidth] = useState(0)
  useEffect(() => {
    const updateBodyWidth = () => {
      setBodyWidth(document.body.clientWidth)
    }

    window.addEventListener("resize", updateBodyWidth)

    updateBodyWidth()

    return () => {
      window.removeEventListener("resize", updateBodyWidth)
    }
  }, [])

  const prevFunc = () => {
    if (mainImg === images[0]) {
      setMainImg(images[images.length - 1])
    } else {
      const currentIndex = images.indexOf(mainImg)
      const newIndex = (currentIndex - 1 + images.length) % images.length
      setMainImg(images[newIndex])
    }
  }
  const nextFunc = () => {
    if (mainImg === images[images.length - 1]) {
      setMainImg(images[0])
    } else {
      const currentIndex = images.indexOf(mainImg)
      const newIndex = (currentIndex + 1 + images.length) % images.length
      setMainImg(images[newIndex])
    }
  }

  return (
    <div className={s.card_info_section}>
      <span>Back</span>
      <div className={s.card_slide_block}>
        <div className={s.card_slide}>
          <div className={s.card_slide_main}>
            <button
              onClick={() => {
                prevFunc()
              }}
              className={s.left}>
              <FaAngleLeft />
            </button>
            <button
              onClick={() => {
                nextFunc()
              }}
              className={s.right}>
              <FaAngleRight />
            </button>
            <img src={mainImg} alt={img1} />
          </div>
          <div className={s.card_slide_list}>
            <Swiper
              freeMode={true}
              modules={[FreeMode]}
              slidesPerView={bodyWidth > 765 ? 4 : 3.2}>
              {images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => {
                      setMainImg(item)
                    }}
                    className={s.card_slide_item}>
                    <img src={item} alt={item} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={s.card_info_card}>
          <h1>BYD Tang II</h1>
          <h1 className={s.car_price}>$ 12 000</h1>
          <ul className={s.car_struct_list}>
            <li className={s.car_struct_list_item}>
              <FaRegCalendar />
              <p className={s.car_struct_text}>2023</p>
            </li>
            <li className={s.car_struct_list_item}>
              <img
                className={s.car_struct_image}
                src={Icon2}
                alt="struct-img"
              />
              <p className={s.text_transmission + " " + s.car_struct_text}>
                Auto
              </p>
            </li>
            <li className={s.car_struct_list_item}>
              <LuFuel />
              <p className={s.car_struct_text}>Fuel</p>
            </li>
            <li className={s.car_struct_list_item}>
              <MdOutlineSpeed />
              <p className={s.car_struct_text}>15000 km</p>
            </li>
            <li className={s.car_struct_list_item}>
              <FaFlag />
              <p className={s.car_struct_text}>Germany</p>
            </li>
            <li className={s.car_struct_list_item}>
              <img
                className={s.car_struct_image}
                src={Icon1}
                alt="struct-img"
              />
              <p className={s.car_struct_text}>2.5</p>
            </li>
          </ul>
          <button className={s.btn}>Просчитать стоимость</button>
        </div>
      </div>

      <div className={s.share}>
        <IoShareSocial />
        <span>Поделится</span>
      </div>

      <h1 className={s.character_main_title}>Характеристики</h1>
      <div className={s.character_cards}>
        {character.map((item, i) => (
          <CharacterCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CardInfo
