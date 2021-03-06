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

  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageHeader = styled.View`
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 18px;
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

export const Carousel = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
`;

export const CategoryButton = styled.TouchableOpacity<CategoryButtonProps>`
  background-color: ${({ theme }) => theme.colors.platinum};
  align-self: flex-start;
  border-radius: ${RFValue(8)}px;
  border: 1px solid ${({ theme }) => theme.colors.platinum};

  align-items: center;

  margin-right: 10px;

  ${props =>
    props.selected &&
    css`
      background-color: ${({ theme }) => theme.colors.categoryFill};
      border: none;
    `}
`;

export const CategoryButtonTitle = styled.Text<CategoryButtonTitleProps>`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.silverChalice};
  font-size: ${RFValue(8)}px;

  padding: 6px 10px;

  ${props =>
    props.selected &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const NewProductsContainer = styled.View`
  margin-bottom: 20px;
`;

export const NewProductsContainerTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primarySemiBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(24)}px;

  margin-left: 18px;
  margin-bottom: 20px;
`;

export const ProductsList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;

  margin-top: 20px;
`;

export const GoToCartButtonBox = styled.View`
  padding: 29px;
  height: 112px;
  align-items: center;
  justify-content: center;
`;

export const GoToCartButton = styled.TouchableOpacity`
  width: ${RFValue(317)}px;
  height: ${RFValue(50)}px;

  align-self: center;

  background-color: ${({ theme }) => theme.colors.purple};

  border-radius: 999999px;

  align-items: center;
  justify-content: center;
`;

export const GoToCartButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
`;
