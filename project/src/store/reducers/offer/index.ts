import { createReducer } from '@reduxjs/toolkit';
import { IOffer } from '../../../types/offer';
import { IReview } from '../../../types/review';
import {
  loadOffer,
  loadOffersNearBy,
  loadReviews,
  setOfferDataLoadingStatus,
  setOffersNearByLoadingStatus,
  setReviewLoadingStatus,
  setReviewsLoadingStatus,
} from './action';

interface IState {
  offer: IOffer | null;
  isOfferDataLoading: boolean;
  offersNearBy: IOffer[];
  isOffersNearByLoading: boolean;
  reviews: IReview[];
  isReviewsLoading: boolean;
  isReviewLoading: boolean;
}

const initialState: IState = {
  offer: null,
  isOfferDataLoading: false,
  offersNearBy: [],
  isOffersNearByLoading: false,
  reviews: [],
  isReviewsLoading: false,
  isReviewLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(loadOffersNearBy, (state, action) => {
      state.offersNearBy = action.payload;
    })
    .addCase(setOffersNearByLoadingStatus, (state, action) => {
      state.isOffersNearByLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoading = action.payload;
    })
    .addCase(setReviewLoadingStatus, (state, action) => {
      state.isReviewLoading = action.payload;
    });
});

export default reducer;
