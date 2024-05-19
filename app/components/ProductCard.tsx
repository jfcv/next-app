import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    // it uses tailwind by default
    // the selling point of tailwind is
    // that we can style our components from
    // this file
    // the downside to that is that it violates
    // the separation of concerns principle !!!
    <div>
        <h2 className={styles.header}>Card #1</h2>

        <p>Lorem ipsum dolor sit amet.</p>
        
        <AddToCart />
    </div>
  )
}

export default ProductCard