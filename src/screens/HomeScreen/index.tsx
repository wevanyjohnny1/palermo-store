import React from 'react';

import { Home } from '../../components/Home';
import { HomeProps } from '../../components/navigator/types';

export default function HomeScreen(props: HomeProps) {
  return <Home {...props} />;
}
