import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { BackButtonIcon, ButtonPressable } from './styles';

export type BackButtonProps = {
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};

export const BackButton = ({ onPress }: BackButtonProps) => (
  <ButtonPressable onPress={onPress}>
    <BackButtonIcon />
  </ButtonPressable>
);
