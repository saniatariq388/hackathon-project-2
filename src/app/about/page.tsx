import About from '@/components/About'
import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import MenuItem from '@/components/MenuItem'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import React from 'react'

function page() {
  return (
    
    <>
    <HeaderMenu/>
    <About/>
    <Team/>
    <Testimonials/>
    <MenuItem/>
    <Footer/>
    </>
    
  )
}

export default page