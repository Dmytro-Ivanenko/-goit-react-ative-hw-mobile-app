import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Home = () => {
  const [value, setValue] = useState(initValue);
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./Fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./Fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./Fonts/Roboto-Medium.ttf'),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({});

export default Home;
