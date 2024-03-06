import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategary from './Pages/ShopCategary'
import Product from './Pages/Product'
import Cart from './Pages/cart'
import LoginSignup from './Pages/LoginSignup'

function App() {
  

  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategary category="men"/>}/>
          <Route path='/womens' element={<ShopCategary category="wome"/>}/>
          <Route path='/kids' element={<ShopCategary category="kid"/>}/>
          <Route path='/Product' element={<Product/>}>
              <Route path=':ProductId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
