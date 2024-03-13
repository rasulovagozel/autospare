import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/features/Layout"
import Lorry from "./src/pages/Lorry"
import Home from "./src/pages/Home"
import Accumulator from "./src/pages/Accumulator"
import AirFilter from "./src/pages/AirFilter"
import Amortizator from "./src/pages/Amortizator"
import BrakingSystem from "./src/pages/BrakingSystem"
import Elevator from "./src/pages/Elevator"
import MotorFilter from "./src/pages/MotorFilter"
import OilFilter from "./src/pages/OilFilter"

export const routers=createBrowserRouter([
    {
        element:<Layout />,
        children:[
            {
                element:<Home />,
                path:"/"

            },
            {
                element:<Lorry />,
                path:"/lorry"
            },
            {
                element:<Accumulator />,
                path:"/accumulator"
            },
            {
                element:<AirFilter />,
                path:"/airfilter"
            },
            {
                element:<Amortizator />,
                path:"/amortizator"
            },
            {
                element:<BrakingSystem />,
                path:"/brakingsystem"
            },
            {
                element:<Elevator />,
                path:"/elevator"
            },
            {
                element:<MotorFilter />,
                path:"/motorfilter"
            },
            {
                element:<OilFilter />,
                path:"/oilfilter"
            },
        ]
    }
])