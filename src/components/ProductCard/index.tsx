import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import { useAtom } from 'jotai';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import { cartItemsListAtom } from '../atom/cartItemsList';
import { cartTotalAtom } from '../atom/cartTotalAtom';
import { Product } from '../../providers/store/types';

interface ProductCardType extends Product {
  isSmaller?: boolean;
}

export const ProductCard = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
  isSmaller = false,
}: ProductCardType) => {
  const navigator = useNavigation();
  const [cartItemsList, setCartItemsList] = useAtom(cartItemsListAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);

  const handleAddItemToCard = (
    id: number,
    name: string,
    price: number,
    image: string,
  ) => {
    const alreadyOnCart = cartItemsList.findIndex(item => item.id === id);

    if (alreadyOnCart >= 0) {
      cartItemsList[alreadyOnCart].quantity += 1;

      setCartItemsList(cartItemsList);
    } else {
      setCartItemsList([
        ...cartItemsList,
        { id, image, name, price, quantity: 1 },
      ]);
    }

    setCartTotal({
      quantity: cartTotal.quantity + 1,
      cost: cartTotal.cost + price,
    });
  };

  return (
    <Container smaller={isSmaller}>
      <Pressable
        onPress={() =>
          navigator.navigate('ProductScreen', {
            value: { category, description, id, image, price, rating, title },
          })
        }
      >
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
            <ProductImage source={{ uri: image }} />
            {isSmaller && (
              <AddToCartButtonInsideImage
                onPress={() => handleAddItemToCard(id, title, price, image)}
              >
                <AddToCartIcon />
              </AddToCartButtonInsideImage>
            )}
          </ProductImageBox>
        </DropShadow>

        <ProductDetails smaller={isSmaller}>
          <ProductCategoryName>{category}</ProductCategoryName>
          <ProductName>{title.slice(0, 25)}...</ProductName>
          {!isSmaller && (
            <ProductDescription>
              {description.slice(0, 60)}...
            </ProductDescription>
          )}
          <ProductPriceBox>
            <ProductPrice>${price}</ProductPrice>
            {!isSmaller && (
              <AddToCartButton
                onPress={() => handleAddItemToCard(id, title, price, image)}
              >
                <AddToCartIcon />
              </AddToCartButton>
            )}
          </ProductPriceBox>
        </ProductDetails>
      </Pressable>
    </Container>
  );
};
