import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
    <Header />
    //Outlet uses this layout as base and change the contents only from the place of Outlet
    <Outlet />
    <Footer />
   </>
  )
}

export default Layout