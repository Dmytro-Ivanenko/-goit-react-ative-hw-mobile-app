import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CreatMapScreenePostScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
  },
});

export default MapScreen;
