import React, { useEffect } from 'react';
import { LogBox, StatusBar, Appearance } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import lightTheme from './global/styles/lightTheme';
import darkTheme from './global/styles/darkTheme';
import { AppNavigator } from './components/navigator/AppNavigator';
import { StoreProvider } from './providers/store/storeProvider';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const colorScheme = Appearance.getColorScheme();

  // Waiting for lottie to update the library
  LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={
          colorScheme === 'dark'
            ? darkTheme.colors.background
            : lightTheme.colors.background
        }
      />

      <NavigationContainer>
        <StoreProvider>
          <AppNavigator />
        </StoreProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
