import React from 'react';
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import theme from './src/global/styles/theme'
import { CategorySelect } from './src/screens/CategorySelect';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
        <StatusBar
        hidden translucent={true}
        />
      <CategorySelect />
      </ThemeProvider>
  );
}

