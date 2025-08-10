import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../Components/input'
import Button from '../../../Components/Button'
import { useForm } from 'react-hook-form'

export default function AsideFilter() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log('Filter data:', data)
  }

  return (
    <div className='py-4 px-2'>
      {/* Danh mục */}
      <Link to='/' className='flex items-center font-bold mb-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
          />
        </svg>
        Tất cả danh mục
      </Link>

      <div className='bg-gray-300 h-[1px] mb-4' />

      <ul className='text-sm mb-4'>
        <li className='py-1'>
          <Link to='/' className='relative pl-4 text-orange-500 font-semibold'>
            <span className='absolute left-0 top-1 w-2 h-2 bg-amber-700 rounded-full'></span>
            Thời trang nam
          </Link>
        </li>
        <li className='py-1'>
          <Link to='/' className='relative pl-4'>
            <span className='absolute left-0 top-1 w-2 h-2 bg-amber-700 rounded-full'></span>
            Thời trang nữ
          </Link>
        </li>
      </ul>

      {/* Bộ lọc */}
      <div className='uppercase font-bold text-sm mb-2 flex items-center'>
        <svg
          viewBox='0 0 15 15'
          className='w-3 h-4 fill-current stroke-current mr-2'
        >
          <polyline
            fill='none'
            points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeMiterlimit='10'
          />
        </svg>
        Bộ lọc tìm kiếm
      </div>

      <div className='bg-gray-300 h-[1px] my-3' />

      {/* Khoảng giá */}
      <div className='text-sm font-medium mb-2'>Khoảng giá</div>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <div className='flex items-center gap-2'>
          <Input
            type='text'
            placeholder='đ Từ'
            name='fromPrice'
            register={register}
            className='flex-1'
            classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm text-sm'
          />
          <span>-</span>
          <Input
            type='text'
            placeholder='đ Đến'
            name='toPrice'
            register={register}
            className='flex-1'
            classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm text-sm'
          />
        </div>
        <Button className='w-full py-1.5 uppercase bg-orange-600 text-white text-xs hover:bg-orange-500'>
          Áp dụng
        </Button>
      </form>

      <div className='bg-gray-300 h-[1px] my-4' />

      {/* Đánh giá */}
      <div className='text-sm font-medium mb-2'>Đánh giá</div>
      <ul className='space-y-2 mb-4'>
        {[5, 4].map((starCount) => (
          <li key={starCount}>
            <Link to='/' className='flex items-center text-sm'>
              {Array(starCount)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    viewBox='0 0 30 30'
                    className='w-4 h-4 text-yellow-400 fill-current mr-[1px]'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <polygon
                      points='14.9,1.2 18.6,10.4 28.5,11.1 21.1,17.5 23.4,27.3 14.9,22.2 6.4,27.3 8.7,17.5 1.3,11.1 11.2,10.4'
                      fill='#ffca11'
                      stroke='#ffa727'
                      strokeWidth='1'
                    />
                  </svg>
                ))}
              <span className='ml-1'>Trở lên</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='bg-gray-300 h-[1px] my-4' />

      <Button className='w-full py-2 uppercase bg-orange-600 text-white text-sm hover:bg-orange-500'>
        Xóa tất cả
      </Button>
    </div>
  )
}
