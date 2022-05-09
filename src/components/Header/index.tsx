import { StackHeaderProps } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { BackButton } from '../BackButton';
import { CartButton } from '../CartButton';
import { Container, Title } from './styles';

type HeaderProps = StackHeaderProps & {
  headerShown?: boolean;
  productHeader?: boolean;
};

export const Header = ({
  headerShown = false,
  productHeader = false,
  navigation,
  options,
}: HeaderProps) => {
  return (
    <Container isHeaderVisible={headerShown}>
      <BackButton onPress={navigation.goBack} />
      {!productHeader ? (
        <>
          <Title>{options.title}</Title>
          <View />
        </>
      ) : (
        <>
          <View />
          <View style={{ marginRight: 14 }}>
            <CartButton />
          </View>
        </>
      )}
    </Container>
  );
};
