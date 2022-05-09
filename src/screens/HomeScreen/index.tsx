import React from 'react';
import { SafeAreaView } from 'react-native';

import { Home } from '../../components/Home';
import { HomeProps } from '../../components/navigator/types';

export default function HomeScreen(props: HomeProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home {...props} />
    </SafeAreaView>
  );
}
