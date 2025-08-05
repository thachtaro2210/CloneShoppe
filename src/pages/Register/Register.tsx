import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from '../../utils/rules'
interface FormData {
  email : string,
  password : string,
  confirm_password : string
}

export default function Register() {
  const {register,handleSubmit,formState:{errors},watch,getValues}= useForm<FormData>() 
    const onSubmit = handleSubmit(data => {
      // console.log(data);
      
    },data => {
      const password = getValues('password')
      console.log(password);
      
    })
    const rules = getRules(getValues)
    console.log(errors);
    // const formValue = watch('password')
  return (
     <div className='bg-orange-500'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={onSubmit} className='p-10 rouded bg-white shadow-sm'>
                <div className="text-2xl">Đăng Kí</div>
                <div className="mt-8">
                    <input type="email"  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='email' {...register('email',rules.email)} />
                    <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">{errors.email?.message}</div>
                </div>
                 <div className="mt-2">
                    <input type="password" className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='password' {...register('password',rules.password)} autoComplete='on'/>
                    <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">{errors.password?.message}</div>
                </div>
                <div className="mt-2">
                    <input type="password"  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='Confirm Password' {...register('confirm_password',{...rules.confirm_password
                      
                    })}  autoComplete='on'/>
                    <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">{errors.confirm_password?.message}</div>
                </div>
                <div className="mt-3">
                  <button className="w-full text-center py-4 px-2 uppercase bg-red-400 text-white text-sm hover:bg-red-600">
                    Đăng Kí
                  </button>
                </div>
                <div className="mt-8 ">
                  <div className="flex items-center justify-center">
                    <span className='text-gray-350'>Bạn đã có tài khoản ?</span>
                    <Link className='text-red-400 ml-1' to='/login'>Đăng Nhập</Link>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
