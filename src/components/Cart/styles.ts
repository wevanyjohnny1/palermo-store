import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 18px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primarySemiBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(24)}px;

  margin-bottom: 29px;
`;
