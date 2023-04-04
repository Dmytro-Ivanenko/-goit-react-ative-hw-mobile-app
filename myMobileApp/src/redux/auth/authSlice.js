import { createSlice } from '@reduxjs/toolkit';

import { signUp } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userID: null,
    login: null,
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        // const { user, login } = payload;
        // state.login = login;

        console.log(payload);
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        console.log(payload);
      });
  },
});

export const authReducer = authSlice.reducer;
