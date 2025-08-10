import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.0625rem] hover:shadow-md duration-100 transition-transform'>
        <div className='w-full pt-[100%] relative'>
          <img
            src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwu3ba1vhjvf5b_tn.webp'
            alt=''
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[1.75rem] line-clamp-2 text-sm'>
            Áo sơ mi nam ngắn tay ,chất vải lụa Thái cotton mềm mịn thoáng mát kiểu dáng trung niên TN LỤA MVP
          </div>
          <div className='flex items-center mt-3'>
            <div className='line-through max-w-[50%] text-gray-500 truncate'>đ2.000</div>
            <div className='text-orange-400 truncate ml-1'>
              <span className='text-xs'>đ</span>
              <span>1.500</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-between'>
            {/* Sao đánh giá */}
            <div className='flex items-center gap-[1px]'>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  viewBox='0 0 30 30'
                  className='w-3 h-3 text-yellow-400 fill-current'
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
            </div>

            {/* Số lượng đã bán */}
            <div className='text-xs text-gray-500 ml-1'>Đã bán 999+</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
