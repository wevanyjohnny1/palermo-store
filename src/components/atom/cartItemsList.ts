import { atomWithAsyncStorage } from '../../helpers/atomWithAsyncStorage';

type CartProductType = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

export const cartItemsListAtom = atomWithAsyncStorage<CartProductType[]>(
  'cartItemsList',
  [],
);
