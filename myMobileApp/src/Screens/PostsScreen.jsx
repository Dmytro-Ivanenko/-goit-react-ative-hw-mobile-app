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

const PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePhoto}
          source={require('../images/profilePhoto.jpg')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Natali Romanova</Text>
          <Text style={styles.profileMail}>email@example.com</Text>
        </View>
      </View>
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
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  profilePhoto: {
    height: 60,
    width: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  profileInfo: { alignItems: 'center', justifyContent: 'center' },

  profileName: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  profileMail: {
    fontSize: 16,
    color: 'gray',
  },
});

export default PostsScreen;
