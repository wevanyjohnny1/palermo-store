import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';

type IsSmallerProps = {
  smaller: boolean;
};

export const Container = styled.View<IsSmallerProps>`
  width: ${RFValue(172)}px;
  align-items: center;
  border-radius: 10px;
  margin-left: 18px;

  margin-right: 23.5px;

  ${props =>
    props.smaller &&
    css`
      width: 50%;
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 26px;
    `}
`;

export const ProductImageBox = styled.View<IsSmallerProps>`
  background-color: '#FFFFFF';
  border-radius: 10px;
  overflow: hidden;
  width: ${RFValue(172)}px;
  height: ${RFValue(183)}px;

  margin-bottom: 7px;

  ${props =>
    props.smaller &&
    css`
      position: relative;
      border-radius: 16px;
      width: ${RFValue(153)}px;
      height: ${RFValue(139)}px;
    `}
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ProductDetails = styled.View<IsSmallerProps>``;

export const ProductCategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.blueMedium};
  font-size: ${RFValue(8)}px;
`;

export const ProductName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const ProductDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.subTitle};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(11.73)}px;

  margin-bottom: 10px;
`;

export const ProductPriceBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.blueMedium};
  font-size: ${RFValue(20)}px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blueMedium};
  border-radius: 999999px;

  align-items: center;
  justify-content: center;
`;

export const AddToCartButtonInsideImage = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  bottom: 0;

  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blueMedium};
  border-radius: 999999px;

  align-items: center;
  justify-content: center;
`;

export const AddToCartIcon = styled(Icon).attrs({
  size: RFValue(10),
  name: 'plus',
  color: '#8775FE',
})``;
