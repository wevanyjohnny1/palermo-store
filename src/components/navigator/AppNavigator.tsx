import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import CartScreen from '../../screens/Cartscreen';
import ConfirmationScreen from '../../screens/ConfirmationScreen';
import HomeScreen from '../../screens/HomeScreen';
import ProductScreen from '../../screens/ProductScreen';
import { Header } from '../Header';
import { AppNavigatorProps } from './types';

const Stack = createStackNavigator();

export const AppNavigator = (props: AppNavigatorProps) => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      header: props => <Header {...props} headerShown={false} />,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        header: props => <Header {...props} headerShown={false} />,
      }}
    />
    <Stack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        title: 'CARRINHO',
        header: props => <Header {...props} headerShown />,
      }}
    />
    <Stack.Screen
      name="ConfirmationScreen"
      component={ConfirmationScreen}
      options={{
        header: props => <Header {...props} headerShown={false} />,
      }}
    />
    <Stack.Screen
      name="ProductScreen"
      component={ProductScreen}
      options={{
        header: props => <Header {...props} headerShown productHeader />,
      }}
    />
  </Stack.Navigator>
);
