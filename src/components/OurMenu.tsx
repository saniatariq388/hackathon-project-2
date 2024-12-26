'use client'

import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { menuItems } from '@/constant/menuItem'
import { Button } from './ui/button'
import Link from 'next/link'



function OurMenu() {
  return (
    <div>
        {/* MENU-SECTION */}
   
    <section className="container mx-auto px-4 py-24">
      <div className="mb-16 text-center">
        <span className="font-['Great_Vibes'] text-3xl text-[#FF9F0D]">Choose & pick</span>
        <h2 className="text-5xl font-bold">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h2>
      </div>

      <Tabs defaultValue="breakfast" className="w-full">
        <TabsList className="mb-8 flex justify-center gap-8">
          <TabsTrigger 
            value="breakfast"
            className="text-xl data-[state=active]:text-[#FF9F0D]"
          >
            Breakfast
          </TabsTrigger>
          <TabsTrigger 
            value="lunch"
            className="text-xl data-[state=active]:text-[#FF9F0D]"
          >
            Lunch
          </TabsTrigger>
          <TabsTrigger 
            value="dinner"
            className="text-xl data-[state=active]:text-[#FF9F0D]"
          >
            Dinner
          </TabsTrigger>
          <TabsTrigger 
            value="dessert"
            className="text-xl data-[state=active]:text-[#FF9F0D]"
          >
            Dessert
          </TabsTrigger>
          <TabsTrigger 
            value="drink"
            className="text-xl data-[state=active]:text-[#FF9F0D]"
          >
            Drink
          </TabsTrigger>
          <TabsTrigger 
            value="snack"
            className="text-xl data-[state=active]:text-[#FF9F0D]"
          >
            Snack
          </TabsTrigger>
          <TabsTrigger 
            value="soups"
            className="text-xl data-[state=active]:text-[#FF9F0D]"
          >
            Soups
          </TabsTrigger>
        </TabsList>

         <div className='w-[1320px] flex justify-between gap-[5px]'>
         <div className='w-[315px]'>
            <Image src="/images/paleter.png" alt="food" width={320} height={365}></Image>
         </div>
        <TabsContent value="breakfast" className="mt-0">
          <div className="w-[1000px] grid gap-8 md:grid-cols-1
          lg:grid-cols-2">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border-none bg-transparent">
                <CardContent className="flex items-start gap-4 p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 rounded-md object-cover"
                    width={80} height={80}
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                    <span className="text-lg font-bold text-[#FF9F0D]">
                      {item.price.toFixed(2)}$
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
         </div>
    </Tabs>
  </section>
    {/* </div> */}

        {/* cheif */}
        <div className="w-full flex flex-col mt-[105px] items-center justify-center">
            <h2 className=' font-[greatVibes] text-3xl  text-[#ff9f0d]'>Chefs</h2>
            <h1 className='text-5xl text-white font-bold mb-6'> <span className='text-[#ff9f0d]'>Me</span>et Our Chef</h1>
           <div className='w-[1344px] flex gap-[24px]'>
             
                <div className='w-[312px] h-[391px]'>
                    <Image src="/images/Chef1.png" alt="Chef" width={350} height={410}></Image>
                </div>
                <div className='w-[312px] h-[391px]'>
                    <Image src="/images/Card2.png" alt="Chef" width={350} height={410}></Image>
                </div>
                <div className='w-[312px] h-[391px]'>
                    <Image src="/images/Card3.png" alt="Chef" width={350} height={410}></Image>
                </div>
                <div className='w-[312px] h-[391px]'>
                    <Image src="/images/Card4.png" alt="Chef" width={350} height={410}></Image>
                </div>
        
            </div>
            <div className='w-[155px] h-[50px] mt-10 rounded-full border-2 border-[#FF9F0D] flex justify-center items-center text-center'>
             <Link href={"/ourChef"}> <Button>See More</Button></Link>
              </div>
        </div>
    </div>
  )
}

export default OurMenu