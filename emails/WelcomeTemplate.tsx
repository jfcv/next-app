import React from 'react'
import { Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind>        
            <Body className='bg-black'>
                <Container>
                    <Text className='font-bold text-3xl text-white'>Hello Huan {name}</Text>
                    <Link href='https://www.codewithmosh.com'>www.codewithmosh.com</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate