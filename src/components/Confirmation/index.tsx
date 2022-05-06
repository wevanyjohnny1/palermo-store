import React from 'react';
import { StatusBar } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {
  Container,
  FinishButton,
  FinishButtonBox,
  FinishButtonText,
  SubTitle,
  Title,
} from './styles';

import { ConfirmationProps } from '../navigator/types';

export const Confirmation = ({ navigation }: ConfirmationProps) => {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
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
            <FinishButtonText onPress={() => navigation.popToTop()}>
              PROSSEGUIR
            </FinishButtonText>
          </FinishButton>
        </DropShadow>
      </FinishButtonBox>
    </Container>
  );
};
