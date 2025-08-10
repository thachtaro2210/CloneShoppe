import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.0625rem] hover:shadow-md duration-100 transition-transform'>
          <div className='w-full pt-[100%] relative'>
            <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwu3ba1vhjvf5b_tn.webp" alt=""  className='absolute top-0 left-0 bg-white w-full h-full object-cover'/>
          </div>
          <div className="p-2 overflow-hidden">
            <div className='min-h-[1/75rem] line-clamp-2 text-sm'>
            Áo sơ mi nam ngắn tay ,chất vải lụa Thái cotton mềm mịn thoáng mát kiểu dáng trung niên TN LỤA MVP
            </div>
            <div className="flex items-center mt-3">
              {/* .line-through.max-w-[50%].text-gray-500.truncate */}
              <div className='line-through max-w-[50%] text-gray-500 truncate'>
                đ2.00
              </div>
              <div className='text-orange-400 truncate ml-1'>
                <span className='text-xs'>đ

                </span>
                <span>2.00</span>
              </div>
            </div>
          </div>
      </div>
    </Link>
  )
}
