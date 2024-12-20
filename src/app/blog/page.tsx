import BlogPage from '@/components/BlogPage'
import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import React from 'react'

function page() {
  return (
    <>
     <div className='w-full'>
      <HeaderMenu />
      <BlogPage/>
      <Footer/>
     </div>
    </>
  )
}

export default page