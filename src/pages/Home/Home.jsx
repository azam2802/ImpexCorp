import React from "react"
import ApplicationForm from "./Sections/ApplicationForm"
import GreetingBlock from "./Sections/GreetingBlock"
import { Catalogs } from "./Sections/Catalogs"
import { FAQ } from "./Sections/FAQ"
import FirstBlock from "./Sections/FirstBlock"

export const Home = () => {
  return (
    <main>
      <FirstBlock />
      <GreetingBlock />
      <Catalogs />
      <FAQ />
      <ApplicationForm />
    </main>
  )
}

export default Home
