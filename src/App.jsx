import React from 'react'
import { ProductCard } from './components'
import { CartPage, DetailPage, HomePage } from './screens'
import { Route, Routes, NavLink } from 'react-router-dom'


function App() {
  
  return (
    <div>
      <nav>
        <NavLink to='/' className='navBtn'>Ir al Home</NavLink>
        <NavLink to='/cart' className='navBtn'>Ir al carrito</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </div>
  )
}

export default App