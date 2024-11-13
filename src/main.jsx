import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componetns/Home/Home.jsx'
import About from './componetns/About/About.jsx'
import FAQ from './componetns/FAQ/Faq.jsx'
import Contact from './componetns/Contact/Contact.jsx'
import OrderConfirm from './componetns/Cart/OrderConfirm.jsx'
import SearchResults from './componetns/Search/Search.jsx'
import { CollectionProvider } from './componetns/Context/CollectionContext';

import { ThemeProvider, ThemeContext } from './componetns/Context/ThemeContext.jsx'


import Men from './componetns/Collections/Men.jsx'
import Women from './componetns/Collections/Women.jsx'
import Kids from './componetns/Collections/Kids.jsx'
import Cart from './componetns/Cart/Cart.jsx'
import Knowme from './componetns/Knowme/Knowme.jsx'
import { CartContext, CartProvider } from './componetns/Context/CartContext.jsx'



// 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='faq' element={<FAQ />} />
      <Route path='contact' element={<Contact />} />
      <Route path='cart' element={<Cart />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="kids" element={<Kids />} />
      <Route path="cart" element={<Cart />} />
      <Route path="knowme" element={<Knowme />} />
      <Route path="/order-confirmation" element={<OrderConfirm />} />
      {/* <Route path="/search" element={<SearchResults collectionItems={collectionItems} />} /> */}
      <Route path="/search" element={<SearchResults />} />

    </Route>


  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <CollectionProvider>

        <RouterProvider router={router} />
        </CollectionProvider>
      </CartProvider>
    </ThemeProvider>

  </React.StrictMode>,
)
