import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react'

export default function CheckoutPage() {
  return (
   <>
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Shipping address</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="Enter your first name" />
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Enter your last name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter your address" />
            </div>
            <div>
              <Label htmlFor="apartment">Apartment, suite, etc.</Label>
              <Input id="apartment" placeholder="Apartment, suite, etc." />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Select>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Choose city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="los-angeles">Los Angeles</SelectItem>
                  <SelectItem value="chicago">Chicago</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Choose country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" placeholder="Enter your state" />
            </div>
            <div>
              <Label htmlFor="zip">ZIP code</Label>
              <Input id="zip" placeholder="Enter your ZIP code" />
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-6">
            <Checkbox id="shipping" />
            <label
              htmlFor="shipping"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Use this address for shipping
            </label>
          </div>
          <div className="flex justify-between mt-8">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to cart
            </Button>
            <Button>
              Proceed to shipping <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4 mb-4 pb-4 border-b">
                  <div className="w-16 h-16 bg-gray-200 rounded" />
                  <div>
                    <h4 className="font-bold">Chicken Tikka Kabab</h4>
                    <p className="text-sm text-gray-600">150 gm net</p>
                    <p className="text-sm">$50</p>
                  </div>
                </div>
              ))}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$130</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$54.76</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>$432.65</span>
                </div>
              </div>
              <Button className="w-full mt-6">
                Place Order <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
   </>
  )
}

