import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { logout } from '../apis/auth.api'
import { AppContext } from '../contexts/app.context'
import Popover from '../Components/Popover'

export default function Header() {
  const { setIsAuthenticated, isAuthenticated, user, setUser, cart, removeFromCart, clearCart } = useContext(AppContext)
  const navigate = useNavigate()

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      setIsAuthenticated(false)
      setUser(undefined)
      clearCart()
      localStorage.removeItem('access_token')
      navigate('/')
      toast.success('Đăng xuất thành công')
    },
    onError: (error) => {
      console.error('Logout failed:', error)
      toast.error('Đăng xuất thất bại')
    }
  })

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchQuery = (e.currentTarget.elements.namedItem('search') as HTMLInputElement).value
    if (searchQuery) {
      console.log('Search query:', searchQuery)
      // Example: navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  }

  return (
    <div className='pb-5 pl-2 bg-[linear-gradient(-180deg,#f53d2d,#f63)] text-white'>
      <div className='container'>
        <div className='flex justify-end'>
          <Popover
            as='span'
            className='flex items-center py-1 hover:text-gray-300 cursor-pointer'
            renderPopover={
              <div className='bg-white relative shadow-md rounded-lg border border-gray-200 w-full sm:max-w-[400px] text-sm'>
                <div className='flex flex-col py-2 px-3'>
                  <button className='py-2 px-3 hover:text-orange-500'>Tiếng Việt</button>
                  <button className='py-2 px-3 hover:text-orange-500 mt-1'>Tiếng Anh</button>
                </div>
              </div>
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
              />
            </svg>
            <span className='mx-1'>Tiếng Việt</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5' />
            </svg>
          </Popover>
          {isAuthenticated && (
            <Popover
              className='flex items-center py-1 hover:text-gray-300 cursor-pointer ml-6'
              renderPopover={
                <div className='bg-white relative shadow-md rounded-lg border border-gray-200'>
                  <Link
                    to='/profile'
                    className='block py-3 px-4 hover:bg-gray-100 bg-white hover:text-orange-500 w-full text-left text-sm font-medium'
                  >
                    Tài khoản của tôi
                  </Link>
                  <Link
                    to='/orders'
                    className='block py-3 px-4 hover:bg-gray-100 bg-white hover:text-orange-500 w-full text-left text-sm font-medium'
                  >
                    Đơn mua
                  </Link>
                  <button
                    className='block py-3 px-4 hover:bg-gray-100 bg-white hover:text-orange-500 w-full text-left text-sm font-medium'
                    onClick={() => logoutMutation.mutate()}
                  >
                    Đăng xuất
                  </button>
                </div>
              }
            >
              <div className='w-6 h-6 mr-2 flex-shrink-0'>
                <img
                  src='https://i.pinimg.com/736x/9b/9c/48/9b9c4891410751261b972009d1a4bf66.jpg'
                  alt='avatar'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div>{user?.username || 'User'}</div>
            </Popover>
          )}
          {!isAuthenticated && (
            <div className='flex items-center'>
              <Link to='/register' className='mx-3 capitalize hover:text-white/70'>
                Đăng kí
              </Link>
              <div className='border-r-[1px] border-r-white/40 h-4'></div>
              <Link to='/login' className='mx-3 capitalize hover:text-white/70'>
                Đăng nhập
              </Link>
            </div>
          )}
        </div>
        <div className='grid grid-cols-12 gap-2 items-end mt-2'>
          <Link to='/' className='col-span-2 ml-2'>
            <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 512 512'>
              <path
                fill='#ee4d2d'
                d='M463.9 171.5h-68.1v-21.2c0-38.2-31-69.2-69.2-69.2H185.5c-38.2 0-69.2 31-69.2 69.2v21.2H48.1c-8.1 0-14.6 6.6-14.6 14.6v238.2c0 8.1 6.6 14.6 14.6 14.6h415.8c8.1 0 14.6-6.6 14.6-14.6V186.1c.1-8.1-6.5-14.6-14.6-14.6zM185.5 110.1h141.1c22.1 0 40.2 18 40.2 40.2v21.2H145.3v-21.2c0-22.2 18-40.2 40.2-40.2z'
              />
              <path
                fill='#ffffff'
                d='M217.6 308.4c-11.7-6.5-16.9-16.3-15.2-30.4 1.9-15.6 11.9-23.5 27.7-23.5 6.5 0 12.8 1.4 18.8 4.1 6.2 2.9 11.3 6.9 15.2 12.2l17.2-13.5c-5.7-7.9-12.9-14-21.4-18.3-8.5-4.3-18.3-6.5-29.3-6.5-27.5 0-47.3 16.1-50.8 41.4-2.7 19.6 4.5 34.4 21.3 44.1 4.8 2.7 11.5 6.1 20 10.3 9.4 4.5 15.8 8.4 19.2 11.6 5.3 4.9 7.5 10.5 6.7 17.1-.8 6.7-4 11.9-9.5 15.5-5.5 3.6-12.5 5.4-20.8 5.4-14.7 0-26.4-5.5-34.8-16.5l-16.7 13.6c11.4 14.5 27.3 21.7 47.6 21.7 14.5 0 27.1-3.4 37.7-10.2 10.6-6.8 17-17.2 18.5-31.2 1.8-17.1-4.6-30.9-19-40.8-4.7-3.2-11.9-7.3-21.8-12.4zm119.1-47.5l-35.3 120.3h20.3l7.2-24.4h38.8l7.2 24.4h20.3l-35.3-120.3h-23.2zm-4.6 73.2l14.8-50.2 14.8 50.2h-29.6z'
              />
            </svg>
          </Link>
          <form className='col-span-9' onSubmit={handleSearch}>
            <div className='bg-white rounded-lg shadow-sm p-2 flex'>
              <input
                type='text'
                name='search'
                className='text-black px-4 py-2 border-none outline-none bg-transparent flex-1 text-sm'
                placeholder='Tìm kiếm sản phẩm...'
              />
              <button className='rounded-lg py-2 px-6 flex-shrink-0 bg-orange-500 hover:bg-orange-600 transition-colors duration-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='col-span-1 mb-2 justify-self-start'>
            <Popover
              renderPopover={
                <div className='bg-white relative shadow-lg rounded-lg border border-gray-200 w-full sm:max-w-[400px] text-sm'>
                  <div className='p-4'>
                    <div className='text-gray-800 font-semibold text-base mb-3'>
                      {cart.length > 0 ? 'Sản phẩm trong giỏ hàng' : 'Giỏ hàng trống'}
                    </div>
                    {cart.length > 0 && (
                      <>
                        <div className='max-h-[300px] overflow-y-auto'>
                          {cart.map((item) => (
                            <div
                              key={item.id}
                              className='flex items-center py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150'
                            >
                              <div className='flex-shrink-0 w-12 h-12'>
                                <img
                                  src={
                                    item.images && item.images.length > 1
                                      ? item.images[1]
                                      : 'https://i.pinimg.com/736x/9b/9c/48/9b9c4891410751261b972009d1a4bf66.jpg'
                                  }
                                  alt={item.title}
                                  className='w-full h-full object-cover rounded-md'
                                />
                              </div>
                              <div className='flex-grow ml-4'>
                                <Link
                                  to={`/products/${item.id}`}
                                  className='text-gray-800 font-medium truncate block hover:text-orange-500 transition-colors duration-200'
                                >
                                  {item.title}
                                </Link>
                                <div className='text-gray-500 text-xs mt-1'>Số lượng: {item.quantity}</div>
                              </div>
                              <div className='ml-4 flex-shrink-0'>
                                <span className='text-orange-600 font-semibold'>
                                  đ{(item.price * item.quantity).toLocaleString()}
                                </span>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className='ml-4 text-red-500 hover:text-red-600 transition-colors duration-200'
                                title='Xóa sản phẩm'
                              >
                                <svg
                                  className='w-5 h-5'
                                  fill='none'
                                  stroke='currentColor'
                                  viewBox='0 0 24 24'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                  />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className='mt-4 text-gray-800 font-semibold text-base'>
                          Tổng cộng: đ
                          {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
                        </div>
                      </>
                    )}
                    <div className='flex mt-4 items-center justify-between mr-2'>
                      <div className='text-gray-600 text-xs font-medium'>
                        {cart.reduce((total, item) => total + item.quantity, 0)} sản phẩm
                      </div>
                      <Link
                        to='/cart'
                        className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ml-2'
                      >
                        Xem giỏ hàng
                      </Link>
                    </div>
                  </div>
                </div>
              }
            >
              <div className='relative'>
                <Link to='/cart'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-8'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                    />
                  </svg>
                  {cart.length > 0 && (
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </Link>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
