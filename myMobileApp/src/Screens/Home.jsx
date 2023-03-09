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

import PostsScreen from './PostsScreen';

const Home = ({ navigation }) => {
  return <PostsScreen />;
};

const styles = StyleSheet.create({});

export default Home;
