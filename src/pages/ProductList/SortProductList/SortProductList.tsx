import React from 'react'

export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      {/* Hàng đầu tiên: các nút sắp xếp */}
      <div className='flex flex-wrap items-center justify-between gap-4'>
        {/* Nhóm các nút sắp xếp */}
        <div className='flex items-center flex-wrap gap-2'>
          <div className='text-sm'>Sắp xếp theo</div>
          <button className='h-8 px-4 capitalize bg-orange-500 text-white text-sm hover:bg-orange-400/80 text-center'>
            Phổ biến
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center'>
            Mới nhất
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center'>
            Bán chạy
          </button>
          <select className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100'>
            <option value='' disabled selected>
              Giá
            </option>
            <option value='price:asc'>Giá : thấp đến cao</option>
            <option value='price:desc'>Giá : cao đến thấp</option>
          </select>
        </div>

        {/* Pagination điều hướng */}
        <div className='flex items-center gap-2 text-sm'>
          <span className='text-orange-500 font-medium'>1</span>
          <span>/</span>
          <span className='text-gray-500'>2</span>
          <div className='flex ml-2'>
            {/* Prev Button - Disabled */}
            <button
              className='px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed'
              disabled
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
              </svg>
            </button>

            {/* Next Button - Enabled */}
            <button className='px-3 h-8 rounded-tr-sm rounded-br-sm bg-white hover:bg-slate-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
