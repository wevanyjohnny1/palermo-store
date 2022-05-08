import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAtom } from 'jotai';
import { Bag, Container, Quantity, QuantityCircle } from './styles';

import BagImage from '../../assets/images/bag.png';
import { cartListAtom } from '../atom/cartList';
import { cartTotalQuantityAtom } from '../atom/cartTotalQuantityAtom';

export const CartIcon = () => {
  const navigator = useNavigation();
  const [cartList] = useAtom(cartListAtom);
  const [cartTotalQuantity] = useAtom(cartTotalQuantityAtom);

  return (
    <Pressable onPress={() => navigator.navigate('CartScreen')}>
      <Container>
        <Bag source={BagImage} />
        {cartList.length > 0 ? (
          <QuantityCircle>
            {/* <Quantity>{cartList.length}</Quantity> */}
            <Quantity>{cartTotalQuantity}</Quantity>
          </QuantityCircle>
        ) : null}
      </Container>
    </Pressable>
  );
};
