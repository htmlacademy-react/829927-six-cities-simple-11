import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, SortType } from '../../../const';
import { IOffer } from '../../../types/offer';
import { AppDispatch, State } from '../../../types/state';

export const setCity = createAction('offers/setCity', (cityName: string) => ({
  payload: cityName,
}));

export const updateOffers = createAction('offers/updateOffers', (cityName: string) => ({
  payload: cityName,
}));

export const sortOffers = createAction('offers/sortOffers', (sort: keyof typeof SortType) => ({
  payload: sort,
}));

export const loadOffers = createAction<IOffer[]>('offers/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

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
  const { data } = await api.get<IOffer[]>(ApiRoute.Offers);
  dispatch(loadOffers(data));
  dispatch(setOffersDataLoadingStatus(false));
});
