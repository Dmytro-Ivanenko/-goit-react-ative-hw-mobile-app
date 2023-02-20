import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ImageBackground,
} from 'react-native';

const initValue = {
  name: '',
  password: '',
};

const Login = () => {
  const [value, setValue] = useState(initValue);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bcgImage}
        source={require('../images/PhotoBG.png')}
      >
        <View style={styles.form}>
          <Text>Вхід</Text>
          <TextInput
            placeholder="Адреса електронної пошти"
            value={value.name}
            onChangeText={setValue(prevState => {
              return { ...prevState, name: value };
            })}
          />
          <TextInput
            placeholder="Пароль"
            value={[value.password]}
            onChangeText={setValue(prevState => {
              return { ...prevState, password: value };
            })}
          />

          <TouchableOpacity activeOpacity={0.8} style={styles.submitBtn}>
            <Text style={styles.btnText}>Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bcgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Login;
