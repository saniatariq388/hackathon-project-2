import React from 'react'
import Image from 'next/image'




export default function PartnersSection() {
    const partners = [
      {
        name: "Restaurant",
        logo: "/images/returant.png?height=100&width=200",
      },
      {
        name: "Bakery",
        logo: "/images/bakery.png?height=100&width=200",
      },
      {
        name: "Fork & Spoon",
        logo: "/images/folk.png?height=100&width=200",
      },
      {
        name: "Wolf Coffee",
        logo: "/images/coffee.png?height=100&width=200",
      },
      {
        name: "Bistro",
        logo: "/images/bist.png?height=100&width=200",
      },
      {
        name: "Bakery",
        logo: "/images/bakery2.png?height=100&width=200",
      },
    ]
  
    return (
      <section className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-16">
          <span className="text-[#195A00] font-['Miniver'] text-lg inline-block mb-4">
            Partners & Clients
          </span>
          <h2 className="text-[#333333] font-bold text-4xl md:text-5xl leading-tight">
            We work with the best people
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="w-full max-w-[200px] grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  