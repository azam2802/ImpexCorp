import React from "react"
import ApplicationForm from "./Sections/ApplicationForm"
import { Catalogs } from "./Sections/Catalogs"
import { FAQ } from "./Sections/FAQ"

export const Home = () => {
  return (
    <main>
      <Catalogs />
      <FAQ />
      <ApplicationForm />
    </main>
  )
}

export default Home
