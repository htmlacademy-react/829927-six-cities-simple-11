import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const';
import { IUser } from '../../../types/user-data';
import { clearUser, requireAuthorization, setUser } from './action';

interface IState {
  authorizationStatus: AuthorizationStatus;
  user: IUser;
}

const initialState: IState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {} as IUser,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(clearUser, (state, action) => {
      state.user = {} as IUser;
    });
});

export default reducer;
