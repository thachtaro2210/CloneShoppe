import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../../types/product.type';

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white shadow rounded-sm hover:translate-y-[-0.0625rem] hover:shadow-md duration-100 transition-transform">
        <div className="w-full pt-[100%] relative">
          <img
            src={product.images[1] || 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwu3ba1vhjvf5b_tn.webp'}
            alt={product.title}
            className="absolute top-0 left-0 bg-white w-full h-full object-cover"
          />
        </div>
        <div className="p-2 overflow-hidden">
          <div className="min-h-[1.75rem] line-clamp-2 text-sm">{product.title}</div>
          <div className="flex items-center mt-3">
            <div className="line-through max-w-[50%] text-gray-500 truncate">
              đ{product.original_price?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-orange-400 truncate ml-1">
              <span className="text-xs">đ</span>
              <span>{product.price.toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-[1px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  viewBox="0 0 30 30"
                  className={`w-3 h-3 ${
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
            <div className="text-xs text-gray-500 ml-1">Đã bán {product.sold || 0}+</div>
          </div>
        </div>
      </div>
    </Link>
  );
}