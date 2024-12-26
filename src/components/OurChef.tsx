import { chefs } from '@/constant/chefs'
import ChefCard from './ChefCard'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Chefs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {chefs.map((chef, index) => (
          <ChefCard key={index} name={chef.name} image={chef.image} />
        ))}
      </div>
    </div>
  )
}

