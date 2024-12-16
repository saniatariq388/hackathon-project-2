import React from 'react'
import Image from 'next/image'

function ShopDetails() {
  return (
    <>
       <div className='w-[1320px flex justify-between items-center]'>
        <div className='w-[647px] flex justify-between gap-6'>
            <div className='w-[132px] flex flex-row gap-6'>
                <div>
                    <Image src="/images/chicken1.png" alt="food item" width={140} height={135}></Image>
                </div>
                <div>
                    <Image src="/images/chicken2.png" alt="food item" width={140} height={135}></Image>
                </div>
                <div>
                    <Image src="/images/chicken3.png" alt="food item" width={140} height={135}></Image>
                </div>
                <div>
                    <Image src="/images/chicken4.png" alt="food item" width={140} height={135}></Image>
                </div>
            </div>
            <div className='w-[491px] height=[596px]'>
                <Image src="/images/chicken5.png" alt="food item" width={500} height={600}></Image>
            </div>

        </div>

       </div>
    </>
  )        
}

export default ShopDetails