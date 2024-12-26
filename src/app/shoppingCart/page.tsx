import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import ShoppingCart from '@/components/ShoppingCart'
import ShoppingCarts from '@/components/ShoppingCarts'
import React from 'react'

function page() {
  return (
    <>
     <HeaderMenu /> 
     <ShoppingCarts/>
     <ShoppingCart/>
     <Footer/>
    </>
  )
}

export default page