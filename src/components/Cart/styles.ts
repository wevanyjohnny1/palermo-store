import styled, { css } from 'styled-components/native';
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

export const CheckOutBox = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CheckOutBoxDetails = styled.View`
  flex-direction: row;
  padding: 10px 12px;
  height: ${RFValue(38)}px;
  align-items: center;
  justify-content: space-between;
`;

export const TotalText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.textGray};
  font-size: ${RFValue(14)}px;
`;

export const TotalValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const CheckOutButtonBox = styled.View`
  padding: 29px;
  height: 112px;
  align-items: center;
  justify-content: center;
`;

export const CheckoutButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(50)}px;

  align-self: center;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 999999px;

  align-items: center;
  justify-content: center;
`;

export const CheckoutButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
`;
