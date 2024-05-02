'use client' // this makes it a client component, a separated component which needs interactivity
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button className='btn btn-secondary' style={{fontWeight: 'bold'}} onClick={() => console.log('client component clicked')}>
            Add to Cart
        </button>
    </div>
  )
  
}

export default AddToCart