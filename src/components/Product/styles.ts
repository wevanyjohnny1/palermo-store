import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type AddToCartButtonType = {
  getAttention: boolean;
};

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ProductImageBox = styled.View`
  width: 80%;
  height: ${RFValue(300)}px;
  align-self: center;

  margin-bottom: 15px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ProductDetails = styled.View`
  padding: 14px;
`;

export const ProductCategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.blueMedium};
  font-size: ${RFValue(10)}px;
`;

export const ProductName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.subTitle};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(11.73)}px;

  margin-bottom: 10px;
`;

export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.blueMedium};
  font-size: ${RFValue(20)}px;
`;

export const ProductInstallment = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.blueMedium};
  font-size: ${RFValue(12)}px;
`;

export const OpenInstallmentModalText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${RFValue(10)}px;
`;

export const ButtonsBox = styled.View``;

export const CloseModalIcon = styled(EvilIcon).attrs({
  size: RFValue(20),
  name: 'close',
  color: '#404040',
})`
  align-self: flex-end;
`;

export const ModalContentContainer = styled.View`
  width: 100%;
  height: 100%;

  padding: 30px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const InstallmentDescription = styled.Text`
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.grayBasic};

  text-align: justify;
`;

export const BuyProductButtonBox = styled.View`
  padding: 12px;
  height: 112px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const AddToCartButton = styled.TouchableOpacity<AddToCartButtonType>`
  width: 45%;
  height: ${RFValue(50)}px;

  background-color: ${({ theme }) => theme.colors.background};

  border: 1px solid ${({ theme }) => theme.colors.primary};

  border-radius: 10px;

  align-items: center;
  justify-content: center;

  ${props =>
    props.getAttention &&
    css`
      border: none;
      background-color: ${({ theme }) => theme.colors.purple};
    `}
`;

export const AddToCartButtonText = styled.Text<AddToCartButtonType>`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.purpleLight};
  font-size: ${RFValue(12)}px;

  ${props =>
    props.getAttention &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const StarBox = styled.View`
  margin-top: 4px;
  flex-direction: row;
`;

export const Star = styled(AntDesignIcon).attrs({
  size: RFValue(14),
  name: 'star',
  color: '#FFD700',
})``;

export const RatingQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.purpleLight};
  font-size: ${RFValue(10)}px;
`;
