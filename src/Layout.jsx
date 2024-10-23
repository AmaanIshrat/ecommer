import React, { useContext } from 'react';
import Header from './componetns/Header/Header';
import Footer from './componetns/Footer/Footer';
import { Outlet } from 'react-router-dom'



function Layout() {
  
  return (
    <>
    
    
      <Header/>
     
      <Outlet />  {/* Renders the child components (Home, About, Contact) */}
    
      <Footer />

    </>
  )
}

export default Layout