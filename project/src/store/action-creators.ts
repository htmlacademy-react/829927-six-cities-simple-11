import * as AuthorizationActionCreators from './reducers/authorization/action';
import * as OffersActionCreators from './reducers/offers/action';
import * as OfferActionCreators from './reducers/offer/action';
import Authorization from './reducers/authorization';
import Offers from './reducers/offers';
import Offer from './reducers/offer';

const allActionCreators = {
  ...AuthorizationActionCreators,
  ...Authorization.actions,
  ...OffersActionCreators,
  ...Offers.actions,
  ...OfferActionCreators,
  ...Offer.actions,
};

export default allActionCreators;
