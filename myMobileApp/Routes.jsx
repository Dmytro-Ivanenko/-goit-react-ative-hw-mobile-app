import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

// screens
import LoginScreen from './src/Screens/auth/LoginScreen';
import RegistrationScreen from './src/Screens/auth/RegistrationScreen';
import Home from './src/Screens/main/Home';

// options

const AuthStack = createStackNavigator();

// const loadApplication = async () => {
//   await Font.loadAsync({
//     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
//     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
//     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
//   });
// };

const useRoute = isAuth => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </AuthStack.Navigator>
  );
};

export default function Routes() {
  // const [isReady, setIsReady] = useState(false);
  const routing = useRoute();
  //   if (!isReady) {
  //     return (
  //       <AppLoading
  //         startAsync={loadApplication}
  //         onFinish={() => setIsReady(true)}
  //         onError={console.warn}
  //       />
  //     );
  //   }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
