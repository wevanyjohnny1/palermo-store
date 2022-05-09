import React from 'react';

export interface StoreState {
  products: Product[];
  categories: string[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface getAllProductsReturn {
  error: boolean;
  message: string;
  productsData: Product[] | null;
}

interface getProductReturn {
  error: boolean;
  message: string;
  productData: Product | null;
}

interface getAllCategoriesReturn {
  error: boolean;
  message: string;
  categoriesData: string[] | null;
}

export interface StoreContextState {
  getAllProducts: () => Promise<getAllProductsReturn>;
  getProduct: (id: number) => Promise<getProductReturn>;
  getAllCategories: () => Promise<getAllCategoriesReturn>;
  getProductsByCategory: (category: string) => Promise<getAllProductsReturn>;
}

export type StoreProviderProps = {
  children: React.ReactNode;
};
