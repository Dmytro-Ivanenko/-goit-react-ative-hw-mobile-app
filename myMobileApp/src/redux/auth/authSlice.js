import { createSlice } from '@reduxjs/toolkit';

import { signUp, logIn, logOut, isUserLogin } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userID: null,
    login: null,
    email: null,
    userAuthorized: false,
  },
  extraReducers: builder => {
    builder
      // SIGNUP
      .addCase(signUp.pending, (state, { payload }) => {
        console.log('signUp pending');
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        const { user, login } = payload;
        state.userID = user.uid;
        state.login = login;
        state.email = payload.email;
        state.userAuthorized = true;
      })
      .addCase(signUp.rejected, state => {
        console.log('signUp rejected');
      })

      //LOGIN
      .addCase(logIn.pending, (state, { payload }) => {
        console.log('login pending');
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.userID = payload.uid;
        state.login = payload.displayName;
        state.email = payload.email;
        state.userAuthorized = true;
      })
      .addCase(logIn.rejected, state => {
        console.log('login rejected');
      })

      //LOGOUT
      .addCase(logOut.pending, (state, { payload }) => {
        console.log('logOut pending');
      })
      .addCase(logOut.fulfilled, state => {
        state.userID = null;
        state.login = null;
        state.email = null;
        state.userAuthorized = false;
      })
      .addCase(logOut.rejected, state => {
        console.log('logOut rejected');
      })

      //is user authorized
      .addCase(isUserLogin.pending, state => {
        console.log('isUserLogin pending');
      })
      .addCase(isUserLogin.fulfilled, (state, { payload }) => {
        state.userAuthorized = true;
        state.userID = payload.uid;
        state.login = payload.displayName;
        state.email = payload.email;
      })
      .addCase(isUserLogin.rejected, state => {
        console.log('isUserLogin rejected');
        state.userAuthorized = false;
      });
  },
});

export const authReducer = authSlice.reducer;
