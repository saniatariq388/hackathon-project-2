
import CheckOutTable from '@/components/CheckOutTable'
import FoodList from '@/components/FoodList'
import HeaderMenu from '@/components/HeaderMenu'
import ShoppingCart from '@/components/ShoppingCart'
import React from 'react'

function page() {
  return (
    <div>
        <div className='w-full'>
        <HeaderMenu /> 
        <CheckOutTable/>
        <ShoppingCart/>
        <FoodList/>
        </div>
    </div>
  )
}

export default page