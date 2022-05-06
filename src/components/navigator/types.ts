/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';

export type AppNavigatorProps = {};

type RootStackParamList = {
  HomeScreen: undefined;
  CartScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type HomeProps = StackScreenProps<RootStackParamList, 'HomeScreen'>;
export type CartProps = StackScreenProps<RootStackParamList, 'CartScreen'>;
