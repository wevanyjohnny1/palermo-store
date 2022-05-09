import React, { useState } from 'react';
import DropShadow from 'react-native-drop-shadow';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import { useAtom } from 'jotai';
import {
  AddIcon,
  AddItemButton,
  ButtonsBox,
  Container,
  ProductBox,
  ProductDetails,
  ProductImage,
  ProductImageBox,
  ProductName,
  ProductPrice,
  ProductQuantity,
  RemoveIcon,
  RemoveItemButton,
  ModalButton,
  ModalButtonsBox,
  ModalButtonText,
  ModalContentContainer,
  ModalSubtitle,
  ModalTextBox,
  ModalTitle,
} from './styles';

import { cartItemsListAtom } from '../atom/cartItemsList';
import { cartTotalAtom } from '../atom/cartTotalAtom';
import { Divider } from '../Divider';

export type ProductOnCardCardProps = {
  image: string;
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const ProductOnCardCard = ({
  image,
  id,
  name,
  price,
  quantity,
}: ProductOnCardCardProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [cartItemsList, setCartItemsList] = useAtom(cartItemsListAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  const [productQuantity, setProductQuantity] = useState<number>(quantity);

  const product = cartItemsList.findIndex(item => item.id === id);

  const handleDestroyItem = () => {
    const updatedCartList = cartItemsList.filter(item => item.id !== id);

    setCartTotal({
      quantity: cartTotal.quantity - 1,
      cost: cartTotal.cost - cartItemsList[product].price,
    });
    setCartItemsList(updatedCartList);
  };

  const handleRemoveItem = () => {
    if (cartItemsList[product].quantity > 1) {
      cartItemsList[product].quantity -= 1;
      setProductQuantity(productQuantity - 1);
      setCartTotal({
        quantity: cartTotal.quantity - 1,
        cost: cartTotal.cost - cartItemsList[product].price,
      });

      setCartItemsList(cartItemsList);
    } else {
      setModalVisible(true);
    }
  };

  const handleAddItem = () => {
    cartItemsList[product].quantity += 1;
    setProductQuantity(productQuantity + 1);
    setCartTotal({
      quantity: cartTotal.quantity + 1,
      cost: cartTotal.cost + cartItemsList[product].price,
    });

    setCartItemsList(cartItemsList);
  };

  return (
    <>
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
              <ProductImage source={{ uri: image }} />
            </ProductImageBox>
          </DropShadow>

          <ProductDetails>
            <ProductName>{name.slice(0, 20)}</ProductName>
            <ProductPrice>
              <ProductQuantity>{productQuantity}x</ProductQuantity> ${price}
            </ProductPrice>
          </ProductDetails>
        </ProductBox>

        <ButtonsBox>
          <RemoveItemButton onPress={() => handleRemoveItem()}>
            <RemoveIcon />
          </RemoveItemButton>
          <Divider vertical lighterColor />
          <AddItemButton onPress={() => handleAddItem()}>
            <AddIcon />
          </AddItemButton>
        </ButtonsBox>
      </Container>

      <View>
        <Modal
          isVisible={modalVisible}
          onBackButtonPress={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}
        >
          <ModalContentContainer>
            <ModalTextBox>
              <ModalTitle>Remover Item</ModalTitle>
              <ModalSubtitle>
                Se deseja remover o item do carrinho clique em prosseguir.
              </ModalSubtitle>
            </ModalTextBox>
            <ModalButtonsBox>
              <Divider />
              <ModalButton>
                <ModalButtonText
                  isRed={false}
                  onPress={() => handleDestroyItem()}
                >
                  PROSSEGUIR
                </ModalButtonText>
              </ModalButton>
              <Divider />
              <ModalButton>
                <ModalButtonText isRed onPress={() => setModalVisible(false)}>
                  CANCELAR
                </ModalButtonText>
              </ModalButton>
            </ModalButtonsBox>
          </ModalContentContainer>
        </Modal>
      </View>
    </>
  );
};
