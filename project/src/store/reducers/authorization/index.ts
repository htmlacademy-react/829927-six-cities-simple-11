import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const';
import { requireAuthorization } from './action';

interface IState {
  authorizationStatus: AuthorizationStatus;
}

const initialState: IState = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export default reducer;
