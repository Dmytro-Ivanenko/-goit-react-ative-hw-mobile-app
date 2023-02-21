import React, { useState, useEffect } from 'react';
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
  useWindowDimensions,
} from 'react-native';

const initValue = {
  name: '',
  password: '',
};

const LoginScreen = () => {
  const [value, setValue] = useState(initValue);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const { width } = useWindowDimensions();
  // const [dimensions, setDimensions] = useState(width - 16 * 2);

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get('window').width - 16 * 2;

  //     setDimensions(width);
  //   };

  //   Dimensions.addEventListener('change', onChange);

  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setValue(initValue);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bcgImage}
          source={require('../images/PhotoBG.png')}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{
                ...styles.formContainer,
                // marginBottom: isShowKeyboard ? -150 : 0,
              }}
            >
              <View style={styles.form}>
                <Text style={styles.formTitle}>Вхід</Text>
                <TextInput
                  style={{ ...styles.input, marginBottom: 16 }}
                  placeholder="Адреса електронної пошти"
                  value={value.name}
                  onChangeText={value =>
                    setValue(prevState => ({
                      ...prevState,
                      name: value,
                    }))
                  }
                />
                <TextInput
                  style={{ ...styles.input, marginBottom: 43 }}
                  placeholder="Пароль"
                  value={[value.password]}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={value =>
                    setValue(prevState => {
                      return { ...prevState, password: value };
                    })
                  }
                />

                <TouchableOpacity activeOpacity={0.8} style={styles.submitBtn}>
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
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

  formContainer: {
    height: 489,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 32,
    backgroundColor: '#ffffff',
  },

  form: {
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'start',
    paddingRight: 16,
    paddingLeft: 16,
  },

  formTitle: {
    // fontWeight: 500,
    fontSize: 30,
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
    lineHeight: 19,
  },
});

export default LoginScreen;
