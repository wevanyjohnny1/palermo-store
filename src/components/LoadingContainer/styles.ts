import LottieView from 'lottie-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type LoadingType = {
  small: boolean;
};

// eslint-disable-next-line prettier/prettier
export const LoadingAnimation = styled(LottieView) <LoadingType>`
  align-self: center;
  width: ${RFValue(50)}px;

  ${props =>
    props.small &&
    css`
      width: ${RFValue(15)}px;
    `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.grayBasic};
  font-size: ${RFValue(12)}px;
`;
