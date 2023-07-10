import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const DetailPage = () => {
    const {id} = useParams()
    const { getProductById, addProductCart ,isInCart ,cart } = useCustomContext()
    const productDetail = getProductById(id)
    const [producIsInCart ,setProductIsInCart] = useState(isInCart(id))
    useEffect(() => {
        setProductIsInCart(isInCart(id))
    }, [cart])

  return (
    
      <div>
        <h1>{productDetail.nombre}</h1>
        <h2>{productDetail.precio}</h2>
        <p>{productDetail.descripcion}</p>
        {
           producIsInCart
           ? 
            <div>
                <button>-</button>
                <span>0</span>
                <button>+</button>
            </div>
            :
          <div><button onClick={() => addProductCart(productDetail.id)}>Comprar</button></div>
        }
        
      </div>
  )
}

export default DetailPage