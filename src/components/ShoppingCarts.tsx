"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  quantity: number;
}

export default function ShoppingCart() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Burger",
      price: 35.0,
      rating: 3,
      image: "/images/burgercart.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 25.0,
      rating: 3,
      image: "/images/drinks.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Pizza",
      price: 15.0,
      rating: 3,
      image: "/images/pizza.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: 45.0,
      rating: 3,
      image: "/images/cupcakes.png",
      quantity: 1,
    },
    {
      id: 5,
      name: "Coffee",
      price: 15.0,
      rating: 3,
      image: "/images/coffee3.png",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, increment: boolean) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full max-w-6xl text-black mx-auto p-4">
      {/* Header Row */}
      <div className="grid grid-cols-12 gap-4 py-4 border-b text-sm font-bold">
        <div className="col-span-4">Product</div>
        <div className="col-span-2 text-center">Price</div>
        <div className="col-span-3 text-center">Quantity</div>
        <div className="col-span-2 text-center">Total</div>
        <div className="col-span-1 text-center">Remove</div>
      </div>

      {/* Items */}
      {items.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-12 gap-4 py-6 border-b items-center"
        >
          {/* Product Column */}
          <div className="col-span-4 flex gap-4">
            <div className="w-24 h-24 relative rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                className="object-cover"
                width={120}
                height={120}
              />
            </div>
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < item.rating
                        ? "fill-[#FF9F0D] stroke-[#FF9F0D]"
                        : "fill-gray-200 stroke-gray-200"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Price Column */}
          <div className="col-span-2 text-center text-black font-helvetica">
            ${item.price.toFixed(2)}
          </div>

          {/* Quantity Column */}
          <div className="col-span-3 flex items-center justify-center gap-2">
            <Button
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(item.id, false)}
            >
              <Minus className="h-4 w-4" color="black" size={24} />
            </Button>
            <div className="w-12 h-8 flex items-center justify-center text-black">
              {item.quantity}
            </div>
            <Button
              size="icon"
              className="h-8 w-8 text-black"
              onClick={() => updateQuantity(item.id, true)}
            >
              <Plus className="h-4 w-4" color="black" />
            </Button>
          </div>

          {/* Total Column */}
          <div className="col-span-2 text-center text-black">
            ${(item.price * item.quantity).toFixed(2)}
          </div>

          {/* Remove Column */}
          <div className="col-span-1 text-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-gray-700"
              onClick={() => removeItem(item.id)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
