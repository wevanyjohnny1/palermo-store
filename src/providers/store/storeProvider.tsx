import React, { createContext, useContext, useState } from 'react';
import api from '../../services/api';
import { StoreContextState, StoreProviderProps, StoreState } from './types';

const StoreContext = createContext({} as StoreContextState);

function StoreProvider({ children }: StoreProviderProps) {
  async function getAllProducts() {
    try {
      const getAllProductsResponse = await api.get('/products');

      if (getAllProductsResponse && getAllProductsResponse.data) {
        return {
          error: false,
          message: 'Produtos listados com sucesso!',
          productsData: getAllProductsResponse.data,
        };
      } else {
        return {
          error: true,
          message: 'Erro ao listar os produtos, tente novamente!',
          productsData: null,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message:
          'Erro ao listar os produtos, tente novamente em alguns instantes!',
        productsData: null,
      };
    }
  }

  async function getProduct(id: number) {
    try {
      const getProductResponse = await api.get(`/products/${id}`);

      if (getProductResponse && getProductResponse.data) {
        return {
          error: false,
          message: 'Produto exibido com sucesso!',
          productData: getProductResponse.data,
        };
      } else {
        return {
          error: true,
          message: 'Erro ao exibir o produto, tente novamente!',
          productData: null,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message:
          'Erro ao exibir o produto, tente novamente em alguns instantes!',
        productData: null,
      };
    }
  }

  async function getAllCategories() {
    try {
      const getAllCategoriesResponse = await api.get('/products/categories');

      if (getAllCategoriesResponse && getAllCategoriesResponse.data) {
        return {
          error: false,
          message: 'Categorias listadas com sucesso!',
          categoriesData: getAllCategoriesResponse.data,
        };
      } else {
        return {
          error: true,
          message: 'Erro ao listar as categorias, tente novamente!',
          categoriesData: null,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message:
          'Erro ao listar as categorias, tente novamente em alguns instantes!',
        categoriesData: null,
      };
    }
  }

  async function getProductsByCategory(category: string) {
    try {
      const getProductsByCategoryResponse = await api.get(
        `/products/category/${category}`,
      );

      if (getProductsByCategoryResponse && getProductsByCategoryResponse.data) {
        return {
          error: false,
          message: `Produtos da categoria ${category} listados com sucesso!`,
          productsData: getProductsByCategoryResponse.data,
        };
      } else {
        return {
          error: true,
          message: `Erro ao listar os produtos da categoria ${category}, tente novamente!`,
          productsData: null,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message: `Erro ao listar os produtos da categoria ${category}, tente novamente em alguns instantes!`,
        productsData: null,
      };
    }
  }

  return (
    <StoreContext.Provider
      value={{
        getAllProducts,
        getAllCategories,
        getProduct,
        getProductsByCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useStore(): StoreContextState {
  const context = useContext(StoreContext);

  if (!context) {
    console.log('useAuth must be used within an StoreProvider');
  }

  return context;
}

export { StoreProvider, useStore };
