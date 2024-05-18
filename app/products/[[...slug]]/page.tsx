import React from 'react'

interface Props {
    params: { slug: string[] },
    searchParams: { sortOrder: string }
}

const ProductPage = ({ params: {slug}, searchParams: {sortOrder} } : Props) => {
  return (
    <>
      <div>ProductPage {slug}</div>
      <div>Sort Order {sortOrder?sortOrder:null}</div>
    </>
  )
}

export default ProductPage