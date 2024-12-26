import Image from 'next/image'

interface ChefCardProps {
  name: string
  image: string
}

export default function ChefCard({ name, image }: ChefCardProps) {
  return (
    <div className="relative w-full h-[446px] bg-gray-200 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={`Chef ${name}`}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 text-center">
        <h3 className="font-helvetica font-bold text-xl text-gray-800 mb-1">{name}</h3>
        <p className="font-inter text-lg text-gray-800">Chef</p>
      </div>
    </div>
  )
}

