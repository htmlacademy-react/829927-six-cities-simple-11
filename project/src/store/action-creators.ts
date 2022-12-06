import * as AuthorizationActionCreators from './reducers/authorization/action';
import * as OfferActionCreators from './reducers/offer/action';

const allActionCreators = {
  ...AuthorizationActionCreators,
  ...OfferActionCreators,
};

export default allActionCreators;
