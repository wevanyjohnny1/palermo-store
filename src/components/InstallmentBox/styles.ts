import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const InstallmentNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.grayBasic};
`;

export const InstallmentValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primarySemiBold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const InstallmentSpan = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.grayBasic};
`;
