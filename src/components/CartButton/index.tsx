import React, { useEffect, useState } from 'react';
import { Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAtom } from 'jotai';
import { Bag, Container, Quantity, QuantityCircle } from './styles';

import BagImage from '../../assets/images/bag.png';
import { cartItemsListAtom } from '../atom/cartItemsList';
import { cartTotalAtom } from '../atom/cartTotalAtom';

export const CartButton = () => {
  const navigator = useNavigation();
  const [cartItemsList] = useAtom(cartItemsListAtom);
  const [cartTotal] = useAtom(cartTotalAtom);
  const [animation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    startAnimation();
  }, [cartTotal]);

  return (
    <Pressable onPress={() => navigator.navigate('CartScreen')}>
      <Container>
        <Bag source={BagImage} />
        {cartItemsList.length > 0 ? (
          <QuantityCircle>
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animation,
                  },
                ],
              }}
            >
              <Quantity>{cartTotal.quantity}</Quantity>
            </Animated.View>
          </QuantityCircle>
        ) : null}
      </Container>
    </Pressable>
  );
};
