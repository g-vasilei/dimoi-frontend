import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Users() {
   const navigate = useNavigate()
   return (
      <div className='mt-5 min-h-[85vh] px-5 md:px-10'>
         <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div
               className='flex w-fit cursor-pointer items-center gap-3 rounded-md bg-slate-700 px-3 py-2 text-white'
               onClick={() => navigate('/')}
            >
               <BsArrowLeft /> Πίσω
            </div>
            <div
               className='flex w-fit cursor-pointer items-center gap-3 rounded-md bg-slate-700 px-3 py-2 text-white'
               onClick={() => navigate('/user/new')}
            >
               <AiOutlineUserAdd /> Προσθήκη Χρήστη
            </div>
         </div>
         <div className='mt-6 flex flex-col justify-start gap-4'>
            <div className='space-y-3 rounded-md bg-white p-5 shadow-md xl:grid xl:grid-cols-8 xl:space-y-0'>
               <div className='overflow-x-hidden xl:col-span-3'>
                  <span className='text-sm text-gray-500'>Όνομα:</span>
                  <div className='truncate pr-2'>Amarildo Dritan</div>
               </div>
               <div className='xl:col-span-3'>
                  <span className='text-sm text-gray-500'>email:</span>
                  <div className='truncate pr-2'>amarildo@gmail.com</div>
               </div>
               <div className='xl:col-span-1'>
                  <span className='text-sm text-gray-500'>isAdmin:</span>
                  <div>true</div>
               </div>
               <button
                  className='w-fit rounded-md bg-slate-500 py-2 px-3 text-white xl:col-span-1'
                  onClick={() => navigate('/user/1')}
               >
                  Προβολή
               </button>
            </div>
            <div className='space-y-3 rounded-md bg-white p-5 shadow-md xl:grid xl:grid-cols-8 xl:space-y-0'>
               <div className='overflow-x-hidden xl:col-span-3'>
                  <span className='text-sm text-gray-500'>Όνομα:</span>
                  <div className='truncate pr-2'>Klajdi Constandini</div>
               </div>
               <div className='xl:col-span-3'>
                  <span className='text-sm text-gray-500'>email:</span>
                  <div className='truncate pr-2'>klajdi@gmail.com</div>
               </div>
               <div className='xl:col-span-1'>
                  <span className='text-sm text-gray-500'>isAdmin:</span>
                  <div>false</div>
               </div>
               <button
                  className='w-fit rounded-md bg-slate-500 py-2 px-3 text-white xl:col-span-1'
                  onClick={() => navigate('/user/2')}
               >
                  Προβολή
               </button>
            </div>
         </div>
      </div>
   )
}

export default Users
