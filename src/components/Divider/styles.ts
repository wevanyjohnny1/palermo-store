import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type DividerType = {
  vertical: boolean;
  lighterColor: boolean;
};

export const Container = styled.View<DividerType>`
  width: 100%;
  height: ${RFValue(1)}px;
  background-color: ${({ theme }) => theme.colors.platinum};

  ${props =>
    props.vertical &&
    css`
      width: ${RFValue(1)}px;
      height: 100%;
    `}

  ${props =>
    props.lighterColor &&
    css`
      background-color: ${({ theme }) => theme.colors.grayLighter};
    `}
`;
