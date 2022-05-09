import React, { useEffect, useMemo, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { useAtom } from 'jotai';
import {
  Carousel,
  CategoryButton,
  CategoryButtonTitle,
  CategorySelectContainer,
  CategorySelectTitle,
  Container,
  NewProductsContainer,
  NewProductsContainerTitle,
  PageHeader,
  PageTitle,
  ProductsList,
  GoToCartButtonBox,
  GoToCartButton,
  GoToCartButtonText,
} from './styles';

import { ProductCard } from '../ProductCard';
import { CartButton } from '../CartButton';
import { HomeProps } from '../navigator/types';
import { cartItemsListAtom } from '../atom/cartItemsList';
import { HorizontalDivider } from '../HorizontalDivider';
import { useStore } from '../../providers/store/storeProvider';
import { Product } from '../../providers/store/types';
import { LoadingContainer } from '../LoadingContainer';

export const Home = ({ navigation }: HomeProps) => {
  const [cartItemsList] = useAtom(cartItemsListAtom);
  const [products, setProducts] = useState<Product[] | null>([]);
  const [categories, setCategories] = useState<string[] | null>([]);
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(false);
  const [isCategoriesLoading, setIsCategoriesLoading] =
    useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState('newProducts');
  const [animation] = useState(new Animated.Value(0));

  const { getAllProducts, getAllCategories, getProductsByCategory } =
    useStore();

  const handleGetAllProducts = async () => {
    const allProductsResponse = await getAllProducts();
    setProducts(allProductsResponse.productsData);
    setIsProductsLoading(false);
  };

  const handleGetAllCategories = async () => {
    const allCategoriesResponse = await getAllCategories();
    setCategories(allCategoriesResponse.categoriesData);
    setIsCategoriesLoading(false);
  };

  const handleGetProductsByCategory = async () => {
    const getProductsByCategoryResponse = await getProductsByCategory(
      selectedCategory,
    );
    setProducts(getProductsByCategoryResponse.productsData);
    setIsProductsLoading(false);
  };

  useEffect(() => {
    setIsProductsLoading(true);
    setIsCategoriesLoading(true);

    handleGetAllCategories();
    handleGetAllProducts();
  }, []);

  useEffect(() => {
    setIsProductsLoading(true);
    if (selectedCategory !== 'newProducts') {
      handleGetProductsByCategory();
    } else {
      handleGetAllProducts();
    }
  }, [selectedCategory]);

  const openAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (cartItemsList.length > 0) {
      openAnimation();
    }
  }, [cartItemsList]);

  const renderCategoriesList = useMemo(() => {
    return categories?.map(category => {
      return (
        <CategoryButton
          selected={selectedCategory === category}
          key={category}
          onPress={() => setSelectedCategory(category)}
        >
          <CategoryButtonTitle selected={selectedCategory === category}>
            {category}
          </CategoryButtonTitle>
        </CategoryButton>
      );
    });
  }, [categories, selectedCategory]);

  const renderNewProductsList = useMemo(() => {
    const slicedProducts = products?.slice(0, 5);
    return slicedProducts?.map(product => {
      return (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          category={product.category}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      );
    });
  }, [products]);

  const renderProductsList = useMemo(() => {
    return products?.map(product => {
      return (
        <ProductCard
          isSmaller
          key={product.id}
          id={product.id}
          image={product.image}
          category={product.category}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      );
    });
  }, [products]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageHeader>
          <PageTitle>Produtos</PageTitle>
          <CartButton />
        </PageHeader>

        <CategorySelectContainer>
          <CategorySelectTitle>FILTRAR CATEGORIA</CategorySelectTitle>

          {!isCategoriesLoading ? (
            <Carousel>
              <>
                <CategoryButton
                  selected={selectedCategory === 'newProducts'}
                  onPress={() => setSelectedCategory('newProducts')}
                >
                  <CategoryButtonTitle
                    selected={selectedCategory === 'newProducts'}
                  >
                    Úiltimos
                  </CategoryButtonTitle>
                </CategoryButton>
                {renderCategoriesList}
              </>
            </Carousel>
          ) : (
            <LoadingContainer small />
          )}
        </CategorySelectContainer>

        <NewProductsContainer>
          <NewProductsContainerTitle>Novidades</NewProductsContainerTitle>
          {!isProductsLoading ? (
            <Carousel>{renderNewProductsList}</Carousel>
          ) : (
            <LoadingContainer />
          )}
        </NewProductsContainer>

        <HorizontalDivider />

        {!isProductsLoading && (
          <ProductsList>
            <NewProductsContainerTitle>Listagem</NewProductsContainerTitle>

            <ProductsList>{renderProductsList}</ProductsList>
          </ProductsList>
        )}
      </ScrollView>

      {cartItemsList.length > 0 && (
        <Animated.View
          style={{
            transform: [
              {
                translateY: animation,
              },
            ],
          }}
        >
          <GoToCartButtonBox>
            <DropShadow
              style={{
                shadowColor: 'rgb(194, 193, 248)',
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.3,
                shadowRadius: 5,
              }}
            >
              <GoToCartButton>
                <GoToCartButtonText
                  onPress={() => navigation.navigate('CartScreen')}
                >
                  IR PARA O CARRINHO
                </GoToCartButtonText>
              </GoToCartButton>
            </DropShadow>
          </GoToCartButtonBox>
        </Animated.View>
      )}
    </Container>
  );
};
