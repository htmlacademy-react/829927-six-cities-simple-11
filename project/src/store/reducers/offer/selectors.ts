import { NameSpace } from '../../../const';
import { IOffer } from '../../../types/offer';
import { IReview } from '../../../types/review';
import { State } from '../../../types/state';

export const getOffer = (state: State): IOffer | null => state[NameSpace.Offer].offer;
export const getOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isOfferDataLoading;
export const getOfferErrorStatus = (state: State): boolean => state[NameSpace.Offer].isOfferError;
export const getOffersNearBy = (state: State): IOffer[] => state[NameSpace.Offer].offersNearBy;
export const getOffersNearByLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isOffersNearByLoading;
export const getOffersNearByErrorStatus = (state: State): boolean => state[NameSpace.Offer].isOffersNearByError;
export const getReviews = (state: State): IReview[] => state[NameSpace.Offer].reviews;
export const getReviewsLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isReviewsLoading;
export const getReviewsErrorStatus = (state: State): boolean => state[NameSpace.Offer].isReviewsError;
export const getReviewLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isReviewLoading;
export const getReviewErrorStatus = (state: State): boolean => state[NameSpace.Offer].isReviewError;
