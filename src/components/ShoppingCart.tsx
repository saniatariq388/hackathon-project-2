'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Star, X, Plus, Minus, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from './ui/card'
import { Separator } from '@radix-ui/react-select'
import { Input } from './ui/input'


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
    <div className="w-full max-w-[1320px] mx-auto p-4">
      <div className="grid grid-cols-12 gap-4 py-4 border-b text-gray-700 font-bold">
        <div className="col-span-4 md:col-span-6">Product</div>
        <div className="col-span-2 text-center">Price</div>
        <div className="col-span-3 md:col-span-2 text-center">Quantity</div>
        <div className="col-span-2 text-center">Total</div>
        <div className="col-span-1 text-center">Remove</div>
      </div>

      {products.map((product) => (
        <div key={product.id} className="grid grid-cols-12 gap-4 py-6 border-b items-center">
          <div className="col-span-4 md:col-span-6 flex gap-4 items-center">
            <div className="w-20 h-20 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-gray-700">{product.name}</h3>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'fill-[#FF9F0D] stroke-[#FF9F0D]' : 'fill-gray-200 stroke-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2 text-center font-helvetica text-gray-700">
            ${product.price.toFixed(2)}
          </div>

          <div className="col-span-3 md:col-span-2 flex justify-center">
            <div className="flex items-center border rounded-full">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateQuantity(product.id, -1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{product.quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateQuantity(product.id, 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="col-span-2 text-center font-bold text-gray-700">
            ${(product.price * product.quantity).toFixed(2)}
          </div>

          <div className="col-span-1 flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-red-50 hover:text-red-500"
              onClick={() => removeProduct(product.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
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
         <Button 
           className="w-full bg-[#FF9F0D] hover:bg-[#f59300] text-white h-16 text-lg"
         >
           Proceed to Checkout
           <ArrowRight className="ml-2 h-5 w-5" />
         </Button>
       </div>
     </div>
   </div>
   </>
  )
}

