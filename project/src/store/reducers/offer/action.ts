import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute } from '../../../const';
import { IOffer } from '../../../types/offer';
import { IReview, IReviewParams } from '../../../types/review';
import { AppDispatch, State } from '../../../types/state';
import { redirectToRoute } from '../authorization/action';

export const fetchOffer = createAsyncThunk<
  IOffer | void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffer', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<IOffer>(`${ApiRoute.Offers}/${id}`);
    return data;
  } catch {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }
});

export const fetchOffersNearBy = createAsyncThunk<
  IOffer[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffersNearBy', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<IOffer[]>(`${ApiRoute.Offers}/${id}/nearby`);
  return data;
});

export const fetchReviews = createAsyncThunk<
  IReview[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchReviews', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<IReview[]>(`${ApiRoute.Reviews}/${id}`);
  return data;
});

export const postReview = createAsyncThunk<
  IReview[],
  IReviewParams,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/postReview', async (params, { dispatch, extra: api }) => {
  const { data } = await api.post<IReview[]>(`${ApiRoute.Reviews}/${params.id}`, params.review);
  return data;
});
