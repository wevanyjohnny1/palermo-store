import React from 'react';
import { Container } from './styles';

type DividerType = {
  vertical?: boolean;
  lighterColor?: boolean;
};

export const Divider = ({
  vertical = false,
  lighterColor = false,
}: DividerType) => (
  <Container vertical={vertical} lighterColor={lighterColor} />
);
