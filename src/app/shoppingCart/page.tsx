//src\app\shoppingCart\page.tsx

import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import ShoppingCarts from '@/components/ShoppingCarts'

import React from 'react'

function ShoppingCart() {
  return (
    <>
     <HeaderMenu /> 
     <ShoppingCarts/>
     <Footer/>
    </>
  )
}

export default ShoppingCart