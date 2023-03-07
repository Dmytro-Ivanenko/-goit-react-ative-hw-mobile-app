import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const initValue = {
  name: '',
  password: '',
};

const LoginScreen = () => {
  const [value, setValue] = useState(initValue);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocusMail, setIsFocusMail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./Fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./Fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./Fonts/Roboto-Medium.ttf'),
  });

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    console.log(value);
    setValue(initValue);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={keyboardHide}
      onLayout={onLayoutRootView}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.bcgImage}
          source={require('../images/PhotoBG.png')}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? -240 : 0 }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
              <Text style={styles.formTitle}>Вхід</Text>
              <TextInput
                style={{
                  ...styles.input,
                  marginBottom: 16,
                  ...(isFocusMail ? styles.inputFocus : null),
                }}
                placeholder="Адреса електронної пошти"
                value={value.name}
                onFocus={() => {
                  setIsShowKeyboard(true), setIsFocusMail(true);
                }}
                onBlur={() => setIsFocusMail(false)}
                onChangeText={value =>
                  setValue(prevState => ({
                    ...prevState,
                    name: value,
                  }))
                }
              />
              <TextInput
                style={{
                  ...styles.input,
                  marginBottom: 43,
                  ...(isFocusPassword ? styles.inputFocus : null),
                }}
                placeholder="Пароль"
                value={value.password}
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true), setIsFocusPassword(true);
                }}
                onBlur={() => setIsFocusPassword(false)}
                onChangeText={value =>
                  setValue(prevState => {
                    return { ...prevState, password: value };
                  })
                }
              />

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.submitBtn}
                onPress={handleSubmit}
              >
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bcgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  form: {
    justifyContent: 'flex-start',
    textAlign: 'start',
    height: 489,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 32,
    backgroundColor: '#ffffff',
    paddingRight: 16,
    paddingLeft: 16,
  },

  formTitle: {
    fontSize: 30,
    fontStyle: 'Bold',
    fontFamily: 'Roboto',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 33,
  },

  input: {
    height: 50,
    padding: 16,

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,

    backgroundColor: '#F6F6F6',

    fontSize: 16,
    fontFamily: 'Roboto',
  },

  inputFocus: {
    borderColor: '#FF6C00',
    backgroundColor: '#ffffff',
  },

  submitBtn: {
    height: 50,
    borderRadius: 100,
    backgroundColor: '#FF6C00',

    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 32,
    paddingLeft: 32,
  },

  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#ffffff',
    lineHeight: 19,
  },
});

export default LoginScreen;
