import { Cookie, WineIcon as GlassWine } from 'lucide-react'
import Image from 'next/image'


export default function WhyChooseUs() {
  return (
    <section className="w-full mt-[130px] py-24 ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Image Grid */}
          <div className="relative w-[559px] grid grid-cols-3 gap-4">
            <div className="col-span-2 transform hover:scale-105">
              <Image
                src="/images/shawarma.png?height=346&width=352"
                alt="Delicious tacos with vegetables"
                className="object-cover rounded-lg"
                width={360}
                height={350}
              />
            </div>
            <div className="mt-[185px] mr-4 transform hover:scale-105">
              <Image
                src="/images/burger.png?height=231&width=261"
                alt="Gourmet burger"
                className="object-cover rounded-lg"
                width={265}
                height={235}
              />
            </div>

              <div className="w-[559px] grid grid-cols-3 gap-4 ">
              <Image
                src="/images/kabab2.png?height=306&width=244"
                alt="Fried food with dip"
                className="object-cover rounded-lg transform hover:scale-105"
                width={250}
                height={300}
              />
              <Image
                src="/images/burger4.png?height=226&width=221"
                alt="Cheese burger"
                className="object-cover rounded-lg transform hover:scale-105"
                width={225}
                height={230}
              />
                <div className='space-y-4 '>
                <Image
                  src="/images/burger3.png?height=168&width=171"
                  alt="Plated burger"
                  className="object-cover rounded-lg transform hover:scale-105"
                  width={180}
                  height={170}
                />
                <Image
                  src="/images/salad1.png?height=166&width=161"
                  alt="Fresh salad"
                  className="object-cover rounded-lg transform hover:scale-105"
                  width={180}
                  height={170}
                /></div>
             
            </div>
          </div>

          {/* Right side - Content */}
          <div className=" w-[526px] mt-16 space-y-16">
            <div>
              <h3 className="text-[32px] leading-[40px] font-['Great_Vibes'] text-[#FF9F0D]">Why Choose us</h3>
              <h2 className="text-[48px] leading-[58px] font-bold  mt-2"><span className='text-[#FF9F0D]'>Ex</span>tra ordinary taste And Experienced</h2>
              <p className="text-white text-[16px] leading-[24px] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
                fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
                vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>

            {/* Icon Boxes */}
            <div>
            <div className="grid grid-cols-3 w-[374px] gap-4">
              <div className="bg-[#FF9F0D] w-[102px] h-[100px] p-6 rounded text-center">
                <Image src="/images/Hamburger.png" alt="burger" width={56} height={56} className="w-14 h-14 text-white mb-6" ></Image>
                <p className="text-white text-[18px] leading-[26px]">Fast</p>
              </div>
              <div className="bg-[#FF9F0D] w-[102px] h-[100px] p-6 rounded text-center">
                <Cookie className="w-14 h-14 text-white mb-6" />
                <p className="text-white">Lunch</p>
              </div>
              <div className="bg-[#FF9F0D] w-[102px] h-[100px] p-6 rounded text-center">
                <GlassWine className="w-14 h-14 text-white mb-6" />
                <p className="text-white">Dinner</p>
              </div>
            </div>

            {/* Experience Box */}
            <div className="w-[374px] h-[93px] bg-white p-6 mt-[55px] rounded flex items-center">
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#FF9F0D] " />
              <div className="ml-4">
                <h2 className="text-[48px] leading-[56px] font-bold text-[#FF9F0D]">30+</h2>
              </div>
              <div className="flex flex-col ml-8 items-center">
                
              <h4 className="text-[24px] leading-[32px] font-bold text-gray-900"> <span className="text-[16px] leading-[20px]">Years of</span> Experienced</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

