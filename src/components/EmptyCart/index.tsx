import React from 'react';
import { GestureResponderEvent } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {
  Container,
  EmptyBag,
  GoBackButton,
  GoBackButtonBox,
  GoBackButtonText,
  Title,
} from './styles';

import EmptyBagImage from '../../assets/images/empty_bag.png';

export type ButtonProps = {
  onButtonPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export const EmptyCart = ({ onButtonPress }: ButtonProps) => {
  return (
    <Container>
      <EmptyBag source={EmptyBagImage} />
      <Title>NENHUM ITEM ADICIONADO NO CARRINHO.</Title>

      <GoBackButtonBox>
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
          <GoBackButton onPress={onButtonPress}>
            <GoBackButtonText>ADICIONAR ITENS</GoBackButtonText>
          </GoBackButton>
        </DropShadow>
      </GoBackButtonBox>
    </Container>
  );
};
