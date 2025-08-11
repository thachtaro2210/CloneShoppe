import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import { Link } from 'react-router-dom'

export default function Profile() {
  const { user } = useContext(AppContext)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tài khoản của tôi</h1>
        
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.username || 'https://i.pinimg.com/736x/9b/9c/48/9b9c4891410751261b972009d1a4bf66.jpg'}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-orange-500"
          />
          <h2 className="text-xl font-semibold text-gray-700">{user?.username || 'Người dùng'}</h2>
          {/* <p className="text-gray-500 text-sm">{user?.email || 'email@example.com'}</p> */}
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600 font-medium">Tên người dùng</span>
            <span className="text-gray-800">{user?.username || 'Chưa cập nhật'}</span>
          </div>
          {/* <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600 font-medium">Email</span>
            <span className="text-gray-800">{user?.email || 'Chưa cập nhật'}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600 font-medium">Số điện thoại</span>
            <span className="text-gray-800">{user?.phone || 'Chưa cập nhật'}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600 font-medium">Địa chỉ</span>
            <span className="text-gray-800">{user?.address || 'Chưa cập nhật'}</span>
          </div> */}
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/profile/edit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Chỉnh sửa thông tin
          </Link>
          <Link
            to="/orders"
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Xem đơn hàng
          </Link>
        </div>
      </div>
    </div>
  )
}