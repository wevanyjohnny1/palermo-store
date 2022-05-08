import { atomWithAsyncStorage } from '../../helpers/atomWithAsyncStorage';

export const cartTotalQuantityAtom = atomWithAsyncStorage<number>(
  'cartTotalQuantity',
  0,
);
