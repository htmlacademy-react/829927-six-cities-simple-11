import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../../const';
import { IOffer } from '../../../types/offer';
import { AppDispatch, State } from '../../../types/state';

export const fetchOffers = createAsyncThunk<
  IOffer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<IOffer[]>(ApiRoute.Offers);
  return data;
});
