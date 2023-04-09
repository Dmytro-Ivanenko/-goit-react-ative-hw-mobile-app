import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import useRoute from './src/shared/hooks/useRout';
import { isUserLogin } from './src/redux/auth/authOperations';
import { getIsUserLogin, isLoading } from './src/redux/selectors';

import Loader from './src/Components/Loader/Loader';

export default function Routes() {
  const dispatch = useDispatch();
  const userAuthorization = useSelector(getIsUserLogin);
  const loading = useSelector(isLoading);
  const routing = useRoute(userAuthorization);

  useEffect(() => {
    dispatch(isUserLogin());
  }, []);

  if (loading) {
    return <Loader />;
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}
