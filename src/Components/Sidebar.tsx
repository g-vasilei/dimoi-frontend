import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'

function Sidebar() {
   const [showSidebar, setShowSidebar] = useState(false)
   return (
      <>
         <div
            className='absolute left-4 top-[0.75rem] z-20 xl:hidden'
            onClick={() => setShowSidebar((prevState) => !prevState)}
         >
            {showSidebar ? (
               <TfiClose fill='white' className='text-2xl' />
            ) : (
               <RxHamburgerMenu className='fill-slate-900 text-3xl' />
            )}
         </div>
         <div
            className={`ease absolute z-10 min-h-screen w-full bg-slate-800 transition-all duration-300 lg:w-80 ${
               showSidebar ? 'top-0 left-0' : '-left-full'
            }`}
         >
            <div className='flex min-h-screen w-full flex-col items-center justify-center gap-10 lg:mt-16 lg:min-h-0 lg:items-start lg:justify-start lg:pl-2 xl:fixed xl:left-0 xl:mt-0 xl:min-h-screen xl:w-64 xl:bg-slate-800 xl:pt-8 2xl:w-80'>
               <h2 className='px-4 text-3xl text-white' onClick={() => setShowSidebar(false)}>
                  <Link to='/'>City Maps</Link>
               </h2>
               <ul className='flex flex-col gap-8 font-semibold text-white'>
                  <li className='rounded-md px-4 py-2 hover:bg-slate-400' onClick={() => setShowSidebar(false)}>
                     <Link to='/' className='flex cursor-pointer items-center gap-3'>
                        <FiHome /> Αρχική
                     </Link>
                  </li>
                  <li
                     className='flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 hover:bg-slate-400'
                     onClick={() => setShowSidebar(false)}
                  >
                     <Link to='/statistics' className='flex cursor-pointer items-center gap-3'>
                        <FiTrendingUp />
                        Στατιστικά
                     </Link>
                  </li>
                  <li
                     className='flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 hover:bg-slate-400'
                     onClick={() => setShowSidebar(false)}
                  >
                     <Link to='/reports' className='flex cursor-pointer items-center gap-3'>
                        <FiCompass />
                        Αναφορές
                     </Link>
                  </li>
                  <li
                     className='flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 hover:bg-slate-400'
                     onClick={() => setShowSidebar(false)}
                  >
                     <Link to='/favorites' className='flex cursor-pointer items-center gap-3'>
                        <FiStar />
                        Αγαπημένα
                     </Link>
                  </li>
                  <li
                     className='flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 hover:bg-slate-400'
                     onClick={() => setShowSidebar(false)}
                  >
                     <Link to='/settings' className='flex cursor-pointer items-center gap-3'>
                        <FiSettings />
                        Ρυθμίσεις
                     </Link>
                  </li>
                  <li
                     className='flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 hover:bg-slate-400'
                     onClick={() => setShowSidebar(false)}
                  >
                     <Link to='/users' className='flex cursor-pointer items-center gap-3'>
                        <AiOutlineUser />
                        Χρήστες
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </>
   )
}

export default Sidebar
