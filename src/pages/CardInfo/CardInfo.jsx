import React, { useEffect, useState } from "react"
import imgPlaceholder from "@images/car_placeholder.png"
import Icon1 from "@images/Vector5.svg"
import Icon2 from "@images/Vector4.svg"
import s from "@styles/pages/CardInfo/CardInfo.module.scss"
import { FaAngleRight, FaAngleLeft, FaRegCalendar } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import { LuFuel } from "react-icons/lu"
import { MdOutlineSpeed } from "react-icons/md"
import CharacterCard from "@components/CharacterCard/CharacterCard"
import { IoShareSocial } from "react-icons/io5"
import { useParams } from "react-router-dom"
import { useAutoInfo, useSliderState } from "@store/store"
import { useTranslation } from "react-i18next"

const CardInfo = () => {
  const { car_slug } = useParams()
  const { i18n } = useTranslation()
  const { data, fetchData } = useAutoInfo()
  const placeholderImage = [imgPlaceholder]

  fetchData(i18n.language, car_slug)

  const images = data.images
  console.log(images)

  const [mainImg, setMainImg] = useState("placeholderImage")
  const { nextSlide, prevSlide, slide, setSlide } = useSliderState()

  useEffect(() => {
    try {
      setMainImg(data.images[slide].image)
    } catch {
      return
    }
  }, [data.images])

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
    if (slide <= 0) {
      setSlide(images.length - 1)
      setMainImg(images[images.length - 1].image)
      console.log(mainImg)
    } else {
      prevSlide()
      setMainImg(images[slide - 1].image)
    }
  }
  const nextFunc = () => {
    if (slide >= images.length - 1) {
      setSlide(0)
      setMainImg(images[0].image)
    } else {
      nextSlide()
      setMainImg(images[slide + 1].image)
    }
  }

  return (
    <div className={s.card_info_section}>
      <span>Back</span>
      <div className={s.card_slide_block}>
        <div className={s.card_slide}>
          <div className={s.card_slide_main}>
            {images != undefined && (
              <>
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
                </button>{" "}
              </>
            )}
            {data.images == undefined ? (
              <img src={placeholderImage} alt={"Placeholder Image"} />
            ) : (
              <img
                src={import.meta.env.VITE_API + mainImg}
                alt={data.car_name}
              />
            )}
          </div>
          <div className={s.card_slide_list}>
            <Swiper
              freeMode={true}
              modules={[FreeMode]}
              slidesPerView={bodyWidth > 765 ? 3.93 : 3.45}>
              {(images == undefined ? placeholderImage : images).map(
                (item, i) => (
                  <SwiperSlide key={i}>
                    <div
                      onClick={() => {
                        setMainImg(item.image)
                        setSlide(
                          images.map((el) => el.image).indexOf(item.image),
                        )
                      }}
                      className={s.card_slide_item}>
                      <img
                        src={import.meta.env.VITE_API + item.image}
                        alt="car photo"
                      />
                    </div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </div>
        </div>
        <div className={s.card_info_card}>
          <h1>{data.car_name}</h1>
          <h1 className={s.car_price}>$ {data.price}</h1>
          <ul className={s.car_struct_list}>
            <li className={s.car_struct_list_item}>
              <FaRegCalendar />
              <p className={s.car_struct_text}>{data.release_period}</p>
            </li>
            <li className={s.car_struct_list_item}>
              <img
                className={s.car_struct_image}
                src={Icon2}
                alt="struct-img"
              />
              <p className={s.text_transmission + " " + s.car_struct_text}>
                {data.drive}
              </p>
            </li>
            <li className={s.car_struct_list_item}>
              <LuFuel />
              <p className={s.car_struct_text}>{data.fuel_type}</p>
            </li>
            <li className={s.car_struct_list_item}>
              <MdOutlineSpeed />
              <p className={s.car_struct_text}>{data.mileage} km</p>
            </li>
            <li className={s.car_struct_list_item}>
              <img
                className={s.car_struct_image}
                src={Icon1}
                alt="struct-img"
              />
              <p className={s.car_struct_text}>{data.volume}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.share}>
        <IoShareSocial />
        <span>Поделится</span>
      </div>

      <h1 className={s.character_main_title}>Характеристики</h1>
      <div className={s.character_cards}>
        <CharacterCard data={data} />
      </div>
    </div>
  )
}

export default CardInfo
