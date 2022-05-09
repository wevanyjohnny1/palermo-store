import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import { useAtom } from 'jotai';
import {
  AddToCartButton,
  CloseModalIcon,
  Container,
  DividerHorizontal,
  BuyProductButtonBox,
  InstallmentDescription,
  InstallmentNumber,
  InstallmentSpan,
  InstallmentValue,
  ModalContentContainer,
  ModalInstallmentBox,
  OpenInstallmentModalText,
  ProductCategoryName,
  ProductDescription,
  ProductDetails,
  ProductImage,
  ProductImageBox,
  ProductInstallment,
  ProductName,
  ProductPrice,
  AddToCartButtonText,
  StarBox,
  Star,
  RatingQuantity,
} from './styles';

import { ProductProps } from '../navigator/types';
import { cartItemsListAtom } from '../atom/cartItemsList';
import { cartTotalAtom } from '../atom/cartTotalAtom';

export const Product = ({ navigation, route }: ProductProps) => {
  const { value: product } = route.params;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [cartItemsList, setCartItemsList] = useAtom(cartItemsListAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  const [starsQtd, setStarsQtd] = useState<number[]>([]);

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

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < Math.round(product.rating.rate); i++) {
      arr.push(i);
    }
    setStarsQtd(arr);
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductImageBox>
          <ProductImage source={{ uri: product.image }} />
        </ProductImageBox>

        <ProductDetails>
          <ProductCategoryName>{product.category}</ProductCategoryName>
          <StarBox>
            {starsQtd.map(star => {
              return <Star key={star} />;
            })}
          </StarBox>
          <RatingQuantity>{product.rating.count} avaliações</RatingQuantity>
          <ProductName>{product.title}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>${product.price}</ProductPrice>
          <ProductInstallment>
            5x sem juros de ${Number(product.price / 5).toFixed(2)}
          </ProductInstallment>
          <Pressable onPress={() => setModalVisible(true)}>
            <OpenInstallmentModalText>
              VER AS FORMAS DE PARCELAMENTO
            </OpenInstallmentModalText>
          </Pressable>
        </ProductDetails>
      </ScrollView>
      <BuyProductButtonBox>
        <AddToCartButton getAttention={false}>
          <AddToCartButtonText
            onPress={() =>
              handleAddItemToCard(
                product.id,
                product.title,
                product.price,
                product.image,
              )
            }
            getAttention={false}
          >
            ADICIONAR À SACOLA
          </AddToCartButtonText>
        </AddToCartButton>
        <AddToCartButton getAttention>
          <AddToCartButtonText
            getAttention
            onPress={() =>
              navigation.navigate('ConfirmationScreen', {
                value: {
                  ignoreCart: true,
                },
              })
            }
          >
            COMPRAR AGORA
          </AddToCartButtonText>
        </AddToCartButton>
      </BuyProductButtonBox>

      <View>
        <Modal
          isVisible={modalVisible}
          onBackButtonPress={() => setModalVisible(false)}
          style={{ margin: 0 }}
        >
          <ModalContentContainer>
            <Pressable onPress={() => setModalVisible(false)}>
              <CloseModalIcon />
            </Pressable>
            <ModalInstallmentBox>
              <InstallmentNumber>1x</InstallmentNumber>
              <InstallmentValue>
                <InstallmentSpan>$ </InstallmentSpan>
                {Number(product.price).toFixed(2)}
                <InstallmentSpan> sem juros</InstallmentSpan>
              </InstallmentValue>
            </ModalInstallmentBox>
            <DividerHorizontal />

            <ModalInstallmentBox>
              <InstallmentNumber>2x</InstallmentNumber>
              <InstallmentValue>
                <InstallmentSpan>$ </InstallmentSpan>
                {Number(product.price / 2).toFixed(2)}
                <InstallmentSpan> sem juros</InstallmentSpan>
              </InstallmentValue>
            </ModalInstallmentBox>
            <DividerHorizontal />

            <ModalInstallmentBox>
              <InstallmentNumber>3x</InstallmentNumber>
              <InstallmentValue>
                <InstallmentSpan>$ </InstallmentSpan>
                {Number(product.price / 3).toFixed(2)}
                <InstallmentSpan> sem juros</InstallmentSpan>
              </InstallmentValue>
            </ModalInstallmentBox>
            <DividerHorizontal />

            <ModalInstallmentBox>
              <InstallmentNumber>4x</InstallmentNumber>
              <InstallmentValue>
                <InstallmentSpan>$ </InstallmentSpan>
                {Number(product.price / 4).toFixed(2)}
                <InstallmentSpan> sem juros</InstallmentSpan>
              </InstallmentValue>
            </ModalInstallmentBox>
            <DividerHorizontal />

            <ModalInstallmentBox>
              <InstallmentNumber>5x</InstallmentNumber>
              <InstallmentValue>
                <InstallmentSpan>$ </InstallmentSpan>
                {Number(product.price / 5).toFixed(2)}
                <InstallmentSpan> sem juros</InstallmentSpan>
              </InstallmentValue>
            </ModalInstallmentBox>
            <DividerHorizontal />

            <InstallmentDescription>
              As compras com Visa, Mastercard, Dinners e Hipercard poderão ser
              parceladas até 12x sem juros, com parcela mínima de $30,00.
            </InstallmentDescription>

            <InstallmentDescription>
              As compras com Amex e Elo podem ser parceladas em até 6x sem
              juros, com parcela mínima de $30,00.
            </InstallmentDescription>
          </ModalContentContainer>
        </Modal>
      </View>
    </Container>
  );
};
