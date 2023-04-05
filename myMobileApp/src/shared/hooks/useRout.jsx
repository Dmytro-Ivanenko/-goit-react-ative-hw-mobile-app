import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import LoginScreen from '../../Screens/auth/LoginScreen';
import RegistrationScreen from '../../Screens/auth/RegistrationScreen';
import Home from '../../Screens/main/Home';

// options
const AuthStack = createStackNavigator();

const useRoute = isAuth => {
  if (!isAuth) {
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
      </AuthStack.Navigator>
    );
  }

  return <Home />;
};

export default useRoute;
