import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import AuthorizationReducer from './reducers/authorization';
import OffersReducer from './reducers/offers';
import OfferReducer from './reducers/offer';

export const rootReducer = combineReducers({
  [NameSpace.Authorization]: AuthorizationReducer,
  [NameSpace.Offers]: OffersReducer,
  [NameSpace.Offer]: OfferReducer,
});
