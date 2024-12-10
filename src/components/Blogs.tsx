import { greatVibesFont } from '@/font'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { DotIcon as ChatDots, Link, Share2, ThumbsUp } from 'lucide-react'

function Blogs() {
  return (
    <div>
        <div className='w-full flex flex-col items-center mt-[120px] justify-center'>
            <h4 className={`${greatVibesFont.className} text-[32px] leading-[40px] text-orange-500`}>Blog Post</h4>
            <h1  className='text-[48px] leading-[56px] font-extrabold'><span className='text-[#FF9F0D]'>La</span>test News & Blog</h1>

         <div className='w-[1320px] flex gap-[24px] mt-[50px] mb-[123px]'>
         <Card className="w-[424px] border border-white bg-black text-white">
      <div className="aspect-[1.63/1]">
        <img
          src="/images/burgerr.png?height=350&width=424"
          alt="Food blog post"
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col gap-4 p-6">
        <time className="text-base text-[#FF9F0D]">10 February 2022</time>
        <h3 className="font-helvetica text-2xl font-bold leading-tight">
          Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
        </h3>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6">
        <Link href="#" className="text-base text-white hover:text-[#FF9F0D]">
          Learn More
        </Link>
        <div className="flex gap-4">
          <button className="group">
            <ThumbsUp className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
          </button>
          <button className="group">
            <ChatDots className="h-5 w-5 text-[#FF9F0D] transition-colors group-hover:text-white" />
          </button>
          <button className="group">
            <Share2 className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
          </button>
        </div>
      </CardFooter>
    </Card>

         <Card className="w-[424px] border border-white bg-black text-white">
      <div className="aspect-[1.63/1]">
        <img
          src="/images/pizza.png?height=350&width=424"
          alt="Food blog post"
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col gap-4 p-6">
        <time className="text-base text-[#FF9F0D]">10 February 2022</time>
        <h3 className="font-helvetica text-2xl font-bold leading-tight">
        Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis

        </h3>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6">
        <Link href="#" className="text-base text-white hover:text-[#FF9F0D]">
          Learn More
        </Link>
        <div className="flex gap-4">
          <button className="group">
            <ThumbsUp className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
          </button>
          <button className="group">
            <ChatDots className="h-5 w-5 text-[#FF9F0D] transition-colors group-hover:text-white" />
          </button>
          <button className="group">
            <Share2 className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
          </button>
        </div>
      </CardFooter>
    </Card>
         <Card className="w-[424px] border border-white bg-black text-white">
      <div className="aspect-[1.63/1]">
        <img
          src="/images/shawarma.png?height=350&width=424"
          alt="Food blog post"
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col gap-4 p-6">
        <time className="text-base text-[#FF9F0D]">10 February 2022</time>
        <h3 className="font-helvetica text-2xl font-bold leading-tight">
          Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
        </h3>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6">
        <Link href="#" className="text-base text-white hover:text-[#FF9F0D]">
          Learn More
        </Link>
        <div className="flex gap-4">
          <button className="group">
            <ThumbsUp className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
          </button>
          <button className="group">
            <ChatDots className="h-5 w-5 text-[#FF9F0D] transition-colors group-hover:text-white" />
          </button>
          <button className="group">
            <Share2 className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
          </button>
        </div>
      </CardFooter>
    </Card>
         </div>
        
        </div>
    </div>
  )
}

export default Blogs