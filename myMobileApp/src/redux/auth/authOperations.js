import { createAsyncThunk } from '@reduxjs/toolkit';

import db from '../../firebase/config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const auth = getAuth(db);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ password, email, login }, { rejectWithValue }) => {
    try {
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
      //   const response = await Api.login(profileData);
      //   return response;
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
