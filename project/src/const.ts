import { ICity } from './types/IOffer';

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
  Offer = 'OFFER',
}

const locations: ICity[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 10,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.377956,
      longitude: 4.89707,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
    name: 'Dusserdorf',
  },
];

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const DEFAULT_CITY = 'Paris';

const DEFAULT_SORT_OPTION = 'Popular';

export { AppRoute, AuthorizationStatus, SortType, NameSpace, locations, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CITY, DEFAULT_SORT_OPTION };
