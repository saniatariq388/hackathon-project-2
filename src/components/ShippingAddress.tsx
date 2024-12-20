'use client'

import { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  const [sameAsShipping, setSameAsShipping] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Left Column - Forms */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="Enter first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Enter last name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="la">Los Angeles</SelectItem>
                    <SelectItem value="ch">Chicago</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP code</Label>
                <Input id="zipCode" placeholder="Enter ZIP code" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address1">Address 1</Label>
                <Input id="address1" placeholder="Enter street address" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address2">Address 2</Label>
                <Input id="address2" placeholder="Enter apartment, suite, etc." />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Billing Address</h2>
            <div className="flex items-center space-x-2 mb-6">
              <Checkbox
                id="sameAddress"
                checked={sameAsShipping}
                onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
              />
              <label
                htmlFor="sameAddress"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Same as shipping address
              </label>
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <Button variant="outline">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to cart
            </Button>
            <Button className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90">
              Proceed to shipping
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Chicken Tikka Kabab"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Chicken Tikka Kabab</h3>
                  <p className="text-sm text-gray-600">150 gm net</p>
                  <p className="text-sm text-gray-600">50$</p>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub-total</span>
              <span>130$</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>54.76$</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>432.65$</span>
            </div>
          </div>

          <Button className="w-full mt-6 bg-[#FF9F0D] hover:bg-[#FF9F0D]/90">
            Place an order
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>
      </div>
    </div>
  )
}

