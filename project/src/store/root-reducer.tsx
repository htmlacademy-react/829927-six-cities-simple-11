import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import AuthorizationReducer from './reducers/authorization';
import OfferReducer from './reducers/offer';

export const rootReducer = combineReducers({
  [NameSpace.Authorization]: AuthorizationReducer,
  [NameSpace.Offer]: OfferReducer,
});
