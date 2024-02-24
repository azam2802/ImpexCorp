import React from "react"
import ApplicationForm from "./Sections/ApplicationForm"
import GreetingBlock from "./Sections/GreetingBlock"
import { Catalogs } from "./Sections/Catalogs"

export const Home = () => {
  return (
    <main>
      <GreetingBlock />
      <Catalogs />
      <ApplicationForm />
    </main>
  )
}

export default Home
