import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../../../const';
import { offers } from '../../../mocks/offers';
import { getOffersByCity, sortOffersBy } from '../../../utils/offer';
import { setCity, sortOffers, updateOffers } from './action';

const initialState = {
  city: DEFAULT_CITY,
  offers: getOffersByCity(offers, DEFAULT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
      state.offers = getOffersByCity(offers, action.payload);
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = getOffersByCity(offers, action.payload);
    })
    .addCase(sortOffers, (state, action) => {
      state.offers = sortOffersBy(state.offers, action.payload);
    });
});

export default reducer;
