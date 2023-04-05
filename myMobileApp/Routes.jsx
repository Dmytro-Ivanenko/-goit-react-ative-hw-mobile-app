import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import db from './src/firebase/config';
import useRoute from './src/shared/hooks/useRout';
import { isUserLogin } from './src/redux/auth/authOperations';
import { getIsUserLogin } from './src/redux/selectors';

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
  const dispatch = useDispatch();
  const userAuthorization = useSelector(getIsUserLogin);

  useEffect(() => {
    dispatch(isUserLogin());
  }, []);

  const routing = useRoute(userAuthorization);
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
