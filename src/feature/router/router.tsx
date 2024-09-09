import { Main, NotFound, Sentry, Wss } from "pages"
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
    path: "/wss",
    element: <Wss />,
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
