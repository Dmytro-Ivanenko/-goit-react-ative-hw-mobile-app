import { createSlice } from '@reduxjs/toolkit';

import { signUp, logIn, logOut, isUserLogin } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userID: null,
    login: null,
    email: null,
    userAuthorized: null,
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
      .addCase(signUp.rejected, (state, { payload }) => {
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
      .addCase(logIn.rejected, (state, { payload }) => {
        console.log('login rejected');
      })

      //LOGOUT
      .addCase(logOut.pending, (state, { payload }) => {
        console.log('logOut pending');
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        console.log('logOut rejected');
      })

      //is user authorized
      .addCase(isUserLogin.pending, (state, { payload }) => {
        console.log('isUserLogin pending');
      })
      .addCase(isUserLogin.fulfilled, (state, { payload }) => {
        state.userAuthorized = true;
        state.userID = payload.uid;
        state.login = payload.displayName;
        state.email = payload.email;

        console.log(payload);
      })
      .addCase(isUserLogin.rejected, (state, { payload }) => {
        console.log('isUserLogin rejected');
        state.userAuthorized = false;
      });
  },
});

export const authReducer = authSlice.reducer;
