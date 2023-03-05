import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import Footer from '../../Components/Footer'

function User() {
   const { id } = useParams()
   const navigate = useNavigate()

   return (
      <div className='mt-5 min-h-[85vh] space-y-5 px-5 md:px-10 2xl:mx-auto 2xl:w-full 2xl:max-w-7xl'>
         <div
            className='flex w-fit cursor-pointer items-center gap-3 rounded-md bg-slate-700 px-3 py-2 text-white'
            onClick={() => navigate('/users')}
         >
            <BsArrowLeft /> Πίσω
         </div>
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
   )
}

export default User
