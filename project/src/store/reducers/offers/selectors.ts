import { NameSpace } from '../../../const';
import { IOffer } from '../../../types/offer';
import { State } from '../../../types/state';

export const getCity = (state: State): string => state[NameSpace.Offers].city;
export const getOffers = (state: State): IOffer[] => state[NameSpace.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getOffersErrorStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataError;
