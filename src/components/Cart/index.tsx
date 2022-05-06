import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Container, PageTitle } from './styles';

import { CartProps } from '../navigator/types';
import { ProductOnCardCard } from '../ProductOnCartCard';

export const Cart = ({ navigation }: CartProps) => {
  const renderProductsList = useMemo(() => {
    const items = [
      {
        name: 'Fjallraven - Foldsack',
        price: 109.95,
        quantity: 1,
      },
      {
        name: 'Fjallraven - Foldsack',
        price: 109.95,
        quantity: 1,
      },
      {
        name: 'Fjallraven - Foldsack',
        price: 109.95,
        quantity: 1,
      },
      {
        name: 'Fjallraven - Foldsack',
        price: 109.95,
        quantity: 1,
      },
      {
        name: 'Fjallraven - Foldsack',
        price: 109.95,
        quantity: 1,
      },
      {
        name: 'Fjallraven - Foldsack',
        price: 109.95,
        quantity: 1,
      },
      {
        name: 'Fjallraven - Foldsack',
        price: 109.95,
        quantity: 1,
      },
      {
        name: 'Fjallraven - Foldsack',
        price: 109.95,
        quantity: 1,
      },
    ];

    return items?.map(item => {
      return (
        <ProductOnCardCard
          key={Math.random()}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      );
    });
  }, []);

  return (
    <Container>
      <PageTitle>Meu Carrinho</PageTitle>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderProductsList}
      </ScrollView>
    </Container>
  );
};
