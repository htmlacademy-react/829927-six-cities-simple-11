import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { IAuthState } from '../../../types/state';
import { IUser } from '../../../types/user-data';
import { checkAuth, loginUser, logoutUser } from './action';

const initialState: IAuthState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {} as IUser,
};

const reducer = createSlice({
  name: NameSpace.Authorization,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = {} as IUser;
      });
  },
});

export default reducer;
