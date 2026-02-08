import { createBrowserRouter } from "react-router-dom"
import PagenotFound from "../pages/PagenotFound"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"


export   let router = createBrowserRouter([
        { path:"/",
          element:<Home/>
        },
        { path:"/login",
          element:<Login/>
        },
        { path:"/register",
          element:<Register/>
        },
        {
          path:'*',
          element:<PagenotFound/>
        }
    ])
