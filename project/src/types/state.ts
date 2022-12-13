import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { IOffer } from './offer';
import { IReview } from './review';
import { IUser } from './user-data';

export interface IAuthState {
  authorizationStatus: AuthorizationStatus;
  user: IUser;
}

export interface IOfferState {
  offer: IOffer | null;
  isOfferDataLoading: boolean;
  isOfferError: boolean;
  offersNearBy: IOffer[];
  isOffersNearByLoading: boolean;
  isOffersNearByError: boolean;
  reviews: IReview[];
  isReviewsLoading: boolean;
  isReviewsError: boolean;
  isReviewLoading: boolean;
  isReviewError: boolean;
}

export interface IOffersState {
  city: string;
  allOffers: IOffer[];
  offers: IOffer[];
  isOffersDataLoading: boolean;
  isOffersDataError: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
