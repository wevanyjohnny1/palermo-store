import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
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
} from './styles';

import { ProductCard } from '../ProductCard';
import { CartIcon } from '../CartIcon';
import { CartProps } from '../navigator/types';

export const Cart = ({ navigation }: CartProps) => {
  const renderProductsList = useMemo(() => {
    const items = [
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
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
          key={Math.random()}
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
        <PageTitle>Meu Carrinho</PageTitle>
      </ScrollView>
    </Container>
  );
};
