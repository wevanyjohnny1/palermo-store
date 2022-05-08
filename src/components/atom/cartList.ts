import { atomWithAsyncStorage } from '../../helpers/atomWithAsyncStorage';

type CartProductType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const cartListAtom = atomWithAsyncStorage<CartProductType[]>(
  'cartList',
  [],
);
