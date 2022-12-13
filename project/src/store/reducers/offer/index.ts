import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { IOfferState } from '../../../types/state';
import { fetchOffer, fetchOffersNearBy, fetchReviews, postReview } from './action';

const initialState: IOfferState = {
  offer: null,
  isOfferDataLoading: false,
  isOfferError: false,
  offersNearBy: [],
  isOffersNearByLoading: false,
  isOffersNearByError: false,
  reviews: [],
  isReviewsLoading: false,
  isReviewsError: false,
  isReviewLoading: false,
  isReviewError: false,
};

const reducer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferDataLoading = true;
        state.isOfferError = false;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        if (action.payload) {
          state.offer = action.payload;
          state.isOfferDataLoading = false;
        }
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferDataLoading = false;
        state.isOfferError = true;
      })
      .addCase(fetchOffersNearBy.pending, (state) => {
        state.isOffersNearByLoading = true;
        state.isOffersNearByError = false;
      })
      .addCase(fetchOffersNearBy.fulfilled, (state, action) => {
        state.offersNearBy = action.payload;
        state.isOffersNearByLoading = false;
      })
      .addCase(fetchOffersNearBy.rejected, (state) => {
        state.isOffersNearByLoading = false;
        state.isOffersNearByError = true;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsLoading = true;
        state.isReviewsError = false;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.isReviewsLoading = false;
        state.isReviewsError = true;
      })
      .addCase(postReview.pending, (state) => {
        state.isReviewLoading = true;
        state.isReviewError = false;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewLoading = false;
      })
      .addCase(postReview.rejected, (state) => {
        state.isReviewLoading = false;
        state.isReviewError = true;
      });
  },
});

export default reducer;
