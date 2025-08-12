// src/pages/HomePage.tsx (hoặc HomePage.jsx tùy theo thư mục của bạn)
import React from 'react';
import { Link } from 'react-router-dom'; // Giả sử bạn dùng react-router cho navigation

const HomePage = () => {
  return (
    <div className="homepage-container font-sans text-gray-800 bg-gray-100 overflow-x-hidden">
      {/* Hero Banner - Phần đầu trang bùng nổ với animation */}
      <section className="hero-banner relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-br from-red-400 to-yellow-300 overflow-hidden">
        <div className="hero-content z-10 text-white animate-fadeInUp">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Chào Mừng Đến Với Shop Của Chúng Tôi!</h1>
          <p className="hero-subtitle text-2xl md:text-3xl mb-6">Khám phá ưu đãi "vụ nổ lớn" với sản phẩm chất lượng cao, giá siêu hời!</p>
          <Link to="/products" className="hero-cta inline-block bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-110 transition-transform duration-300">Mua Ngay</Link>
        </div>
        <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black/20 animate-gradientShift"></div>
      </section>

      {/* Featured Products - Sản phẩm nổi bật với carousel-like */}
      <section className="featured-products py-8 bg-white shadow-lg">
        <h2 className="section-title text-4xl font-bold text-red-500 text-center mb-6 relative">Sản Phẩm Nổi Bật</h2>
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="product-card bg-white rounded-xl p-4 text-center hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <img src="https://via.placeholder.com/300x300?text=Áo+Thun" alt="Áo Thun" className="product-img w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Áo Thun Cotton Basic</h3>
            <p className="price text-red-500 font-bold text-lg mt-2">149.000 VNĐ</p>
            <Link to="/products/1" className="add-to-cart block mt-4 bg-green-400 text-white px-4 py-2 rounded-full hover:bg-red-500 transition-colors">Thêm Vào Giỏ</Link>
          </div>
          <div className="product-card bg-white rounded-xl p-4 text-center hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <img src="https://via.placeholder.com/300x300?text=Quần+Jean" alt="Quần Jean" className="product-img w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Quần Jean Skinny</h3>
            <p className="price text-red-500 font-bold text-lg mt-2">349.000 VNĐ</p>
            <Link to="/products/2" className="add-to-cart block mt-4 bg-green-400 text-white px-4 py-2 rounded-full hover:bg-red-500 transition-colors">Thêm Vào Giỏ</Link>
          </div>
          <div className="product-card bg-white rounded-xl p-4 text-center hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <img src="https://via.placeholder.com/300x300?text=Áo+Somi" alt="Áo Somi" className="product-img w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Áo Somi Hàn Quốc</h3>
            <p className="price text-red-500 font-bold text-lg mt-2">299.000 VNĐ</p>
            <Link to="/products/3" className="add-to-cart block mt-4 bg-green-400 text-white px-4 py-2 rounded-full hover:bg-red-500 transition-colors">Thêm Vào Giỏ</Link>
          </div>
          <div className="product-card bg-white rounded-xl p-4 text-center hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <img src="https://via.placeholder.com/300x300?text=Áo+Khoác" alt="Áo Khoác" className="product-img w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Áo Khoác Bomber</h3>
            <p className="price text-red-500 font-bold text-lg mt-2">459.000 VNĐ</p>
            <Link to="/products/4" className="add-to-cart block mt-4 bg-green-400 text-white px-4 py-2 rounded-full hover:bg-red-500 transition-colors">Thêm Vào Giỏ</Link>
          </div>
        </div>
      </section>

      {/* Categories - Danh mục sản phẩm với hover effect */}
      <section className="categories py-8 bg-gradient-to-br from-yellow-50 to-purple-100">
        <h2 className="section-title text-4xl font-bold text-red-500 text-center mb-6 relative">Danh Mục Sản Phẩm</h2>
        <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <Link to="/products?category=ao-thun" className="category-card flex flex-col items-center bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300 text-decoration-none text-gray-800">
            <img src="https://via.placeholder.com/200x200?text=Áo+Thun" alt="Áo Thun" className="w-full h-48 object-cover rounded-lg mb-2" />
            <span className="text-lg font-medium">Áo Thun</span>
          </Link>
          <Link to="/products?category=quan-jean" className="category-card flex flex-col items-center bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300 text-decoration-none text-gray-800">
            <img src="https://via.placeholder.com/200x200?text=Quần+Jean" alt="Quần Jean" className="w-full h-48 object-cover rounded-lg mb-2" />
            <span className="text-lg font-medium">Quần Jean</span>
          </Link>
          <Link to="/products?category=ao-somi" className="category-card flex flex-col items-center bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300 text-decoration-none text-gray-800">
            <img src="https://via.placeholder.com/200x200?text=Áo+Somi" alt="Áo Somi" className="w-full h-48 object-cover rounded-lg mb-2" />
            <span className="text-lg font-medium">Áo Somi</span>
          </Link>
          <Link to="/products?category=ao-khoac" className="category-card flex flex-col items-center bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300 text-decoration-none text-gray-800">
            <img src="https://via.placeholder.com/200x200?text=Áo+Khoác" alt="Áo Khoác" className="w-full h-48 object-cover rounded-lg mb-2" />
            <span className="text-lg font-medium">Áo Khoác</span>
          </Link>
        </div>
      </section>

      {/* Deals Section - Ưu đãi đặc biệt với countdown timer (giả lập) */}
      <section className="deals py-8 text-center">
        <h2 className="section-title text-4xl font-bold text-red-500 mb-6 relative">Ưu Đãi Vụ Nổ Lớn</h2>
        <div className="deal-card max-w-4xl mx-auto rounded-xl overflow-hidden relative">
          <img src="https://via.placeholder.com/600x300?text=Flash+Sale" alt="Flash Sale" className="deal-img w-full h-auto" />
          <div className="deal-content absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Flash Sale 50% Off</h3>
            <p className="text-lg">Kết thúc trong: 24 giờ</p>
            <Link to="/deals" className="deal-cta inline-block bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">Xem Ngay</Link>
          </div>
        </div>
      </section>

      {/* Footer Teaser - Phần chân trang teaser */}
      <footer className="footer-teaser text-center py-6 bg-gray-800 text-white mt-8">
        <p>© 2025 Shop Của Tao. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;