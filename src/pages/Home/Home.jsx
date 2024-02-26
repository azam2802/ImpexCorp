import React from "react"
import ApplicationForm from "./Sections/ApplicationForm"
import GreetingBlock from "./Sections/GreetingBlock"
import { Catalogs } from "./Sections/Catalogs"
import { FAQ } from "./Sections/FAQ"

export const Home = () => {
  return (
    <main>
      <GreetingBlock />
      <Catalogs />
      <FAQ />
      <ApplicationForm />
    </main>
  )
}

export default Home
