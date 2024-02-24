import React from "react"
import ApplicationForm from "./Sections/ApplicationForm"
import { Catalogs } from "./Sections/Catalogs"

export const Home = () => {
  return (
    <main>
      <Catalogs />
      <ApplicationForm />
    </main>
  )
}

export default Home
