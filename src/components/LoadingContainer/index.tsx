import React from 'react';
import { View } from 'react-native';
import { LoadingAnimation, Title } from './styles';

import Loading from '../../assets/json/loading.json';

type LoadingContainerType = {
  small?: boolean;
};

export const LoadingContainer = ({ small = false }: LoadingContainerType) => {
  return (
    <View style={{ alignSelf: 'center' }}>
      <LoadingAnimation source={Loading} autoPlay small={small} />
      {!small && <Title>Carregando...</Title>}
    </View>
  );
};
