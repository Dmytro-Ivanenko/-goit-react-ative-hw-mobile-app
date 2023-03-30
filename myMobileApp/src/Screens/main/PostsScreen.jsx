import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../nested/DefaultScreen';
import CommentsScreen from '../nested/CommentsScreen';
import MapScreen from '../nested/MapScreen';

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator initialRouteName="Пости">
      <NestedScreen.Screen
        options={{ headerShown: false }}
        name="Пости"
        component={DefaultScreen}
      />
      <NestedScreen.Screen
        options={{ headerTitleAlign: 'center' }}
        name="Коментарі"
        component={CommentsScreen}
      />
      <NestedScreen.Screen
        options={{ headerTitleAlign: 'center' }}
        name="Мапа"
        component={MapScreen}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
