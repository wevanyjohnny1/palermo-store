import React from 'react';
import { SafeAreaView } from 'react-native';

import { Product } from '../../components/Product';
import { ProductProps } from '../../components/navigator/types';

export default function ProductScreen(props: ProductProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Product {...props} />
    </SafeAreaView>
  );
}
