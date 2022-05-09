import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
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
import { cartItemsListAtom } from '../atom/cartItemsList';
import { cartTotalAtom } from '../atom/cartTotalAtom';

export const Cart = ({ navigation }: CartProps) => {
  const [cartItemsList] = useAtom(cartItemsListAtom);
  const [cartTotal] = useAtom(cartTotalAtom);

  const renderProductsList = useMemo(() => {
    return cartItemsList?.map(item => {
      return (
        <ProductOnCardCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      );
    });
  }, [cartItemsList]);

  return (
    <Container>
      <PageTitle>Meu Carrinho</PageTitle>

      {cartItemsList.length > 0 ? (
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
              <TotalValue>${Number(cartTotal.cost).toFixed(2)}</TotalValue>
            </CheckOutBoxDetails>

            <CheckOutButtonBox>
              <CheckoutButton>
                <CheckoutButtonText
                  onPress={() =>
                    navigation.navigate('ConfirmationScreen', {
                      value: {
                        ignoreCart: false,
                      },
                    })
                  }
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
  );
};
