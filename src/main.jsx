import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import "./i18n.js"
import Loader from "@components/Loader/Loader.jsx"
import { BrowserRouter } from "react-router-dom"
import { SpeedInsights } from "@vercel/speed-insights/react"
const App = React.lazy(() => import("./App.jsx"))

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <App />
      <SpeedInsights />
    </BrowserRouter>
  </Suspense>,
)
