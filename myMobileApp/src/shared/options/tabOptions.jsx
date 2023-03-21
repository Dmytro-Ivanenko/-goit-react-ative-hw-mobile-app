import React from 'react';
import { Feather } from '@expo/vector-icons';

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
