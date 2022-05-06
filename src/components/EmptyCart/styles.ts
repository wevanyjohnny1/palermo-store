import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyBag = styled.Image`
  width: ${RFValue(68.56)}px;
  height: ${RFValue(67)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${RFValue(14)}px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 14px;

  width: 70%;
`;

export const GoBackButtonBox = styled.View`
  bottom: 29px;
  padding: 29px;
  width: 100%;
  height: 107px;
  align-items: center;
  justify-content: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: ${RFValue(320)}px;
  height: ${RFValue(37)}px;

  align-self: center;

  background-color: ${({ theme }) => theme.colors.blueMedium};

  border-radius: 999999px;

  align-items: center;
  justify-content: center;
`;

export const GoBackButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
`;
