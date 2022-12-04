import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../../../const';

export const setCity = createAction('offer/setCity', (cityName: string) => ({
  payload: cityName,
}));

export const updateOffers = createAction('offer/updateOffers', (cityName: string) => ({
  payload: cityName,
}));

export const sortOffers = createAction('offer/sortOffers', (sort: keyof typeof SortType) => ({
  payload: sort,
}));
