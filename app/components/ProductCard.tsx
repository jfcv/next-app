import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.card}>
        <h2 className={styles.header}>Card #1</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        
        <AddToCart />
    </div>
  )
}

export default ProductCard