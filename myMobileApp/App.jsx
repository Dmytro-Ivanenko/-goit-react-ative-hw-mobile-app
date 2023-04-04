import React, { useEffect } from 'react';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { useCustomFonts } from './src/shared/hooks/useCustomFont';
import * as SplashScreen from 'expo-splash-screen';

import Routes from './routes';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
