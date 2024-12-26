'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Minus, Plus, Share2, ArrowLeft, ArrowRight, ShoppingBag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ProductDiscription from './ProductDiscription'
import Product from './Product'
import Link from 'next/link'

export default function ShopDetails() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    '/images/chicken1.png?height=600&width=600',
    '/images/chicken2.png?height=600&width=600',
    '/images/chicken3.png?height=600&width=600',
    '/images/chicken4.png?height=600&width=600'
  ]

  return (
    <>
      <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={images[selectedImage]}
              alt="Product image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex gap-4 overflow-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 ${
                  selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                }`}
              >
                <Image src={image} alt={`Product thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center rounded-md bg-orange-500 px-3 py-1 text-sm text-white">
              In stock
            </span>
            <div className="flex items-center gap-4 text-gray-600">
              <button className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" /> Prev
              </button>
              <button className="flex items-center gap-2">
                Next <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900">Yummy Chicken Chup</h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
              fringilla bibendum.
            </p>
          </div>

          <div className="border-t border-b py-4">
            <div className="text-3xl font-bold text-gray-900">$54.00</div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span>5.0 Rating</span>
                <span className="mx-2">|</span>
                <span>22 Review</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-900">Dictum/cursus/Risus</p>
          </div>

          <div className="flex gap-4">
            <Card className="flex h-[50px] items-center divide-x border">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-full w-[50px] items-center justify-center"
              >
                <Minus className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex h-full w-[80px] items-center justify-center text-black font-semibold">
                {quantity}
              </div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-full w-[50px] items-center justify-center text-black"
              >
                <Plus className="h-5 w-5" />
              </button>
            </Card>
           <Link href={"/shoppingCart"}>
           <Button className="h-[50px] w-[191px] flex-1 gap-2 bg-orange-500 hover:bg-orange-600">
              <ShoppingBag className="h-5 w-5" />
              Add to cart
            </Button>
           </Link>
          </div>

          <div className="flex gap-6 text-gray-600">
            <button className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Add to Wishlist
            </button>
            <button className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Compare
            </button>
          </div>

          <div className="space-y-2 border-t text-black pt-4 mb-[20px]">
            <div className="flex gap-2">
              <span className="font-semibold">Category:</span>
              <span className="text-gray-600">Pizza</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Tag:</span>
              <span className="text-gray-600">Our Shop</span>
            </div>
          </div>
        </div>
      </div>
       </div>
       <ProductDiscription/>
       <Product/>
   </>
  )
}

