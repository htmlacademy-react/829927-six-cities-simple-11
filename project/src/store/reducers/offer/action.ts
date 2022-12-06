import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, SortType } from '../../../const';
import { IOffer } from '../../../types/IOffer';
import { AppDispatch, State } from '../../../types/state';

export const setCity = createAction('offer/setCity', (cityName: string) => ({
  payload: cityName,
}));

export const updateOffers = createAction('offer/updateOffers', (cityName: string) => ({
  payload: cityName,
}));

export const sortOffers = createAction('offer/sortOffers', (sort: keyof typeof SortType) => ({
  payload: sort,
}));

export const loadOffers = createAction<IOffer[]>('offer/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<IOffer[]>(APIRoute.Offers);
  dispatch(loadOffers(data));
  dispatch(setOffersDataLoadingStatus(false));
});
