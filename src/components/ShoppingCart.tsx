'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Star, X, Plus, Minus, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from './ui/card'
import { Separator } from '@radix-ui/react-select'
import { Input } from './ui/input'
import Link from 'next/link'


interface Product {
  id: number
  name: string
  image: string
  price: number
  rating: number
  quantity: number
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Burger",
      image: "/placeholder.svg",
      price: 35.00,
      rating: 3,
      quantity: 1
    },
    {
      id: 2,
      name: "Fresh Lime",
      image: "/placeholder.svg",
      price: 25.00,
      rating: 3,
      quantity: 1
    },
    {
      id: 3,
      name: "Pizza",
      image: "/placeholder.svg",
      price: 15.00,
      rating: 3,
      quantity: 1
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      image: "/placeholder.svg",
      price: 45.00,
      rating: 3,
      quantity: 1
    },
    {
      id: 5,
      name: "Cheese Butter",
      image: "/placeholder.svg",
      price: 15.00,
      rating: 3,
      quantity: 1
    }
  ])

  const updateQuantity = (id: number, delta: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const newQuantity = Math.max(1, product.quantity + delta)
        return { ...product, quantity: newQuantity }
      }
      return product
    }))
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
   <>
    
     <div className="container mx-auto px-4 py-8">
     <div className="grid gap-8 lg:grid-cols-2">
       {/* Coupon Code Section */}
       <div className="space-y-4">
         <h2 className="text-3xl font-bold text-gray-800 font-helvetica">
           Coupon Code
         </h2>
         <Card>
           <CardContent className="p-6 space-y-4">
             <p className="text-gray-500 text-lg">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
             </p>
             <div className="flex space-x-2">
               <Input 
                 placeholder="Enter Here code" 
                 className="flex-1"
               />
               <Button 
                 className="bg-[#FF9F0D] hover:bg-[#f59300] text-white px-8"
               >
                 Apply
               </Button>
             </div>
           </CardContent>
         </Card>
       </div>

       {/* Total Bill Section */}
       <div className="space-y-4">
         <h2 className="text-3xl font-bold text-gray-800 font-helvetica">
           Total Bill
         </h2>
         <Card>
           <CardContent className="p-6">
             <div className="space-y-4">
               <div className="flex justify-between items-center">
                 <h3 className="text-xl font-bold text-gray-800">Cart Subtotal</h3>
                 <span className="text-lg font-bold text-gray-800">$120.00</span>
               </div>
               <div className="flex justify-between items-center">
                 <h3 className="text-lg text-gray-600">Shipping Charge</h3>
                 <span className="text-lg text-gray-600">$00.00</span>
               </div>
               <Separator className="my-4" />
               <div className="flex justify-between items-center">
                 <h3 className="text-xl font-bold text-gray-800">Total Amount</h3>
                 <span className="text-lg font-bold text-gray-800">$205.00</span>
               </div>
             </div>
           </CardContent>
         </Card>
         <Link href={"/checkOut"}> <Button 
           className="w-full bg-[#FF9F0D] hover:bg-[#f59300] text-white h-16 text-lg"
         >
           Proceed to Checkout
           <ArrowRight className="ml-2 h-5 w-5" />
         </Button></Link>
       </div>
     </div>
   </div>
   </>
  )
}

