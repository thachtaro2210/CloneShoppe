import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../pages/ProductList/Product/Product'; // Adjust the import path as provided
import type { Product as ProductType } from '../types/product.type';

// Function to randomly select N products
const getRandomProducts = (products: ProductType[], count: number): ProductType[] => {
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product'); // Replace with your actual API endpoint
        let data: ProductType[] = await response.json();
        // Fallback: Add sample real image URLs if API doesn't provide valid images
        data = data.map((product) => ({
          ...product,
          images: product.images?.[0]
            ? product.images
            : [
                // Sample real image URLs from Unsplash
                'https://images.unsplash.com/photo-1583743814966-8936f970b74b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1576566588028-4147f3848f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
              ],
        }));
        // Select 4 random products
        const randomProducts = getRandomProducts(data, 4);
        setFeaturedProducts(randomProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="homepage-container font-sans text-gray-800 bg-gray-100 overflow-x-hidden">
      {/* Hero Banner */}
      <section className="hero-banner relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-br from-red-400 to-yellow-300 overflow-hidden">
        <div className="hero-content z-10 text-white animate-fadeInUp">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Chào Mừng Đến Với Shop Của Chúng Tôi!</h1>
          <p className="hero-subtitle text-2xl md:text-3xl mb-6">Khám phá ưu đãi "vụ nổ lớn" với sản phẩm chất lượng cao, giá siêu hời!</p>
          <Link to="/products" className="hero-cta inline-block bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-110 transition-transform duration-300">Mua Ngay</Link>
        </div>
        <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black/20 animate-gradientShift"></div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-8 bg-white shadow-lg">
        <h2 className="section-title text-4xl font-bold text-red-500 text-center mb-6 relative">Sản Phẩm Nổi Bật</h2>
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full">Đang tải sản phẩm...</p>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="categories py-8 bg-gradient-to-br from-yellow-50 to-purple-100">
        <h2 className="section-title text-4xl font-bold text-red-500 text-center mb-6 relative">Danh Mục Sản Phẩm</h2>
        <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <Link to="/products?category=ao-thun" className="category-card flex flex-col items-center bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300 text-decoration-none text-gray-800">
            <img src="https://images.unsplash.com/photo-1583743814966-8936f970b74b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Áo Thun" className="w-full h-48 object-cover rounded-lg mb-2" />
            <span className="text-lg font-medium">Áo Thun</span>
          </Link>
          <Link to="/products?category=quan-jean" className="category-card flex flex-col items-center bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300 text-decoration-none text-gray-800">
            <img src="https://images.unsplash.com/photo-1542272604-787c3835531d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Quần Jean" className="w-full h-48 object-cover rounded-lg mb-2" />
            <span className="text-lg font-medium">Quần Jean</span>
          </Link>
          <Link to="/products?category=ao-somi" className="category-card flex flex-col items-center bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300 text-decoration-none text-gray-800">
            <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Áo Somi" className="w-full h-48 object-cover rounded-lg mb-2" />
            <span className="text-lg font-medium">Áo Somi</span>
          </Link>
          <Link to="/products?category=ao-khoac" className="category-card flex flex-col items-center bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300 text-decoration-none text-gray-800">
            <img src="https://images.unsplash.com/photo-1611312443401-741bd2d5b3db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Áo Khoác" className="w-full h-48 object-cover rounded-lg mb-2" />
            <span className="text-lg font-medium">Áo Khoác</span>
          </Link>
        </div>
      </section>

      {/* Deals Section */}
      <section className="deals py-8 text-center">
        <h2 className="section-title text-4xl font-bold text-red-500 mb-6 relative">Ưu Đãi Vụ Nổ Lớn</h2>
        <div className="deal-card max-w-4xl mx-auto rounded-xl overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60" alt="Flash Sale" className="deal-img w-full h-auto" />
          <div className="deal-content absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Flash Sale 50% Off</h3>
            <p className="text-lg">Kết thúc trong: 24 giờ</p>
            <Link to="/deals" className="deal-cta inline-block bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">Xem Ngay</Link>
          </div>
        </div>
      </section>

      {/* Footer Teaser */}
      <footer className="footer-teaser text-center py-6 bg-gray-800 text-white mt-8">
        <p>© 2025 Shop Của Tao. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;