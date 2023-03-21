import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/Screens/auth/LoginScreen';
import RegistrationScreen from './src/Screens/auth/RegistrationScreen';
import Home from './src/Screens/main/Home';
import PostsScreen from './src/Screens/main/PostsScreen';
import CreatePostScreen from './src/Screens/main/CreatePostScreen';
import ProfileScreen from './src/Screens/main/ProfileScreen';

import LogoutButton from './src/Components/LogoutButton/LogoutButton';
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      {/* <AuthStack.Navigator initialRouteName="Login">
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
          options={{
            title: 'Публікації',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#212121',
            headerTitleStyle: {
              fontWeight: '500',
              fontSize: 17,
              lineHeight: 22,
            },
            headerTitleContainerStyle: {
              width: '100%',
              alignItems: 'center',
            },
            headerRight: () => <LogoutButton />,
          }}
          name="Home"
          component={Home}
        />
      </AuthStack.Navigator> */}

      {/*tab nav  */}

      <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreen} />
        <MainTab.Screen name="Create" component={CreatePostScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen} />
      </MainTab.Navigator>
    </NavigationContainer>
  );
}
