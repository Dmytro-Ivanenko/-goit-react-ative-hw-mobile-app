import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import useRoute from './src/shared/hooks/useRout';
import { isUserLogin } from './src/redux/auth/authOperations';
import { getIsUserLogin } from './src/redux/selectors';

export default function Routes() {
  const dispatch = useDispatch();
  const userAuthorization = useSelector(getIsUserLogin);
  const routing = useRoute(userAuthorization);

  useEffect(() => {
    dispatch(isUserLogin());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
