'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button style={{fontWeight: 'bold'}} onClick={() => console.log('client component clicked')}>
            Add to Cart
        </button>
    </div>
  )
  
}

export default AddToCart