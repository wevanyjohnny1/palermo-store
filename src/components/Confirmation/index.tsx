import React from 'react';
import { StatusBar } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { useAtom } from 'jotai';
import {
  Container,
  DoneAnimation,
  FinishButton,
  FinishButtonBox,
  FinishButtonText,
  SubTitle,
  Title,
} from './styles';

import { ConfirmationProps } from '../navigator/types';

import Done from '../../assets/json/done.json';
import { cartItemsListAtom } from '../atom/cartItemsList';
import { cartTotalAtom } from '../atom/cartTotalAtom';

export const Confirmation = ({ navigation, route }: ConfirmationProps) => {
  const { value } = route.params;
  const { ignoreCart } = value;
  const [, setCartItemsList] = useAtom(cartItemsListAtom);
  const [, setCartTotal] = useAtom(cartTotalAtom);
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <DoneAnimation source={Done} autoPlay loop={false} />
      <Title>SUCESSO!</Title>
      <SubTitle>Compra realizada com sucesso, aproveite!</SubTitle>

      <FinishButtonBox>
        <DropShadow
          style={{
            shadowColor: 'rgb(194, 193, 248)',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,
          }}
        >
          <FinishButton>
            <FinishButtonText
              onPress={() => {
                navigation.popToTop();
                if (!ignoreCart) {
                  setCartItemsList([]);
                  setCartTotal({ quantity: 0, cost: 0 });
                }
              }}
            >
              PROSSEGUIR
            </FinishButtonText>
          </FinishButton>
        </DropShadow>
      </FinishButtonBox>
    </Container>
  );
};
