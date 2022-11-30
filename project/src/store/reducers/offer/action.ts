import { createAction } from '@reduxjs/toolkit';

export const setCity = createAction('offer/setCity', (cityName: string) => ({
  payload: cityName,
}));

export const updateOffers = createAction('offer/updateOffers', (cityName: string) => ({
  payload: cityName,
}));
