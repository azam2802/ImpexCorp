import React, { useEffect, useState } from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import CarCard from "@components/CarCard/CarCard"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { BsChevronRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
export const CatalogsItem = ({
  catalogTitle, //data
}) => {
  const data = [
    {
      car_name: "Mercedes AMG E63",
      car_slug: "mercedes-amg-e63",
      images:
        "https://wieck-mbusa-production.s3.amazonaws.com/photos/a743fe485608cdfb64be0fced5f3e168535cfe95/preview-928x522.jpg",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Бензин",
      transmission: "АКПП",
      mileage: 15000,
      release_period: 2018,
      price: 150000,
    },
    {
      car_name: "Mercedes Maybach S600",
      car_slug: "mercedes-maybach-s600",
      images:
        "https://classicthrottleshop.com/wp-content/uploads/2022/11/2015-Mercedes-Benz-Maybach-S600-Black-wm-1.jpg",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Бензин",
      transmission: "АКПП",
      mileage: 15000,
      release_period: 2022,
      price: 150000,
    },
    {
      car_name: "BYD HAN",
      car_slug: "byd-han",
      images:
        "https://www.mstc.com.jo/sites/default/files/2023-04/section3%20%282%29.png",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Бензин",
      transmission: "Редуктор",
      mileage: 15000,
      release_period: 2022,
      price: 150000,
    },
    {
      car_name: "Zeekr X",
      car_slug: "zeekr-x",
      images:
        "https://avatars.mds.yandex.net/get-verba/997355/2a000001877ffdc2e11213b722698a1702bf/cattouchret",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Электро",
      transmission: "Редуктор",
      mileage: 15000,
      release_period: 2023,
      price: 150000,
    },
    {
      car_name: "BYD Song",
      car_slug: "byd-song",
      images:
        "https://китайские-автомобили.рф/wp-content/uploads/2023/04/byd_song_plus_new_1_1000.jpg",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Бензин",
      transmission: "МКПП",
      mileage: 15000,
      release_period: 2022,
      price: 150000,
    },
  ]

  const AnimBottom = {
    hidden: {
      y: 150,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.2 },
    }),
  }
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

  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={s.catalogs_item}>
      <motion.h1 variants={AnimBottom} className={s.catalog_type_title}>
        {catalogTitle}
      </motion.h1>
      <motion.ul variants={AnimBottom} custom={1} className={s.car_card_list}>
        <Swiper
          slidesPerView={
            bodyWidth > 765
              ? 2.75
              : bodyWidth > 565
                ? 2
                : bodyWidth > 410
                  ? 1.4
                  : 1.1
          }
          style={{ width: "100%" }}
          freeMode={true}
          modules={[FreeMode]}>
          {[...data]
            .reverse()
            .slice(0, 6)
            .map((car) => (
              <SwiperSlide key={car.car_slug}>
                <CarCard
                  // images={`http://209.38.228.54:81/${car.images[0]}`}
                  images={car.images}
                  car_name={car.car_name}
                  price={car.price}
                  volume={car.volume}
                  transmission={car.transmission}
                  country={car.country_of_assembly}
                  mileage={car.mileage}
                  year={car.release_period}
                  fuel={car.fuel}
                />
              </SwiperSlide>
            ))}
          <SwiperSlide>
            <Link className={s.next_button} to="catalog">
              <BsChevronRight
                style={{ width: "80px", height: "100%", fill: "#19746b" }}
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </motion.ul>
    </motion.li>
  )
}

CatalogsItem.propTypes = {
  catalogTitle: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}
