import Image from 'next/image'
import React from 'react'
import gato from '@/public/images/gato-de-noche-bad-bunny.webp'

const ImagePage = () => {
  return (
    <>
        <Image 
            src='https://picsum.photos/200/300' 
            alt='Picture' 
            width={200} 
            height={300} 
            quality={100}
        />
    </>
  )
}

export default ImagePage