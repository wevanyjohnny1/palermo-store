import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Entypo';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: ${RFValue(72)}px;
  border-radius: 12px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;

  align-items: center;
  padding: 14px;

  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const ProductBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImageBox = styled.View`
  background-color: '#FFFFFF';
  border-radius: 10px;
  overflow: hidden;
  width: ${RFValue(38)}px;
  height: ${RFValue(50)}px;

  margin-right: 11px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ProductDetails = styled.View``;

export const ProductName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const ProductQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.blueMedium};
  font-size: ${RFValue(10)}px;
`;

export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.blueMedium};
  font-size: ${RFValue(14)}px;
`;

export const ButtonsBox = styled.View`
  flex-direction: row;
  width: ${RFValue(60)}px;
  height: ${RFValue(23)}px;

  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.grayLighter};
  border-radius: ${RFValue(30)}px;
`;

export const RemoveItemButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Divider = styled.View`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.grayLighter};
`;

export const AddItemButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const AddIcon = styled(Icon).attrs({
  size: RFValue(10),
  name: 'plus',
  color: '#CCCCCC',
})``;

export const RemoveIcon = styled(Icon).attrs({
  size: RFValue(10),
  name: 'minus',
  color: '#CCCCCC',
})``;
