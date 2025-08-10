import { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(AppContext);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Giỏ hàng của bạn</h1>
      {cart.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-lg text-gray-600 mb-4">Giỏ hàng trống</p>
          <Link
            to="/"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-200 py-4 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex-shrink-0 w-20 h-20">
                  <img
                    src={
                      item.images && item.images.length > 1
                        ? item.images[1]
                        : 'https://i.pinimg.com/736x/9b/9c/48/9b9c4891410751261b972009d1a4bf66.jpg'
                    }
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex-grow ml-6">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-lg font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 truncate"
                  >
                    {item.title}
                  </Link>
                  <div className="text-orange-600 font-semibold mt-1">
                    đ{item.price.toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={item.quantity <= 1}
                    title="Giảm số lượng"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-gray-800 font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200"
                    title="Tăng số lượng"
                  >
                    +
                  </button>
                </div>
                <div className="ml-6 text-orange-600 font-semibold">
                  đ{(item.price * item.quantity).toLocaleString()}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-6 text-red-500 hover:text-red-600 transition-colors duration-200"
                  title="Xóa sản phẩm"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
            >
              Xóa tất cả
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold text-gray-800">
                Tổng cộng: đ{totalPrice.toLocaleString()}
              </span>
              <button
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
                onClick={() => alert('Chức năng thanh toán đang phát triển!')}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}