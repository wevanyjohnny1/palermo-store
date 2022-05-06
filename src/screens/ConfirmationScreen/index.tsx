import React from 'react';

import { Confirmation } from '../../components/Confirmation';
import { ConfirmationProps } from '../../components/navigator/types';

export default function ConfirmationScreen(props: ConfirmationProps) {
  return <Confirmation {...props} />;
}
