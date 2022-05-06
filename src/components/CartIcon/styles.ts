import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  position: relative;
`;

export const Bag = styled.Image`
  width: ${RFValue(18.33)}px;
  height: ${RFValue(21.5)}px;
`;

export const QuantityCircle = styled.View`
  position: absolute;
  top: 0;
  right: -5px;

  width: ${RFValue(14)}px;
  height: ${RFValue(14)}px;

  border-radius: 999999px;

  background-color: ${({ theme }) => theme.colors.white};

  align-items: center;
  justify-content: center;

  border: 0.5px solid ${({ theme }) => theme.colors.thinBorder};
`;

export const Quantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.purpleLight};
  font-size: ${RFValue(8)}px;
`;
