import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import {
  AddToCartButton,
  AddToCartButtonInsideImage,
  AddToCartIcon,
  Container,
  ProductCategoryName,
  ProductDescription,
  ProductDetails,
  ProductImage,
  ProductImageBox,
  ProductName,
  ProductPrice,
  ProductPriceBox,
} from './styles';

import ItemImage from '../../assets/images/item_image.png';

export type ProductCardProps = {
  // image?: string;
  category: string;
  name: string;
  description: string;
  price: number;
  isSmaller?: boolean;
};

export const ProductCard = ({
  // image,
  category,
  name,
  description,
  price,
  isSmaller = false,
}: ProductCardProps) => {
  return (
    <Container smaller={isSmaller}>
      <DropShadow
        style={{
          shadowColor: '#000000',
          shadowOffset: {
            width: 2,
            height: 4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 5,
        }}
      >
        <ProductImageBox smaller={isSmaller}>
          <ProductImage smaller={isSmaller} source={ItemImage} />
          {isSmaller && (
            <AddToCartButtonInsideImage>
              <AddToCartIcon />
            </AddToCartButtonInsideImage>
          )}
        </ProductImageBox>
      </DropShadow>

      <ProductDetails smaller={isSmaller}>
        <ProductCategoryName>{category}</ProductCategoryName>
        <ProductName>{name}</ProductName>
        {!isSmaller && <ProductDescription>{description}</ProductDescription>}
        <ProductPriceBox>
          <ProductPrice>${price}</ProductPrice>
          {!isSmaller && (
            <AddToCartButton>
              <AddToCartIcon />
            </AddToCartButton>
          )}
        </ProductPriceBox>
      </ProductDetails>
    </Container>
  );
};
