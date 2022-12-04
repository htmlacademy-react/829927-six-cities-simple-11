import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import OfferReducer from './reducers/offer';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: OfferReducer,
});
