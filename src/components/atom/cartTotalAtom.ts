import { atomWithAsyncStorage } from '../../helpers/atomWithAsyncStorage';

type CartTotal = {
  quantity: number;
  cost: number;
};

export const cartTotalAtom = atomWithAsyncStorage<CartTotal>('cartTotal', {
  quantity: 0,
  cost: 0,
});
