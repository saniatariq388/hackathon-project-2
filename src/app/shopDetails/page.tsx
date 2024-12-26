import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import ShopDetails from '@/components/ShopDetails'
import React from 'react'

function page() {
  return (
    <>
      <div className='w-full '>
      <HeaderMenu /> 
      <ShopDetails/>
      <Footer/>
        </div>  
    </>
  )
}

export default page