import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
   const [showSubMenu, setShowSubMenu] = useState(false)

   return (
      <div className='z-10 flex w-full items-center justify-end px-4 py-2'>
         <div className='relative'>
            <div
               className='cursor-pointer rounded-md bg-slate-900 py-2 px-4 text-white'
               onClick={() => setShowSubMenu((prevState) => !prevState)}
            >
               Username
            </div>
            <div
               className={`absolute top-[50px] right-4 z-[1] h-3 w-3 rotate-45 border-l border-t border-solid border-[#e8e8e8] bg-white ${
                  !showSubMenu && 'invisible '
               }`}
            ></div>
            <div
               className={`absolute top-14 right-0 rounded-md border border-solid border-[#e8e8e8] bg-white py-5 lg:w-52 ${
                  !showSubMenu && 'invisible '
               }`}
            >
               <ul className='text-md flex flex-col gap-4 font-semibold text-slate-900'>
                  <li className='px-3 text-slate-500'>Προφίλ</li>
                  <li className='px-3' onClick={() => setShowSubMenu(false)}>
                     <Link to='/profile'>Λογαριασμός</Link>
                  </li>
                  <li className='px-3' onClick={() => setShowSubMenu(false)}>
                     <Link to='/'>Αποθηκευμένα Σημεία</Link>
                  </li>
                  <li className='cursor-pointer border-t px-3 pt-4'>Αποσύνδεση</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Navbar
