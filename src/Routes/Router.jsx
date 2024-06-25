import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import OurTeam from "../Pages/OurTeam/OurTeam";

import UIUX from "../Pages/Portfolio/UI-UX/UI-UX";
import AppDevelopment from "../Pages/Portfolio/AppDevelopment/AppDevelopment";
import WebDevelopment from "../Pages/Portfolio/WebDevelopment/WebDevelopment";
import GraphicDesign from "../Pages/Portfolio/GraphicDesign/GraphicDesign";



const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<AboutUs/>,
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/our-team",
                element:<OurTeam/>
            },
          
            {
                path:"/portfolio/ui-ux",
                element:<UIUX></UIUX>
            },
            {
                path:"/portfolio/app-development",
                element:<AppDevelopment></AppDevelopment>
            },
            {
                path:"/portfolio/web-development",
                element:<WebDevelopment></WebDevelopment>
            },
            {
                path:"/portfolio/graphic-design",
                element:<GraphicDesign/>
            }
              
        ]
       
    },
   
])
export default Router