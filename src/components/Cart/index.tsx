import React, { Fragment, useMemo } from 'react';
import { ScrollView, Text } from 'react-native';
import {
  CheckOutBox,
  CheckOutBoxDetails,
  CheckoutButton,
  CheckOutButtonBox,
  CheckoutButtonText,
  Container,
  PageTitle,
  TotalText,
  TotalValue,
} from './styles';

import { CartProps } from '../navigator/types';
import { ProductOnCardCard } from '../ProductOnCartCard';
import { EmptyCart } from '../EmptyCart';

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
    <>
      <Container>
        <PageTitle>Meu Carrinho</PageTitle>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {renderProductsList}
        </ScrollView> */}
        <EmptyCart onButtonPress={navigation.goBack} />
      </Container>
      {/* <CheckOutBox>
        <CheckOutBoxDetails
          style={{
            borderTopWidth: 1,
            borderTopColor: '#EBEBED',
            borderBottomWidth: 1,
            borderBottomColor: '#EBEBED',
          }}
        >
          <TotalText>Total:</TotalText>
          <TotalValue>$549.75</TotalValue>
        </CheckOutBoxDetails>

        <CheckOutButtonBox>
          <CheckoutButton>
            <CheckoutButtonText
              onPress={() => navigation.navigate('ConfirmationScreen')}
            >
              FINALIZAR COMPRA
            </CheckoutButtonText>
          </CheckoutButton>
        </CheckOutButtonBox>
      </CheckOutBox> */}
    </>
  );
};
