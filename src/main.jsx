import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {

  RouterProvider,

} from "react-router-dom";
import './index.css'
import router from "./router"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
