import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import { useAtom } from 'jotai';
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
import { cartListAtom } from '../atom/cartList';
import { cartTotalQuantityAtom } from '../atom/cartTotalQuantityAtom';

export type ProductCardProps = {
  // image?: string;
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  isSmaller?: boolean;
};

export const ProductCard = ({
  // image,
  id,
  category,
  name,
  description,
  price,
  isSmaller = false,
}: ProductCardProps) => {
  const [cartList, setCartList] = useAtom(cartListAtom);
  const [cartTotalQuantity, setCartTotalQuantity] = useAtom(
    cartTotalQuantityAtom,
  );

  const handleAddItemToCard = (id: number, name: string, price: number) => {
    const alreadyOnCart = cartList.findIndex(item => item.id === id);

    if (alreadyOnCart >= 0) {
      cartList[alreadyOnCart].quantity += 1;

      setCartList(cartList);
    } else {
      setCartList([...cartList, { id, name, price, quantity: 1 }]);
    }

    setCartTotalQuantity(cartTotalQuantity + 1);
  };

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
            <AddToCartButtonInsideImage
              onPress={() => handleAddItemToCard(id, name, price)}
            >
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
            <AddToCartButton
              onPress={() => handleAddItemToCard(id, name, price)}
            >
              <AddToCartIcon />
            </AddToCartButton>
          )}
        </ProductPriceBox>
      </ProductDetails>
    </Container>
  );
};
