import { createAction } from '@reduxjs/toolkit';
import { ApiRoute, AppRoute } from '../../../const';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData } from '../../../types/auth-data';
import { dropToken, saveToken } from '../../../services/token';
import { IUser, IUserData } from '../../../types/user-data';
import { AppDispatch, State } from '../../../types/state';

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  await api.get(ApiRoute.Login);
});

export const loginUser = createAsyncThunk<
  IUser,
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
  dispatch(redirectToRoute(AppRoute.Main));
  return user;
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
});
