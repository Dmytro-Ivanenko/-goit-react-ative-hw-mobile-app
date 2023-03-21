import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// screens
import LoginScreen from './src/Screens/auth/LoginScreen';
import RegistrationScreen from './src/Screens/auth/RegistrationScreen';
import PostsScreen from './src/Screens/main/PostsScreen';
import CreatePostScreen from './src/Screens/main/CreatePostScreen';
import ProfileScreen from './src/Screens/main/ProfileScreen';

import {
  postsOptions,
  createPostOptions,
  profileOptions,
} from './src/shared/options/tabOptions';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

// const loadApplication = async () => {
//   await Font.loadAsync({
//     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
//     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
//     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
//   });
// };

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
        {/* <AuthStack.Screen
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
         /> */}
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={postsOptions}
        name="Публікації"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={createPostOptions}
        name="Створити публікацю"
        component={CreatePostScreen}
      />
      <MainTab.Screen
        options={profileOptions}
        name="Профіль"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default function Routes() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);
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
