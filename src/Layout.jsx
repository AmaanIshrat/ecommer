import React, { useContext } from 'react';
import Header from './componetns/Header/Header';
import Footer from './componetns/Footer/Footer';
import { Outlet } from 'react-router-dom'
import { ThemeContext } from './componetns/Context/ThemeContext';



function Layout() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <>
    
    <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
      <Header/>
     
      <Outlet />  {/* Renders the child components (Home, About, Contact) */}
    
      <Footer />
      </div>

    </>
  )
}

export default Layout