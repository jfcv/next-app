import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  const divStyle = {
    border: '1px solid #000',
    padding: '20px'
  }

  return (
    <div style={divStyle}>
        <h2 style={{fontWeight: 'bold'}}>Card #1</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        
        <AddToCart />
    </div>
  )
}

export default ProductCard