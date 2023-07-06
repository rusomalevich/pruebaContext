import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'

const CartPage = () => {
    const {cart} = useCustomContext()
    console.log(cart)
    
  return (
    <div>
      <h2>CartPage</h2>
      <div>
        {cart.map(product => (
          <ProductCard producto={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default CartPage