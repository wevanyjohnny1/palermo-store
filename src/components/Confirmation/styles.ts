import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(22)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
`;

export const FinishButtonBox = styled.View`
  flex: 1;
  position: absolute;
  bottom: 29px;
  padding: 29px;
  width: 100%;
  height: 107px;
  align-items: center;
  justify-content: center;
`;

export const FinishButton = styled.TouchableOpacity`
  width: ${RFValue(317)}px;
  height: ${RFValue(49)}px;

  align-self: center;

  background-color: ${({ theme }) => theme.colors.purple};

  border-radius: 999999px;

  align-items: center;
  justify-content: center;
`;

export const FinishButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
`;
