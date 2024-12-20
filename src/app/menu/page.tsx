
import FoodCategory from '@/components/FoodCategory'
import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import Partner from '@/components/Partner'
import StartardMenu from '@/components/StartardMenu'

export default function Home() {
  return (
    <>
   <div className='w-full '>
   <HeaderMenu />
   <StartardMenu/>
   <Partner />
   <Footer bgColorFirstDiv="black" textColor="white"/>
   </div>
    </>
  )
}

