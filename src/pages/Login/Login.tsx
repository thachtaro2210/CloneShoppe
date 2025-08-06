// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom'
// import { yupResolver } from '@hookform/resolvers/yup'
// import {  schema, type Schema } from '../../utils/rules'
// import Input from '../../Components/input'
// import { useMutation } from '@tanstack/react-query'
// import { LoginAccount } from '../../apis/auth.api'
// import { isAxiosUnprocessableEntityError } from '../../utils/utils'
// import type { ResponeApi } from '../../types/utils.type'
// type FormData = Omit<Schema, 'confirm_password'>
// const loginSchema = schema.omit(['confirm_password'])
// import { useNavigate } from 'react-router-dom'
// export default function Login() {
//   // const {register,handleSubmit,formState:{errors}}= useForm()
//   // const onSubmit = handleSubmit(data => {})
//   const navigate = useNavigate()
//   const {
//     register,

//     handleSubmit,
//     formState: { errors },
//     setError
//   } = useForm<FormData>({
//     resolver: yupResolver(loginSchema)
//   })
//   const loginAccountMutation = useMutation({
//     mutationFn: (body: Omit<FormData, 'confirm_password'>) => LoginAccount(body)
//   })
//   const onSubmit = handleSubmit((data) => {
//     loginAccountMutation.mutate(data, {
//       // onSuccess: (data) => {
//       //   console.log(data)
//       //    navigate('/')
//       // },
//        onSuccess: () => {
    
//         console.log('onSuccess', data)
//   alert('login ok')
//   navigate('/')
//       },
//       // onError: (error) => {
//       //   console.log(error)
//       //   if (isAxiosUnprocessableEntityError<ResponeApi<FormData>>(error)) {
//       //     const formError = error.response?.data.data
//       //     if (formError?.email) {
//       //       setError('email', {
//       //         message: formError.email,
//       //         type: 'Server'
//       //       })
//       //     }
//       //     if (formError?.password) {
//       //       setError('password', {
//       //         message: formError.password,
//       //         type: 'Server'
//       //       })
//       //     }
//       //   }
//       // }
//     })
//   })
//   return (
//     <div className='bg-orange-500'>
//       <div className='max-w-7xl mx-auto px-4'>
//         <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
//           <div className='lg:col-span-2 lg:col-start-4'>
//             <form onSubmit={onSubmit} className='p-10 rouded bg-white shadow-sm'noValidate>
//               <div className='text-2xl'>Đăng Nhập</div>
//               <Input
//                 name='email'
//                 register={register}
//                 type='email'
//                 className='mt-8'
//                 errorMessage={errors.email?.message}
//                 placeholder='Email'
//                 // rules={email}
//               />
//               <Input
//                 name='password'
//                 register={register}
//                 type='password'
//                 className='mt-2'
//                 errorMessage={errors.password?.message}
//                 placeholder='Password'
//                 // rules={rules.password}
//               />
//               <div className='mt-3'>
//                 <button type='submit' className='w-full text-center py-4 px-2 uppercase bg-red-400 text-white text-sm hover:bg-red-600'>
//                   Đăng Nhập
//                 </button>
//               </div>
//               <div className='mt-8 '>
//                 <div className='flex items-center justify-center'>
//                   <span className='text-gray-350'>Bạn chưa có tài khoản ?</span>
//                   <Link className='text-red-400 ml-1' to='/register'>
//                     Đăng Kí
//                   </Link>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, type Schema } from '../../utils/rules'
import Input from '../../Components/input'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])

export default function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  // 👉 Khi form hợp lệ, chuyển hướng ngay, không gọi API gì cả
  const onSubmit = handleSubmit((data) => {
    console.log('Đăng nhập thành công (giả lập)', data)
    navigate('/')
  })

  return (
    <div className='bg-orange-500'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={onSubmit} className='p-10 rounded bg-white shadow-sm' noValidate>
              <div className='text-2xl'>Đăng Nhập</div>

              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
              />

              <div className='mt-3'>
                <button type='submit' className='w-full text-center py-4 px-2 uppercase bg-red-400 text-white text-sm hover:bg-red-600'>
                  Đăng Nhập
                </button>
              </div>

              <div className='mt-8'>
                <div className='flex items-center justify-center'>
                  <span className='text-gray-350'>Bạn chưa có tài khoản?</span>
                  <Link className='text-red-400 ml-1' to='/register'>
                    Đăng Kí
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
