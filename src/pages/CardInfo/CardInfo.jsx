import React, { useEffect, useState } from "react"
import imgPlaceholder from "@images/car_placeholder.webp"
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
import { Link, useParams } from "react-router-dom"
import { useAutoInfo, useSliderState } from "@store/store"
import { useTranslation } from "react-i18next"
import { IoIosArrowBack } from "react-icons/io"
import { Helmet } from "react-helmet"

const CardInfo = () => {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const { data, fetchData } = useAutoInfo()
  const placeholderImage = [imgPlaceholder]

  fetchData(i18n.language, id)

  const images = data.images

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
    // setImages(()=>{images.slice(1,5)})
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

  const [thisUrl, setThisUrl] = useState("")
  const [thisTitle, setThisTitle] = useState("")

  useEffect(() => {
    setThisUrl(window.location.href)
    setThisTitle(document.title)
  }, [])

  const shareHandler = () => {
    navigator
      .share({
        title: thisTitle,
        url: thisUrl,
      })
      .catch(console.error)
  }

  return (
    <main>
      <Helmet>
        <title>
          {`IMPEX CORP || 
          ${data.car_model != undefined ? data.car_brand + " " + data.car_model : ""}`}
        </title>
      </Helmet>
      <div className={s.card_info_section}>
        <Link to="/" className={s.back}>
          <IoIosArrowBack size={25} color="#19746b" />
          <p>{t("backBtn")}</p>
        </Link>
        <div className={s.card_slide_block}>
          <div className={s.card_slide}>
            <div className={s.card_slide_main}>
              {images != undefined ? (
                images.length > 1 ? (
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
                    </button>
                  </>
                ) : (
                  ""
                )
              ) : (
                ""
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
            {images != undefined ? (
              images.length > 1 ? (
                <div
                  className={s.card_slide_list}
                  style={{ width: images.length >= 4 ? "100%" : "80%" }}>
                  <Swiper
                    freeMode={true}
                    modules={[FreeMode]}
                    slidesPerView={
                      bodyWidth > 765 && images.length < 4
                        ? 2.9
                        : bodyWidth > 765 && images.length > 3
                          ? 3.9
                          : 3.4
                    }>
                    {(images == undefined ? placeholderImage : images).map(
                      (item, i) => (
                        <SwiperSlide key={i}>
                          <div
                            onClick={() => {
                              setMainImg(item.image)
                              setSlide(
                                images
                                  .map((el) => el.image)
                                  .indexOf(item.image),
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
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
          <div className={s.card_info_card}>
            <h1>
              {data.car_model != undefined &&
                data.car_brand + " " + data.car_model}
            </h1>
            <h2 className={s.car_price}>$ {data.price}</h2>
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
              {data.fuel_type != t("Catalog.characteristics.fuel.electro") && (
                <li className={s.car_struct_list_item}>
                  <img
                    className={s.car_struct_image}
                    src={Icon1}
                    alt="struct-img"
                  />
                  <p className={s.car_struct_text}>{data.volume}</p>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className={s.share} onClick={shareHandler}>
          <IoShareSocial />
          <span>Поделится</span>
        </div>

        <h2 className={s.character_main_title}>Характеристики</h2>
        <div className={s.character_cards}>
          <CharacterCard data={data} />
        </div>
      </div>
    </main>
  )
}

export default CardInfo