import React from 'react';

import { Cart } from '../../components/Cart';
import { CartProps } from '../../components/navigator/types';

export default function CartScreen(props: CartProps) {
  return <Cart {...props} />;
}
