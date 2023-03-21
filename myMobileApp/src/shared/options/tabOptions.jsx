import React from 'react';
import { Feather } from '@expo/vector-icons';
import { getHeaderTitle } from '@react-navigation/elements';
import Header from '../../Components/Header/Header';

export const screenOptions = {
  tabBarShowLabel: false,
  header: ({ navigation, route, options }) => {
    const title = getHeaderTitle(options, route.name);

    return <Header title={title} />;
  },
};
export const postsOptions = {
  tabBarIcon: ({ focused, size, color }) => (
    <Feather name="grid" size={24} color="black" />
  ),
};

export const createPostOptions = {
  tabBarIcon: ({ focused, size, color }) => (
    <Feather name="plus" size={24} color="black" />
  ),
};

export const profileOptions = {
  tabBarIcon: ({ focused, size, color }) => (
    <Feather name="user" size={24} color="black" />
  ),
};
