import React, { useEffect, useState } from 'react';
import DropShadow from 'react-native-drop-shadow';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { useAtom } from 'jotai';
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
  ModalButton,
  ModalButtonsBox,
  ModalButtonText,
  ModalContentContainer,
  ModalSubtitle,
  ModalTextBox,
  ModalTitle,
  DividerHorizontal,
} from './styles';

import ItemImage from '../../assets/images/item_image.png';
import { cartListAtom } from '../atom/cartList';
import { cartTotalQuantityAtom } from '../atom/cartTotalQuantityAtom';

export type ProductOnCardCardProps = {
  // image?: string;
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const ProductOnCardCard = ({
  // image,
  id,
  name,
  price,
  quantity,
}: ProductOnCardCardProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [cartList, setCartList] = useAtom(cartListAtom);
  const [cartTotalQuantity, setCartTotalQuantity] = useAtom(
    cartTotalQuantityAtom,
  );
  const [productQuantity, setProductQuantity] = useState<number>(quantity);

  const product = cartList.findIndex(item => item.id === id);

  const handleDestroyItem = () => {
    const updatedCartList = cartList.filter(item => item.id !== id);

    setCartTotalQuantity(cartTotalQuantity - 1);
    setCartList(updatedCartList);
  };

  const handleRemoveItem = (id: number) => {
    if (cartList[product].quantity > 1) {
      cartList[product].quantity -= 1;
      setProductQuantity(productQuantity - 1);
      setCartTotalQuantity(cartTotalQuantity - 1);

      setCartList(cartList);
    } else {
      setModalVisible(true);
    }
  };

  const handleAddItem = () => {
    cartList[product].quantity += 1;
    setProductQuantity(productQuantity + 1);
    setCartTotalQuantity(cartTotalQuantity - 1);

    setCartList(cartList);
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
              <ProductImage source={ItemImage} />
            </ProductImageBox>
          </DropShadow>

          <ProductDetails>
            <ProductName>{name}</ProductName>
            <ProductPrice>
              <ProductQuantity>{productQuantity}x</ProductQuantity> ${price}
            </ProductPrice>
          </ProductDetails>
        </ProductBox>

        <ButtonsBox>
          <RemoveItemButton onPress={() => handleRemoveItem(id)}>
            <RemoveIcon />
          </RemoveItemButton>
          <Divider />
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
              <DividerHorizontal />
              <ModalButton>
                <ModalButtonText
                  isRed={false}
                  onPress={() => handleDestroyItem()}
                >
                  PROSSEGUIR
                </ModalButtonText>
              </ModalButton>
              <DividerHorizontal />
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
