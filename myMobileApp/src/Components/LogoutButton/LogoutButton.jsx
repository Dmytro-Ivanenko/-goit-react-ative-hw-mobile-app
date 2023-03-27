import { StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

const LogoutButton = () => {
  const singOut = () => {};

  return (
    <TouchableOpacity onPress={singOut}>
      <Feather name="log-out" size={24} style={styles.LogoutButton} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  LogoutButton: {
    color: '#BDBDBD',
  },
});

export default LogoutButton;
