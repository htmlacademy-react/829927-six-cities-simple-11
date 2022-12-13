import { ICity } from './types/offer';

enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
  NotFound = '*',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum SortType {
  Popular = 'Popular',
  PriceLowToHight = 'Price: low to high',
  PriceHightToLow = 'Price: high to low',
  Rate = 'Top rated first',
}

enum NameSpace {
  Authorization = 'AUTHORIZATION',
  Offers = 'OFFERS',
  Offer = 'OFFER',
}

enum ApiRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

const locations: ICity[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 12,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 12,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 12,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.377956,
      longitude: 4.89707,
      zoom: 12,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 12,
    },
    name: 'Dusseldorf',
  },
];

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const DEFAULT_CITY = 'Paris';

const DEFAULT_SORT_OPTION = 'Popular';

const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';

const REQUEST_TIMEOUT = 5000;

const MAX_RATING = 5;

const MIN_REVIEW_LENGTH = 50;

const MAX_REVIEW_LENGTH = 300;

const RATING_LABELS = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

const GALLERY_PHOTO_COUNT = 6;

const REVIEWS_PER_PAGE = 10;

export {
  AppRoute,
  AuthorizationStatus,
  SortType,
  NameSpace,
  ApiRoute,
  locations,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  DEFAULT_CITY,
  DEFAULT_SORT_OPTION,
  BACKEND_URL,
  REQUEST_TIMEOUT,
  MAX_RATING,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
  RATING_LABELS,
  GALLERY_PHOTO_COUNT,
  REVIEWS_PER_PAGE,
};
