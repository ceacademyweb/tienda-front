import { createBrowserRouter } from "react-router-dom"
import AppTemplate from "../components/template/AppTemplate"
import Home from "../components/pages/Home"
import Product from "../components/pages/Product"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppTemplate/>,
    children:[
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/product/:id",
        element: <Product/>
      }
    ]
  }
])

export default Router
