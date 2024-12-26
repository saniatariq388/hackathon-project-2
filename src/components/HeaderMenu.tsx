'use client'

import { useState } from 'react'
import { MicroscopeIcon as MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [activePath, setActivePath] = useState('home')

  const navigation = [
    { name: 'Home', path: 'home' },
    { name: 'Menu', path: 'menu' },
    { name: 'Blog', path: 'blog' },
    { name: 'Pages', path: 'pages' },
    { name: 'About', path: 'about' },
    { name: 'Shop', path: 'shop' },
    { name: 'Contact', path: 'contact' },
  ]

  return (
   <div>
     <div className='relative w-full h-[500px]'>
     <div className="absolute z-100 w-full h-[500px]">

          {/* yaha error h */}
        <Image src="/images/back2.png" alt="back" layout="fill" objectFit="cover"></Image> 
      {/* Navigation Bar */}
      <nav className=" absolute top-0 left-0 w-full z-1 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="text-2xl font-bold text-white"
              >
                Food<span className="text-[#FF9F0D]">tuck</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={`/`}
                    className={`${
                      activePath === item.path
                        ? 'text-[#FF9F0D] font-bold'
                        : 'text-white hover:text-[#FF9F0D]'
                    } text-base transition-colors duration-200 cursor-pointer`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
                <UserIcon className="h-6 w-6" />
              </button>
              <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
                <ShoppingBagIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="h-[410px] w-full">
       
        <div className="relative flex h-full flex-col items-center justify-center space-y-4">
          <h1 className="text-5xl font-bold text-white"></h1>
          <div className="flex items-center space-x-2 text-lg">
            <Link href="/" className="text-white hover:text-[#FF9F0D]">
              Home
            </Link>
            <span className="text-white">&gt;</span>
            <span className="text-[#FF9F0D]">menu</span>
          </div>
        </div>
      </div>
    </div>
     </div>
   </div>
  )
}



// 'use client'

// import { useState, useEffect } from 'react'
// import { MicroscopeIcon as MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

// export default function Header() {
//   const router = useRouter()

//   // Navigation items
//   const navigation = [
//     { name: 'Home', path: 'home' },
//     { name: 'Menu', path: 'menu' },
//     { name: 'Blog', path: 'blog' },
//     { name: 'Pages', path: 'pages' },
//     { name: 'About', path: 'about' },
//     { name: 'Shop', path: 'shop' },
//     { name: 'Contact', path: 'contact' },
//   ]

//   // Dynamically set the heading and breadcrumb based on the current path
//   const getHeadingAndBreadcrumb = (path: string) => {
//     switch (path) {
//       case 'home':
//         return { heading: 'Welcome to Foodtuck', breadcrumb: 'Home' }
//       case 'menu':
//         return { heading: 'Our Menu', breadcrumb: 'Menu' }
//       case 'blog':
//         return { heading: 'Our Blog', breadcrumb: 'Blog' }
//       case 'pages':
//         return { heading: 'Pages', breadcrumb: 'Pages' }
//       case 'about':
//         return { heading: 'About Us', breadcrumb: 'About' }
//       case 'shop':
//         return { heading: 'Our Shop', breadcrumb: 'Shop' }
//       case 'contact':
//         return { heading: 'Contact Us', breadcrumb: 'Contact' }
//       default:
//         return { heading: 'Page Not Found', breadcrumb: '404' }
//     }
//   }

//   // Extract path from current URL
//   const path = router.pathname.split('/')[1] || 'home'
//   const { heading, breadcrumb } = getHeadingAndBreadcrumb(path)

//   return (
//     <div>
//       <div className='relative w-full h-[500px]'>
//         <div className="absolute z-100 w-full h-[500px]">
//           <Image src="/images/back2.png" alt="back" layout="fill" objectFit="cover" />
//           {/* Navigation Bar */}
//           <nav className=" absolute top-0 left-0 w-full z-1 px-4 md:px-6 lg:px-8">
//             <div className="mx-auto max-w-7xl">
//               <div className="flex h-16 items-center justify-between">
//                 {/* Logo */}
//                 <div className="flex-shrink-0">
//                   <Link href="/" className="text-2xl font-bold text-white">
//                     Food<span className="text-[#FF9F0D]">tuck</span>
//                   </Link>
//                 </div>

//                 {/* Navigation Links */}
//                 <div className="hidden md:block">
//                   <div className="ml-10 flex items-center space-x-8">
//                     {navigation.map((item) => (
//                       <Link
//                         key={item.name}
//                         href={`/${item.path}`}
//                         className={`${
//                           path === item.path
//                             ? 'text-[#FF9F0D] font-bold'
//                             : 'text-white hover:text-[#FF9F0D]'
//                         } text-base transition-colors duration-200`}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Right side icons */}
//                 <div className="flex items-center space-x-4">
//                   <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
//                     <MagnifyingGlassIcon className="h-6 w-6" />
//                   </button>
//                   <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
//                     <UserIcon className="h-6 w-6" />
//                   </button>
//                   <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
//                     <ShoppingBagIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </nav>

//           {/* Hero Section */}
//           <div className="h-[410px] w-full">
//             <div className="relative flex h-full flex-col items-center justify-center space-y-4">
//               <h1 className="text-5xl font-bold text-white">{heading}</h1>
//               <div className="flex items-center space-x-2 text-lg">
//                 <Link href="/" className="text-white hover:text-[#FF9F0D]">
//                   Home
//                 </Link>
//                 <span className="text-white">&gt;</span>
//                 <span className="text-[#FF9F0D]">{breadcrumb}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }











