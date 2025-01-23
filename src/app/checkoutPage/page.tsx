//src\app\checkoutPage\page.tsx

import CheckoutForm from '@/components/CheckoutForm'
import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import React from 'react'

function CheckoutPage() {
  return (
    <>
    <HeaderMenu/>
    <CheckoutForm/>
    <Footer/>
    </>
  )
}

export default CheckoutPage