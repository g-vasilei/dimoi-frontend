import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import Footer from '../../Components/Footer'

function User() {
   const { id } = useParams()
   const navigate = useNavigate()

   return (
      <div className='mt-5 min-h-[85vh] space-y-5 px-5 md:px-10 '>
         <div
            className='flex w-fit cursor-pointer items-center gap-3 rounded-md bg-slate-700 px-3 py-2 text-white'
            onClick={() => navigate('/users')}
         >
            <BsArrowLeft /> Πίσω
         </div>
         <div className='2xl:w-full 2xl:max-w-5xl'>
            <h1 className='before:a mt-8 text-2xl font-bold'>
               <span className='relative mb-5 inline-block before:absolute before:-bottom-2 before:left-0 before:block before:h-[2px] before:w-[100px] before:bg-black'>
                  <span className='relative'>Στοιχεία Χρήστη</span>
               </span>
            </h1>
            <div className='space-y-2'>
               <div className='text-sm text-gray-500'>Όνομα:</div>
               <div className='truncate rounded-md bg-white px-4 py-2 pr-2 shadow-sm'>Amarildo</div>
            </div>
            <div className='space-y-2'>
               <div className='text-sm text-gray-500'>Επώνυμο:</div>
               <div className='truncate rounded-md bg-white px-4 py-2 pr-2 shadow-sm'>Dritan</div>
            </div>
            <div className='space-y-2'>
               <div className='text-sm text-gray-500'>Email:</div>
               <div className='truncate rounded-md bg-white px-4 py-2 pr-2 shadow-sm'>amarildo@gmail.com</div>
            </div>
            <div className='space-y-2'>
               <div className='text-sm text-gray-500'>Admin:</div>
               <div className='truncate rounded-md bg-white px-4 py-2 pr-2 shadow-sm'>Ναι</div>
            </div>
         </div>
      </div>
   )
}

export default User
