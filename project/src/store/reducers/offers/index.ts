import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace, SortType } from '../../../const';
import { IOffersState } from '../../../types/state';
import { getOffersByCity, sortOffersBy } from '../../../utils/offer';
import { fetchOffers } from './action';

const initialState: IOffersState = {
  city: DEFAULT_CITY,
  allOffers: [],
  offers: [],
  isOffersDataLoading: false,
  isOffersDataError: false,
};

const reducer = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
      state.offers = getOffersByCity(state.allOffers, action.payload);
    },
    sortOffers: (state, action: PayloadAction<keyof typeof SortType>) => {
      state.offers = sortOffersBy(state.allOffers, state.offers, action.payload, state.city);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoading = true;
        state.isOffersDataError = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.allOffers = action.payload;
        state.offers = getOffersByCity(state.allOffers, DEFAULT_CITY);
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.isOffersDataError = true;
      });
  },
});

export default reducer;
