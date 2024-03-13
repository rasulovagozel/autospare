import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Category from '../../pages/Category'


const Layout = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Category />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout