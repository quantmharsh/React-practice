import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>Layout
    <Header/>
    {/* outlet is used to  change ints value this means on every page their will be header and footer
    but instead of outlet we can pass any component which we want to render
    it helps us to make layout of our page */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout