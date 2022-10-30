import { IPlace } from './types/IPlace';

enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  Rate = 'Top rated first',
}

const locations: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusserdorf'];

const places: IPlace[] = [
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 10,
        longitude: 20,
        zoom: 1,
      },
      name: 'Berlin',
    },
    description: 'Description',
    goods: [],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    id: 1,
    images: [],
    isPremium: true,
    location: {
      latitude: 10,
      longitude: 5,
      zoom: 1,
    },
    maxAdults: 2,
    previewImage: '',
    price: 100,
    rating: 10,
    title: '',
    type: '',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 10,
        longitude: 20,
        zoom: 1,
      },
      name: 'Berlin',
    },
    description: 'Description',
    goods: [],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    id: 2,
    images: [],
    isPremium: true,
    location: {
      latitude: 10,
      longitude: 5,
      zoom: 1,
    },
    maxAdults: 2,
    previewImage: '',
    price: 100,
    rating: 10,
    title: '',
    type: '',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 10,
        longitude: 20,
        zoom: 1,
      },
      name: 'Berlin',
    },
    description: 'Description',
    goods: [],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    id: 3,
    images: [],
    isPremium: true,
    location: {
      latitude: 10,
      longitude: 5,
      zoom: 1,
    },
    maxAdults: 2,
    previewImage: '',
    price: 100,
    rating: 10,
    title: '',
    type: '',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 10,
        longitude: 20,
        zoom: 1,
      },
      name: 'Berlin',
    },
    description: 'Description',
    goods: [],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    id: 4,
    images: [],
    isPremium: true,
    location: {
      latitude: 10,
      longitude: 5,
      zoom: 1,
    },
    maxAdults: 2,
    previewImage: '',
    price: 100,
    rating: 10,
    title: '',
    type: '',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 10,
        longitude: 20,
        zoom: 1,
      },
      name: 'Berlin',
    },
    description: 'Description',
    goods: [],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    id: 5,
    images: [],
    isPremium: true,
    location: {
      latitude: 10,
      longitude: 5,
      zoom: 1,
    },
    maxAdults: 2,
    previewImage: '',
    price: 100,
    rating: 10,
    title: '',
    type: '',
  },
];

export { AppRoute, AuthorizationStatus, SortType, places, locations };
