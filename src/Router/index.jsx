import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            index: true,
            element:<Home/>
        }
    ]
  },
]);