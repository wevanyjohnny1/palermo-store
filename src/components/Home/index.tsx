import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { useAtom } from 'jotai';
import {
  HorizontalList,
  CategoryButton,
  CategoryButtonTitle,
  CategorySelectContainer,
  CategorySelectTitle,
  Container,
  NewProductsContainer,
  NewProductsContainerTitle,
  PageHeader,
  PageTitle,
  Divider,
  ProductsList,
  GoToCartButtonBox,
  GoToCartButton,
  GoToCartButtonText,
} from './styles';

import { ProductCard } from '../ProductCard';
import { CartIcon } from '../CartIcon';
import { HomeProps } from '../navigator/types';
import { cartListAtom } from '../atom/cartList';

export const Home = ({ navigation }: HomeProps) => {
  const [cartList] = useAtom(cartListAtom);
  const renderProductsList = useMemo(() => {
    const items = [
      {
        id: 1,
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        id: 2,
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        id: 3,
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        id: 4,
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        id: 5,
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        id: 6,
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        id: 7,
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        id: 8,
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
    ];

    return items?.map(item => {
      return (
        <ProductCard
          isSmaller
          key={item.id}
          id={item.id}
          category={item.category}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      );
    });
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageHeader>
          <PageTitle>Produtos</PageTitle>
          <CartIcon />
        </PageHeader>

        <CategorySelectContainer>
          <CategorySelectTitle>FILTRAR CATEGORIA</CategorySelectTitle>

          <HorizontalList>
            <CategoryButton selected>
              <CategoryButtonTitle selected>Últimos</CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
          </HorizontalList>
        </CategorySelectContainer>

        <NewProductsContainer>
          <NewProductsContainerTitle>Novidades</NewProductsContainerTitle>

          <HorizontalList>
            <ProductCard
              id={1}
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
            <ProductCard
              id={2}
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
            <ProductCard
              id={3}
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
            <ProductCard
              id={4}
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
            <ProductCard
              id={5}
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
          </HorizontalList>
        </NewProductsContainer>

        <Divider />

        <ProductsList>
          <NewProductsContainerTitle>Listagem</NewProductsContainerTitle>

          <ProductsList>{renderProductsList}</ProductsList>
        </ProductsList>
      </ScrollView>
      {cartList.length > 0 && (
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
      )}
    </Container>
  );
};
