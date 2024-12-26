import React from 'react'
import Image from "next/image"
import { Card } from "./ui/card"
import { categoryCard } from '@/constant/cards'


function FoodCategory() {
  return (
    <div>
      
<div className='relative w-full flex justify-center items-center'>
<Image src="/images/backpic.png" alt="background" width={1950} height={500}className='opacity-20'></Image>
<div className=" absolute w-[1319px] grid grid-rows-2 md:h-auto grid-cols-4 lg:grid-cols-6 ml-[280px] gap-14">
{categoryCard.map((item, index)=>{return (
  <Card 
  className={`w-[218px] h-[247px] flex gap-[24px] flex-col items-center justify-center 
   `} 
 
 key={index}>
  
  <Image src={item.src} alt="image" width={120} height={120}></Image>

  <p className="text-[22px] leading-[24px]">{item.name}</p>

  <p className="text-[22px] leading-[24px]">{item.rating}</p>

</Card>
)})}
</div>
</div>
    </div>
  )
}

export default FoodCategory






