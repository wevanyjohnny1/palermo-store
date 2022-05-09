import React from 'react';
import { SafeAreaView } from 'react-native';

import { Cart } from '../../components/Cart';
import { CartProps } from '../../components/navigator/types';

export default function CartScreen(props: CartProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Cart {...props} />
    </SafeAreaView>
  );
}
