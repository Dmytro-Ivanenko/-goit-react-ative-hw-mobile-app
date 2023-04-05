import { createAsyncThunk } from '@reduxjs/toolkit';

import db from '../../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const auth = getAuth(db);

export const signUp = createAsyncThunk(
  'auth/signup',
  async (profileData, { rejectWithValue }) => {
    try {
      const { password, email, login } = profileData;
      const user = await createUserWithEmailAndPassword(auth, email, password);

      return { user, login };
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (profileData, { rejectWithValue }) => {
    try {
      const { password, email } = profileData;
      const user = await signInWithEmailAndPassword(auth, email, password);

      return { user };
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (profileData, { rejectWithValue }) => {
    try {
      //   const response = await Api.logout(profileData);
      //   return response;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
