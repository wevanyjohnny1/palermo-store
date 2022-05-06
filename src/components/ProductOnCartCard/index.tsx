import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import { Text } from 'react-native';
import {
  AddIcon,
  AddItemButton,
  ButtonsBox,
  Container,
  Divider,
  ProductBox,
  ProductDetails,
  ProductImage,
  ProductImageBox,
  ProductName,
  ProductPrice,
  ProductQuantity,
  RemoveIcon,
  RemoveItemButton,
} from './styles';

import ItemImage from '../../assets/images/item_image.png';

export type ProductOnCardCardProps = {
  // image?: string;
  name: string;
  price: number;
  quantity: number;
};

export const ProductOnCardCard = ({
  // image,
  name,
  price,
  quantity,
}: ProductOnCardCardProps) => {
  return (
    <Container>
      <ProductBox>
        <DropShadow
          style={{
            shadowColor: '#000000',
            shadowOffset: {
              width: 1,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 6,
          }}
        >
          <ProductImageBox>
            <ProductImage source={ItemImage} />
          </ProductImageBox>
        </DropShadow>

        <ProductDetails>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            <ProductQuantity>{quantity}x</ProductQuantity> ${price}
          </ProductPrice>
        </ProductDetails>
      </ProductBox>

      <ButtonsBox>
        <RemoveItemButton>
          <RemoveIcon />
        </RemoveItemButton>
        <Divider />
        <AddItemButton>
          <AddIcon />
        </AddItemButton>
      </ButtonsBox>
    </Container>
  );
};
