import { GraduationCap, Coffee, Users } from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <section className="relative w-full max-w-7xl mx-auto mt-[120px] px-4 py-24">
        {/* About Us Section */}
                  <div className="flex flex-wrap -mx-4 py-16">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                      <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <div className='row-span-2 w-[350px] h-[550px]'>
                        <Image src="/images/shawarma.png?height=560&width=350" alt="Tacos" width={350} height={550} className="rounded-lg" />
                        </div>
                        <Image src="/images/kabab2.png?height=271&width=309" alt="Fried food" width={300} height={300} className="rounded-lg" />
                        <Image src="/images/why2.png?height=382&width=309" alt="Salad" width={312} height={400} className="rounded-lg" />
                      </div>
                    </div>
                    <div className="w-full mt-[250px] md:w-1/2 px-4">
                      <h3 className="text-green-500 font-serif text-xl mb-2">About us</h3>
                      <h2 className="text-[48px] leading-[56px] text-black font-bold mb-8">Food is an important part Of a balanced Diet</h2>
                      <p className="text-gray-400 text-4 leading-8 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus.
                      </p>
                      <div className="flex space-x-4">
                        <button className="bg-green-700 w-[195px] h-[58px] text-white text-[18px] leading-[26px] px-12 py-4 rounded-md font-semibold">Show more</button>
                        <button className="flex items-center space-x-2 text-white">
                          <div className="bg-green-700 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className='text-black font-bold text-6'>Watch video</span>
                        </button>
                      </div>
                    </div>
                  </div>
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl font-bold text-gray-800 font-helvetica">
          Why Choose us
        </h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      {/* Background Image */}
      <div className="relative w-full h-96 mb-16">
        <Image
          src="/images/about2.png?height=384&width=1320"
          alt="Delicious food presentation"
          width={1325}
          height={390}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Best Chef */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50">
            <GraduationCap className="w-8 h-8 text-gray-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Best Chef</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          </p>
        </div>

        {/* 120 Item Food */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50">
            <Coffee className="w-8 h-8 text-gray-800" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">120 Item food</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          </p>
        </div>

        {/* Clean Environment */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50">
            <Users className="w-8 h-8 text-gray-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Clean Environment</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          </p>
        </div>
      </div>
    </section>
  )
}

