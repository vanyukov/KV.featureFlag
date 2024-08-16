import { Main, NotFound, Sentry } from "pages"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/index.html",
    element: <Main />,
  },
  {
    path: "/sentry",
    element: <Sentry />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
