import FoodList from '@/components/FoodList'
import HeaderMenu from '@/components/HeaderMenu'
import React from 'react'

function page() {
  return (
    <div>
        <div className='w-full'>
        <HeaderMenu /> 
        <FoodList/>
        </div>
    </div>
  )
}

export default page