import { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2'
import { toast } from 'react-toastify'

type FormType = {
   firstName: string
   lastName: string
   email: string
   password: string
   confirmPassword: string
   isAdmin: boolean | string
}

function CreateUser() {
   const navigate = useNavigate()
   const [showPassword, setShowPassword] = useState(false)
   const [showPassword2, setShowPassword2] = useState(false)

   //handle form submit
   const [inputValues, setInputValues] = useState<{ [x: string]: string }>()
   //const [inputValuesBool, setInputValuesBool] = useState<{ [x: string]: string | boolean }>()

   //handle form onChange
   const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget
      setInputValues((prevState) => ({ ...prevState, [name]: value }))
   }

   //handle form onChange
   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.currentTarget
      setInputValues((prevState) => ({ ...prevState, [name]: value }))
   }

   const handleFormSubmit = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()

      const data = {
         firstName: inputValues?.firstName,
         lastName: inputValues?.lastName,
         email: inputValues?.email,
         password: inputValues?.password,
         confirmPassword: inputValues?.confirmPassword,
         isAdmin: inputValues?.isAdmin === 'true' ? true : false,
      }

      if (data.firstName === '' || data.firstName === undefined) {
         toast.error('Παρακαλώ συμπληρώστε Όνομα')
         return
      }
      if (data.lastName === '' || data.lastName === undefined) {
         toast.error('Παρακαλώ συμπληρώστε Επώνυμο')
         return
      }
      if (data.email === '' || data.email === undefined) {
         toast.error('Παρακαλώ συμπληρώστε Email')
         return
      }
      if (data.password === '' || data.password === undefined) {
         toast.error('Παρακαλώ συμπληρώστε Κωδικό')
         return
      }
      if (data.confirmPassword === '' || data.confirmPassword === undefined) {
         toast.error('Παρακαλώ συμπληρώστε Κωδικό Επαλήθευσης')
         return
      }

      if (data.password !== data.confirmPassword) {
         toast.error('Οι κωδικοί δεν ταιριάζουν')
         return
      }

      console.log(data)
   }

   return (
      <div className='mt-5 min-h-[85vh] px-5 md:px-10'>
         <div>
            <div
               className='flex w-fit cursor-pointer items-center gap-3 rounded-md bg-slate-700 px-3 py-2 text-white'
               onClick={() => navigate('/users')}
            >
               <BsArrowLeft /> Πίσω
            </div>
            <h1 className='before:a mt-8 text-2xl font-bold'>
               <span className='relative inline-block before:absolute before:-bottom-2 before:left-0 before:block before:h-[2px] before:w-[100px] before:bg-black'>
                  <span className='relative'>Δημιουργία νέου χρήστη</span>
               </span>
            </h1>
            <form className='mt-10 flex flex-col gap-5 2xl:mx-auto'>
               <label className='flex flex-col gap-2 '>
                  Όνομα*
                  <input
                     type='text'
                     className='max-w-xl rounded-md bg-white px-2 py-1 text-black shadow-sm'
                     name='firstName'
                     value={inputValues?.firstName || ''}
                     onChange={handleInputChange}
                  />
               </label>
               <label className='flex flex-col gap-2 '>
                  Επώνυμο*
                  <input
                     type='text'
                     className='max-w-xl rounded-md bg-white px-2 py-1 text-black shadow-sm'
                     name='lastName'
                     value={inputValues?.lastName || ''}
                     onChange={handleInputChange}
                  />
               </label>
               <label className='flex flex-col gap-2 '>
                  Email*
                  <input
                     type='email'
                     className='max-w-xl rounded-md bg-white px-2 py-1 text-black shadow-sm'
                     name='email'
                     value={inputValues?.email || ''}
                     onChange={handleInputChange}
                  />
               </label>
               <label className='relative flex flex-col gap-2'>
                  Κωδικός*
                  <div className='relative max-w-xl'>
                     <input
                        type={showPassword ? 'text' : 'password'}
                        className='w-full rounded-md bg-white py-1 pl-2 pr-10 text-black shadow-sm'
                        name='password'
                        value={inputValues?.password || ''}
                        onChange={handleInputChange}
                     />
                     <span
                        className='absolute right-3 top-2/4 -translate-y-2/4 cursor-pointer'
                        onClick={() => setShowPassword((prevState) => !prevState)}
                     >
                        {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
                     </span>
                  </div>
               </label>
               <label className='relative flex flex-col gap-2'>
                  Επιβεβαίωση Κωδικού*
                  <div className='relative max-w-xl'>
                     <input
                        type={showPassword2 ? 'text' : 'password'}
                        className='w-full rounded-md bg-white py-1 pl-2 pr-10 text-black shadow-sm'
                        name='confirmPassword'
                        value={inputValues?.confirmPassword || ''}
                        onChange={handleInputChange}
                     />
                     <span
                        className='absolute right-3 top-2/4 -translate-y-2/4 cursor-pointer'
                        onClick={() => setShowPassword2((prevState) => !prevState)}
                     >
                        {showPassword2 ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
                     </span>
                  </div>
               </label>
               <label className='flex flex-col gap-2'>
                  Admin*
                  <select
                     className='max-w-xl rounded-md bg-white px-2 py-1 text-black'
                     name='isAdmin'
                     value={inputValues?.isAdmin || 'false'}
                     onChange={handleSelectChange}
                  >
                     <option value='true'>Ναι</option>
                     <option value='false'>Όχι</option>
                  </select>
               </label>

               <button
                  type='submit'
                  className='mt-4 w-fit rounded-md bg-slate-900 py-2 px-4 font-semibold text-white'
                  onClick={handleFormSubmit}
               >
                  Αποθήκευση
               </button>
            </form>
         </div>
      </div>
   )
}

export default CreateUser
