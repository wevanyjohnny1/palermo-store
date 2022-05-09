import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import theme from './global/styles/lightTheme';
import darkTheme from './global/styles/darkTheme';
import { AppNavigator } from './components/navigator/AppNavigator';
import { StoreProvider } from './providers/store/storeProvider';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // Waiting for lottie to update the library
  LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <StoreProvider>
          <AppNavigator />
        </StoreProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
