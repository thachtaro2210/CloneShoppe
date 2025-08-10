// src/api/product.api.ts
import { httpInstance } from '../utils/http';
import type { Product } from '../types/product.type'; // Thêm 'type' để chỉ import kiểu

// Lấy danh sách sản phẩm
export const getProducts = () => {
  return httpInstance.get<Product[]>('/products');
};

// Lấy sản phẩm theo ID
export const getProduct = (id: number) => {
  return httpInstance.get<Product>(`/products/${id}`);
};

// Tạo sản phẩm mới
export const createProduct = (product: Product) => {
  return httpInstance.post<Product>('/products', product);
};

// Cập nhật sản phẩm
export const updateProduct = (id: number, product: Product) => {
  return httpInstance.put<Product>(`/products/${id}`, product);
};

// Xóa sản phẩm
export const deleteProduct = (id: number) => {
  return httpInstance.delete(`/products/${id}`);
};