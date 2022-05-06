import { StackHeaderProps } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { BackButton } from '../BackButton';
import { Container, Title } from './styles';

type HeaderProps = StackHeaderProps & {
  headerShown?: boolean;
};

export const Header = ({
  headerShown = false,
  navigation,
  options,
}: HeaderProps) => {
  return (
    <Container isHeaderVisible={headerShown}>
      <BackButton onPress={navigation.goBack} />
      <Title>{options.title}</Title>
      <View />
    </Container>
  );
};
