import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
export default function Login() {
  const {register,handleSubmit,formState:{errors}}= useForm() 
  const onSubmit = handleSubmit(data => {})

  
  return (
    <div className='bg-orange-500'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={onSubmit} className='p-10 rouded bg-white shadow-sm'>
                <div className="text-2xl">Đăng Nhập</div>
                <div className="mt-8">
                    <input type="email" name="email" className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='email' />
                    <div className="mt-1 text-red-600 min-h-[1rem] text-sm"></div>
                </div>
                 <div className="mt-2">
                    <input type="email" name="password" className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='password' />
                    <div className="mt-1 text-red-600 min-h-[1rem] text-sm"></div>
                </div>
                <div className="mt-3">
                  <button className="w-full text-center py-4 px-2 uppercase bg-red-400 text-white text-sm hover:bg-red-600">
                    Đăng Nhập
                  </button>
                </div>
                 <div className="mt-8 ">
                  <div className="flex items-center justify-center">
                    <span className='text-gray-350'>Bạn chưa có tài khoản ?</span>
                    <Link className='text-red-400 ml-1' to='/register'>Đăng Kí</Link>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
