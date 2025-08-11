import React, { useState, useEffect } from 'react';
import { getProducts, getCategories } from '../../apis/product.api';
import type { Product } from '../../types/product.type';
import AsideFilter from './AsideFilter';
import ProductComponent from './Product/Product';
import SortProductList from './SortProductList';
import { useTranslation } from 'react-i18next';

export default function ProductList() {
  const { t } = useTranslation('product'); // Sử dụng namespace 'product'
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{ category_id?: number; fromPrice?: number; toPrice?: number; rating?: number }>({});
  const productsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log("Fetching categories...");
        const categoriesResponse = await getCategories();
        setCategories(Array.isArray(categoriesResponse.data) ? categoriesResponse.data : []);
        console.log("✅ Categories loaded", categoriesResponse.data);

        console.log("Fetching products...");
        const productsResponse = await getProducts({
          sortBy,
          page: currentPage,
          limit: productsPerPage,
          ...filters
        });
        
        console.log("Raw data from API:", productsResponse.data);
        const fetchedProducts = Array.isArray((productsResponse.data as any).data)
          ? (productsResponse.data as any).data
          : [];
        if (fetchedProducts.length === 0) {
          console.warn("Warning: API returned empty product list for page", currentPage);
        }
        console.log(fetchedProducts);
        
        setProducts(fetchedProducts);
        console.log("✅ Products loaded", fetchedProducts);

        setTotalPages((productsResponse.data as any).totalPages || 1);
      } catch (err) {
        console.error("❌ Error fetching data:", err);
        setError(t('errorLoading')); // Dịch lỗi
        setProducts([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sortBy, currentPage, filters, t]);

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="bg-gray-200 py-6">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <AsideFilter setFilters={setFilters} categories={categories} />
          </div>
          <div className="col-span-9">
            <SortProductList
              sortBy={sortBy}
              setSortBy={setSortBy}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              loading={loading}
            />
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {loading ? (
                Array(productsPerPage)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="col-span-1 bg-gray-300 animate-pulse h-64 rounded-sm" />
                  ))
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <div className="col-span-1" key={product.id}>
                    <ProductComponent product={product} />
                  </div>
                ))
              ) : (
                <div>{t('noProductsFound')}</div> // Dịch "No products found"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}