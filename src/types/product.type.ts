// src/types/product.type.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  original_price?: number;
  discount?: number;
  sold?: number;
  rating?: number;
  rating_count?: number;
  category_id: number;
  images: string[];
  shop_name: string;
  shop_rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductResponse {
  data: Product[];
  totalPages: number;
}