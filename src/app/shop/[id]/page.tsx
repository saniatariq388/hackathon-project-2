//src\app\shopDetails\page.tsx

import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import ShopDetails from '@/components/ShopDetails'
import React from 'react'

function page() {
  return (
    <>
      <div className='w-full '>
      <HeaderMenu pageName='shop' heroHeading='SHOP' /> 
      <ShopDetails/>
      <Footer/>
        </div>  
    </>
  )
}

export default page







// import { notFound } from 'next/navigation'
// import { client } from '@/sanity/lib/client'
// import ProductDetail from '@/components/ShopDetails'

// interface ProductPageProps {
//   params: {
//     id: string
//   },
//   searchParams: {
//     name: string
//     price: string
//     image: string
//     description: string
//   }
// }

// async function getProduct(id: string) {
//   return await client.fetch(
//     `*[_type == "food" && _id == $id][0]{
//       _id,
//       name,
//       'image': image.asset->url,
//       originalPrice,
//       price,
//       description,
//       category
//     }`,
//     { id }
//   )
// }

// export default async function ProductPage({ params, searchParams }: ProductPageProps) {
//   const productId = params.id
//   let product = await getProduct(productId)
  
//   if (!product) {
//     // Fallback to search params if Sanity fetch fails
//     product = {
//       _id: productId,
//       name: searchParams.name,
//       price: parseFloat(searchParams.price),
//       image: searchParams.image,
//       description: searchParams.description,
//       category: 'Unknown'
//     }
//   }

//   if (!product) {
//     notFound()
//   }

//   return <ProductDetail product={product} />
// }
