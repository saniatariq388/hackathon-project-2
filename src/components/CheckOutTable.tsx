'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from 'lucide-react'

export default function CheckoutComponent() {
  return (
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
  )
}

