'use client'
import React from 'react'

const ProductCart = () => {
  return (
    <div>
        <button onClick={() => console.log('client component clicked')}>
          Add to Cart
        </button>
    </div>
  )
}

export default ProductCart