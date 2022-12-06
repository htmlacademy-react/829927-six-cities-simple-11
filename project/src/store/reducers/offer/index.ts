import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../../../const';
import { IOffer } from '../../../types/IOffer';
import { getOffersByCity, sortOffersBy } from '../../../utils/offer';
import { loadOffers, setCity, setOffersDataLoadingStatus, sortOffers, updateOffers } from './action';

interface IState {
  city: string;
  allOffers: IOffer[];
  offers: IOffer[];
  isOffersDataLoading: boolean;
}

const initialState: IState = {
  city: DEFAULT_CITY,
  allOffers: [],
  offers: [],
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
      state.offers = getOffersByCity(state.allOffers, action.payload);
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = getOffersByCity(state.allOffers, action.payload);
    })
    .addCase(sortOffers, (state, action) => {
      state.offers = sortOffersBy(state.allOffers, state.offers, action.payload, state.city);
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      state.offers = getOffersByCity(state.allOffers, DEFAULT_CITY);
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export default reducer;
