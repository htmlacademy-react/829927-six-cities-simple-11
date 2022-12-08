import { createAction } from '@reduxjs/toolkit';
import { ApiRoute, AppRoute, AuthorizationStatus } from '../../../const';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData } from '../../../types/auth-data';
import { dropToken, saveToken } from '../../../services/token';
import { IUser, IUserData } from '../../../types/user-data';
import { AppDispatch, State } from '../../../types/state';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');

export const setUser = createAction('user/setUser', (user: IUser) => ({
  payload: user,
}));

export const clearUser = createAction('user/clearUser');

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(ApiRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginUser = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { dispatch, extra: api }) => {
  const {
    data: { token, ...user },
  } = await api.post<IUserData>(ApiRoute.Login, { email, password });
  saveToken(token);
  dispatch(setUser(user));
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Main));
});

export const logoutUser = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoute.Logout);
  dropToken();
  dispatch(clearUser());
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
