import React, { useEffect } from 'react';
import { useCustomFonts } from './src/shared/hooks/useCustomFont';
import * as SplashScreen from 'expo-splash-screen';

import Routes from './Routes';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const { appIsReady, onLayoutRootView } = useCustomFonts();

  // if (!appIsReady) {
  //   return null;
  // }

  return <Routes />;
}
