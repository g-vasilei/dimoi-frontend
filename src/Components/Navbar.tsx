import { useState } from 'react'

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
               className={`absolute top-14 right-0 rounded-md border border-solid border-[#e8e8e8] bg-white px-3 py-5 lg:w-52 ${
                  !showSubMenu && 'invisible '
               }`}
            >
               <ul className='text-md flex flex-col gap-4 font-semibold text-slate-900'>
                  <li>Προφίλ</li>
                  <li>Locate Me</li>
                  <li>Λογαριασμός</li>
                  <li>Αποθηκευμένα Σημεία</li>
                  <li>Αποσύνδεση</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Navbar
