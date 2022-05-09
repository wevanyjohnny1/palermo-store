import React from 'react';
import {
  Container,
  InstallmentNumber,
  InstallmentSpan,
  InstallmentValue,
} from './styles';

type InstallmentBoxType = {
  quantity: number;
  price: number;
};

export const InstallmentBox = ({ price, quantity }: InstallmentBoxType) => {
  return (
    <Container>
      <InstallmentNumber>{quantity}x</InstallmentNumber>
      <InstallmentValue>
        <InstallmentSpan>$ </InstallmentSpan>
        {Number(price / 2).toFixed(2)}
        <InstallmentSpan> sem juros</InstallmentSpan>
      </InstallmentValue>
    </Container>
  );
};
