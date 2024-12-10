import React from 'react'
import Image from 'next/image'


function OurMenu() {
  return (
    <div>
   <div className="w-[1922px] flex justify-center items-center">
       <Image src="/images/frame2.png" alt="menu" width={2000} height={450}></Image>
    </div>


        <div className="w-full flex flex-col mt-[105px] items-center justify-center">
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
            <div className='w-[155px] h-[50px] mt-10 rounded-full border-2 border-[#FF9F0D]'></div>
        </div>
    </div>
  )
}

export default OurMenu