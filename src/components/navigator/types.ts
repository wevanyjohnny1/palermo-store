/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import { Product } from '../../providers/store/types';

export type AppNavigatorProps = {};

type RootStackParamList = {
  HomeScreen: undefined;
  CartScreen: undefined;
  ConfirmationScreen: {
    value: {
      ignoreCart: boolean;
    }
  };
  ProductScreen: {
    value: Product;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type HomeProps = StackScreenProps<RootStackParamList, 'HomeScreen'>;
export type CartProps = StackScreenProps<RootStackParamList, 'CartScreen'>;
export type ConfirmationProps = StackScreenProps<RootStackParamList, 'ConfirmationScreen'>;
export type ProductProps = StackScreenProps<RootStackParamList, 'ProductScreen'>;
