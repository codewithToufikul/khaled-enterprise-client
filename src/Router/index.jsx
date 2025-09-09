import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import QualityCertificates from "../Pages/QualityCertificates/QualityCertificates";
import Traceability from "../Pages/Traceability/Traceability";
import Services from "../Pages/Services/Services";
import MarketsLogistics from "../Pages/MarketsLogistics/MarketsLogistics";
import RFQ from "../Pages/RFQ/RFQ";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import DashLogin from "../AdminDashboard/DashLogin";
import AdminPrivetRoute from "../Hooks/AdminPrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            index: true,
            element:<Home/>
        },
        {
          path: '/about-us',
          element: <About/>
        },
        {
          path: '/quality-certificates',
          element: <QualityCertificates/>
        },
        {
          path: '/traceability',
          element:<Traceability/>
        },
        {
          path: '/services',
          element: <Services/>
        },
        {
          path: '/markets-logistics',
          element: <MarketsLogistics/>
        },
        {
          path: '/rfq',
          element: <RFQ/>
        }
    ]
  },
  {
    path: "/dash-login",
    element: <DashLogin/>
  },
  {
    path: "/dashboard",
    element: <AdminPrivetRoute><AdminDashboard/></AdminPrivetRoute>
  }
]);