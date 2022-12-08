import * as AuthorizationActionCreators from './reducers/authorization/action';
import * as OffersActionCreators from './reducers/offers/action';
import * as OfferActionCreators from './reducers/offer/action';

const allActionCreators = {
  ...AuthorizationActionCreators,
  ...OffersActionCreators,
  ...OfferActionCreators,
};

export default allActionCreators;
