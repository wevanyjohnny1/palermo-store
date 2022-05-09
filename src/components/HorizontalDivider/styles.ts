import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: center;
  width: 100%;
  height: ${RFValue(1)}px;
  background-color: ${({ theme }) => theme.colors.platinum};
`;
