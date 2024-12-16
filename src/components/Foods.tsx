import React from 'react'
import Image from "next/image"
import { greatVibesFont } from '@/font'

function Foods() {
  return (
    <div>
         <div className='w-full mb-[110px] bg-[#050505] flex items-center justify-center'>

         <div className='w-[1360px] mt-[120px] flex flex-col items-center justify-center'>
            <div className='flex flex-col text-center'>
                <h1 className={`${greatVibesFont.className} ${'text-[32px] leading-[40px] text-orange-500'}`}>Food Category</h1>
                <h1 className='text-[48px] leading-[56px] font-extrabold'> <span className='text-orange-500'>Ch</span>oose Food Iteam</h1>
            </div>
            <div className='w-[1320px] grid gap-[32px] grid-cols-4 mt-[56px]'>
                <div className='relative w=[305px] h-[238px]'>
                    <Image src="/images/salad3.png" alt="salad image" width={320} height={300}></Image>
                    <div className='absolute w-[125px] h-[40px] z-100 top-[123px] left-[81px] text-[16px] py-2 leading-[26px] bg-[#ffffff] text-center text-orange-600'>Save 30%</div>
                    <div className='absolute w-[206px] h-[46px] z-100 top-[135px] left-0 text-[16px] py-2 leading-[26px] bg-"orange" text-center text-[#ffffff]'>Fast Food Dish</div>
                </div>
                <div className='relative w=[305px] h-[238px]'>
                    <Image src="/images/burger.png" alt="burger image" width={320} height={300}></Image>
                </div>
                <div className='relative w=[305px] h-[238px]'>
                    <Image src="/images/salad.png" alt="salad image" width={320} height={300}></Image>
                   
                </div>
                <div className='relative w=[305px] h-[238px]'>
                    <Image src="/images/donuts.png" alt="donuts image" width={320} height={300}></Image>
                   
                </div>
            </div>
          <div className='w-[660px]  grid grid-cols-2 mt-8'>
            <Image src="/images/shawarma.png" alt="shawarma" width={370} height={370}></Image>
          </div> 
        </div>
       
      </div>
    </div>
  )
}

export default Foods