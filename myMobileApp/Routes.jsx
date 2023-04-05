import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import db from './src/firebase/config';
import useRoute from './src/shared/hooks/useRout';

// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

// options
const auth = getAuth(db);

// const loadApplication = async () => {
//   await Font.loadAsync({
//     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
//     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
//     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
//   });
// };

export default function Routes() {
  // const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, user => {
    setUser(user);
  });

  const routing = useRoute(user);
  //   if (!isReady) {
  //     return (
  //       <AppLoading
  //         startAsync={loadApplication}
  //         onFinish={() => setIsReady(true)}
  //         onError={console.warn}
  //       />
  //     );
  //   }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
