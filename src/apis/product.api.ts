// src/apis/product.api.ts
import { httpInstance } from '../utils/http';
import type { Product } from '../types/product.type';

// Lấy danh sách sản phẩm với query parameters
export const getProducts = (params?: { sortBy?: string; page?: number; limit?: number }) => {
  return httpInstance.get<Product[]>('/products', { params });
};

// Other functions (getProduct, createProduct, etc.) remain unchanged
export const getProduct = (id: number) => {
  return httpInstance.get<Product>(`/products/${id}`);
};

export const createProduct = (product: Product) => {
  return httpInstance.post<Product>('/products', product);
};

export const updateProduct = (id: number, product: Product) => {
  return httpInstance.put<Product>(`/products/${id}`, product);
};

export const deleteProduct = (id: number) => {
  return httpInstance.delete(`/products/${id}`);
};
export const getCategories = () => {
  return httpInstance.get<{ id: number; name: string }[]>('/products/categories');
};