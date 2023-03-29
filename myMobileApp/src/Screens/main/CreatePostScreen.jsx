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
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const cameraHeight = width - 32;

const CreatePostScreen = ({ navigation }) => {
  const [image, setImage] = useState('');
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
      await requestPermission();
    })();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleImageUpload = async () => {
    const { uri } = await cameraRef.takePictureAsync();
    setImage(uri);
  };

  const handlePublish = () => {
    // Add logic to publish post
    console.log('Фото опубліковане');
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.cameraContainer}>
          <Camera
            style={{
              ...styles.camera,
              height: isShowKeyboard ? 100 : cameraHeight,
            }}
            type={CameraType.back}
            ref={setCameraRef}
            ratio="1:1"
          >
            <View style={styles.photoContainer}>
              <Image
                source={{ uri: image }}
                style={{ height: 100, width: 100 }}
              />
            </View>

            <TouchableOpacity
              style={styles.cameraIconContainer}
              onPress={handleImageUpload}
            >
              <Ionicons name="camera" size={24} color="#fff" />
            </TouchableOpacity>
          </Camera>
          <Text style={{ color: '#BDBDBD' }}>Завантажте фото</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Назва..."
          value={title}
          onChangeText={setTitle}
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Місцевість..."
          value={location}
          onChangeText={setLocation}
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
        />
        <TouchableOpacity
          disabled={!title || !location}
          style={{
            ...styles.uploadButton,
            ...(title && location
              ? styles.publishButton
              : styles.disabledButton),
          }}
          onPress={handlePublish}
        >
          <Text
            style={title && location ? styles.publishText : styles.disabledText}
          >
            Опублікувати
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#fff',
  },

  cameraContainer: {
    marginBottom: 32,
  },
  camera: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  photoContainer: {
    position: 'absolute',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    top: 0,
    left: 0,
  },

  cameraIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadText: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',

    padding: 8,
    marginBottom: 16,
  },

  uploadButton: {
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 32,
  },

  publishButton: {
    backgroundColor: '#FF6C00',
  },
  disabledButton: {
    backgroundColor: '#F6F6F6',
  },
  publishText: {
    color: '#fff',
    fontSize: 16,
  },
  disabledText: {
    color: '#BDBDBD',
    fontSize: 16,
  },
});

export default CreatePostScreen;
