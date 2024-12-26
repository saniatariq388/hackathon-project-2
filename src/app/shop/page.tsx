
import FoodList from '@/components/FoodList'
import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'

import React from 'react'

function page() {
  return (
    <div>
        <div className='w-full'>
        <HeaderMenu /> 
        <FoodList/>
        <Footer/>
        </div>
    </div>
  )
}

export default page