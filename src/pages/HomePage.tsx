import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../pages/ProductList/Product/Product'; 
import type { Product as ProductType } from '../types/product.type';

const getRandomProducts = (products: ProductType[], count: number): ProductType[] => {
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80",
  ];

  // Auto change slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product');
        let data: ProductType[] = await response.json();
        data = data.map((product) => ({
          ...product,
          images: product.images?.[0]
            ? product.images
            : [
                "https://images.unsplash.com/photo-1583743814966-8936f970b74b?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=60",
              ],
        }));
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
      {/* Hero Banner with Slider */}
      <section className="hero-banner relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Slides */}
        <div className="absolute top-0 left-0 w-full h-full">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Content */}
        <div className="hero-content z-10 text-white animate-fadeInUp px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Chào Mừng Đến Với Shop Của Chúng Tôi!
          </h1>
          <p className="text-2xl md:text-3xl mb-6">
            Khám phá ưu đãi "vụ nổ lớn" với sản phẩm chất lượng cao, giá siêu hời!
          </p>
          <Link
            to="/products"
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-110 transition-transform duration-300"
          >
            Mua Ngay
          </Link>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 flex gap-2 justify-center w-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-8 bg-white shadow-lg">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-6 relative">
          Sản Phẩm Nổi Bật
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full">Đang tải sản phẩm...</p>
          )}
        </div>
      </section>

      {/* ... (các section khác giữ nguyên) */}
    </div>
  );
};

export default HomePage;
