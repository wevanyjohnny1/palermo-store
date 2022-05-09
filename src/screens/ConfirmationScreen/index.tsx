import React from 'react';
import { SafeAreaView } from 'react-native';

import { Confirmation } from '../../components/Confirmation';
import { ConfirmationProps } from '../../components/navigator/types';

export default function ConfirmationScreen(props: ConfirmationProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Confirmation {...props} />
    </SafeAreaView>
  );
}
