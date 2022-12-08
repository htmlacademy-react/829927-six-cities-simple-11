import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute } from '../../../const';
import { IOffer } from '../../../types/offer';
import { IReview, IReviewParams } from '../../../types/review';
import { AppDispatch, State } from '../../../types/state';
import { redirectToRoute } from '../authorization/action';

export const loadOffer = createAction<IOffer>('offer/loadOffer');

export const setOfferDataLoadingStatus = createAction<boolean>('offer/setOfferDataLoadingStatus');

export const loadOffersNearBy = createAction('offer/loadOffersNearBy', (offers: IOffer[]) => ({ payload: offers }));

export const setOffersNearByLoadingStatus = createAction('offer/setOffersNearByLoadingStatus', (isLoading: boolean) => ({ payload: isLoading }));

export const loadReviews = createAction('offer/loadReviews', (reviews: IReview[]) => ({ payload: reviews }));

export const setReviewsLoadingStatus = createAction('offer/setReviewsLoadingStatus', (isLoading: boolean) => ({ payload: isLoading }));

export const setReviewLoadingStatus = createAction('offer/setReviewLoadingStatus', (isLoading: boolean) => ({ payload: isLoading }));

export const fetchOffer = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffer', async (id, { dispatch, extra: api }) => {
  try {
    dispatch(setOfferDataLoadingStatus(true));
    const { data } = await api.get<IOffer>(`${ApiRoute.Offers}/${id}`);
    dispatch(loadOffer(data));
    dispatch(setOfferDataLoadingStatus(false));
  } catch {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }
});

export const fetchOffersNearBy = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffersNearBy', async (id, { dispatch, extra: api }) => {
  dispatch(setOffersNearByLoadingStatus(true));

  const { data } = await api.get<IOffer[]>(`${ApiRoute.Offers}/${id}/nearby`);

  dispatch(loadOffersNearBy(data));
  dispatch(setOffersNearByLoadingStatus(false));
});

export const fetchReviews = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchReviews', async (id, { dispatch, extra: api }) => {
  dispatch(setReviewsLoadingStatus(true));

  const { data } = await api.get<IReview[]>(`${ApiRoute.Reviews}/${id}`);

  dispatch(loadReviews(data));
  dispatch(setReviewsLoadingStatus(false));
});

export const postReview = createAsyncThunk<
  void,
  IReviewParams,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/postReview', async (params, { dispatch, extra: api }) => {
  dispatch(setReviewLoadingStatus(true));

  const { data } = await api.post<IReview[]>(`${ApiRoute.Reviews}/${params.id}`, params.review);

  dispatch(loadReviews(data));
  dispatch(setReviewLoadingStatus(false));
});
