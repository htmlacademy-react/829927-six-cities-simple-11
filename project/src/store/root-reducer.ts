import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import Authorization from './reducers/authorization';
import Offers from './reducers/offers';
import Offer from './reducers/offer';

export const rootReducer = combineReducers({
  [NameSpace.Authorization]: Authorization.reducer,
  [NameSpace.Offers]: Offers.reducer,
  [NameSpace.Offer]: Offer.reducer,
});
