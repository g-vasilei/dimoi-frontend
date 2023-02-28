import React, { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice'

function Login() {
   const [showPassword, setShowPassword] = useState(false)
   const [formData, setFormData] = useState({
      email: '',
      password: '',
   })

   const navigate = useNavigate()

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }))
   }

   // Dispatch Login
   const dispatch = useDispatch()

   const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      const { email, password } = formData

      const userData = { email, password }

      dispatch(login(userData))
         .unwrap()
         .then(() => {
            navigate('/')
         })
         .catch((error: any) => console.log(error))
   }

   return (
      <div className='flex min-h-screen w-screen items-center justify-center px-4 md:px-0'>
         <div className='w-full rounded-lg border border-solid border-[#e8e8e8] bg-white py-16 px-8 md:w-96'>
            <h1 className='mb-10 text-center text-2xl font-bold'>City Maps</h1>
            <form className='flex flex-col gap-5'>
               <input
                  type='email'
                  className='w-full rounded-md border border-solid border-slate-900 p-2'
                  placeholder='Email'
                  name='email'
                  onChange={onChange}
               />
               <div className='relative'>
                  <input
                     type={showPassword ? 'text' : 'password'}
                     className='w-full rounded-md border border-solid border-slate-900 p-2'
                     placeholder='Κωδικός'
                     name='password'
                     onChange={onChange}
                  />
                  <span
                     className='absolute right-3 top-2/4 -translate-y-2/4'
                     onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                     {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
                  </span>
               </div>

               <button
                  type='submit'
                  className='mt-3 w-full rounded-md bg-slate-900 p-2 font-semibold text-white'
                  onClick={onSubmit}
               >
                  Είσοδος
               </button>
            </form>
         </div>
      </div>
   )
}

export default Login
