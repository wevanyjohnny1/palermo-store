import React, { Fragment, useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useAtom } from 'jotai';
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
import { cartListAtom } from '../atom/cartList';

export const Cart = ({ navigation }: CartProps) => {
  const [cartList] = useAtom(cartListAtom);
  const renderProductsList = useMemo(() => {
    return cartList?.map(item => {
      return (
        <ProductOnCardCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      );
    });
  }, [cartList]);

  return (
    <>
      <Container>
        <PageTitle>Meu Carrinho</PageTitle>
        {cartList.length > 0 ? (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              {renderProductsList}
            </ScrollView>
            <CheckOutBox>
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
            </CheckOutBox>
          </>
        ) : (
          <EmptyCart onButtonPress={navigation.goBack} />
        )}
      </Container>
    </>
  );
};
