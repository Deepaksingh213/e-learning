import {
    createBrowserRouter,
    
  } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login"
import Register from "../pages/Register";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";
import Services from "../pages/Services"
import ErrorPage from "../pages/ErrorPage"
import App from "../App"


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage /> ,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "",
            element: <App />,
          },
        {
            path: "about",
            element: <About />,
          },
        {
            path: "courses",
            element: <Courses />,
          },
        {
            path: "categories",
            element: <Categories />,
          },
        {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          
      ]
    },
   
  ]);
  export default router 