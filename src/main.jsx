import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import "./i18n.js"
import Loader from "@components/Loader/Loader.jsx"
import { BrowserRouter } from "react-router-dom"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = React.lazy(() => import("./App.jsx"))

;((w, d, u) => {
  var s = d.createElement("script")
  s.async = true
  s.src = u + "?" + ((Date.now() / 60000) | 0)
  var h = d.getElementsByTagName("script")[0]
  h.parentNode.insertBefore(s, h)
})(
  window,
  document,
  "https://cdn-ru.bitrix24.ru/b28492848/crm/site_button/loader_1_v57jnc.js",
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <App />
      <SpeedInsights />
    </BrowserRouter>
  </Suspense>,
)
