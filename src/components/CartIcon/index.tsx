import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Bag, Container, Quantity, QuantityCircle } from './styles';

import BagImage from '../../assets/images/bag.png';

export const CartIcon = () => {
  const navigator = useNavigation();
  return (
    <Pressable onPress={() => navigator.navigate('CartScreen')}>
      <Container>
        <Bag source={BagImage} />

        {/* wait */}
        <QuantityCircle>
          <Quantity>2</Quantity>
        </QuantityCircle>
      </Container>
    </Pressable>
  );
};
