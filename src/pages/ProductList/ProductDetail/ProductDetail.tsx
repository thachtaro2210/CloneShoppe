import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AppContext } from '../../../contexts/app.context';
import { getProduct } from '../../../apis/product.api';
import type { Product } from '../../../types/product.type';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1); // State để quản lý số lượng

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(Number(id)),
    select: (response) => response.data,
    enabled: !!id && !isNaN(Number(id)),
  });

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity }); // Truyền product kèm quantity
      toast.success(`Đã thêm ${quantity} ${product.title} vào giỏ hàng`, {
        position: 'top-center',
        autoClose: 2000,
      });
      setQuantity(1); // Reset số lượng sau khi thêm
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity)); // Đảm bảo số lượng không nhỏ hơn 1
  };

  if (!id || isNaN(Number(id))) {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-red-500 text-lg font-semibold">ID sản phẩm không hợp lệ</p>
            <Link to="/products" className="mt-4 inline-block text-blue-500 hover:underline">
              Quay lại danh sách sản phẩm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600 text-lg animate-pulse">Đang tải...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-red-500 text-lg font-semibold">{error?.message || 'Sản phẩm không tồn tại'}</p>
            <Link to="/products" className="mt-4 inline-block text-blue-500 hover:underline">
              Quay lại danh sách sản phẩm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto">
        <div className="mb-6 text-sm text-gray-600">
          <Link to="/products" className="text-blue-500 hover:underline font-medium">
            Sản phẩm
          </Link>{' '}
          &gt; <span className="text-gray-800">{product.title}</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <div className="w-full pt-[100%] relative rounded-lg overflow-hidden shadow-sm">
                <img
                  src={
                    product.images && product.images.length > 1
                      ? product.images[1]
                      : 'https://i.pinimg.com/736x/9b/9c/48/9b9c4891410751261b972009d1a4bf66.jpg'
                  }
                  alt={product.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {product.images.map((img, index) => (
                    <img
                      key={img}
                      src={img}
                      alt={`${product.title} thumbnail ${index}`}
                      className="w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-200"
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="col-span-12 md:col-span-7">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      viewBox="0 0 30 30"
                      className={`w-5 h-5 ${
                        star <= (product.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="14.9,1.2 18.6,10.4 28.5,11.1 21.1,17.5 23.4,27.3 14.9,22.2 6.4,27.3 8.7,17.5 1.3,11.1 11.2,10.4"
                        fill="#ffca11"
                        stroke="#ffa727"
                        strokeWidth="1"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-3 text-gray-600 text-sm">
                  {product.rating || 0} ({product.rating_count || 0} đánh giá) | Đã bán {product.sold || 0}+
                </span>
              </div>
              <div className="mb-6">
                <div className="text-orange-600 text-2xl md:text-3xl font-bold">
                  đ{product.price.toLocaleString()}
                </div>
                {product.original_price && (
                  <div className="line-through text-gray-500 text-base mt-1">
                    đ{product.original_price.toLocaleString()}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Giảm số lượng"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-gray-800 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200"
                    title="Tăng số lượng"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div className="text-gray-600 text-sm">
                Cửa hàng: {product.shop_name} ({product.shop_rating} sao)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}