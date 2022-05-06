import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isHeaderVisible: boolean;
};

export const Container = styled.View<ContainerProps>`
  height: ${RFValue(42)}px;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};

  ${props =>
    !props.isHeaderVisible &&
    css`
      display: none;
    `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.grayWeb};
  font-size: ${RFValue(12)}px;
`;
