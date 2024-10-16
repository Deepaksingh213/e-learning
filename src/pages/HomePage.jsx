import React from 'react'
import CustomNavbar from "../components/CustomNavbar"
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
      <CustomNavbar />
      <div>
        <Outlet />
       </div>
       <Footer />
    </>
  )
}

export default HomePage