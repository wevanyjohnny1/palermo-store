import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type CategoryButtonProps = {
  selected: boolean;
};

type CategoryButtonTitleProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 18px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageHeader = styled.View`
  margin-left: 18px;
  margin-right: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: ${RFValue(21.5)}px;
  margin-bottom: 12.8px;
`;

export const PageTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`;

export const CategorySelectContainer = styled.View`
  margin-bottom: 30.3px;
  margin-left: 18px;
`;

export const CategorySelectTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.textGrayLighter};
  font-size: ${RFValue(8)}px;

  margin-bottom: 4px;
`;

export const HorizontalList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
`;

export const CategoryButton = styled.TouchableOpacity<CategoryButtonProps>`
  background-color: ${({ theme }) => theme.colors.background};
  align-self: flex-start;
  border-radius: ${RFValue(8)}px;
  border: 1px solid ${({ theme }) => theme.colors.platinum};

  align-items: center;

  margin-right: 10px;

  ${props =>
    props.selected &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      border: none;
    `}
`;

export const CategoryButtonTitle = styled.Text<CategoryButtonTitleProps>`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.silver};
  font-size: ${RFValue(8)}px;

  padding: 6px 10px;

  ${props =>
    props.selected &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const NewProductsContainer = styled.View``;

export const NewProductsContainerTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primarySemiBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(24)}px;

  margin-left: 18px;
  margin-bottom: 20px;
`;

export const Divider = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: center;
  width: 100%;
  height: ${RFValue(3)}px;
  background-color: ${({ theme }) => theme.colors.platinum};
`;

export const ProductsList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
