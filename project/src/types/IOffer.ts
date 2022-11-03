export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface ICity {
  location: ILocation;
  name: string;
}

export interface IHost {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export interface IOffer {
  bedrooms: number;
  city: ICity;
  description: string;
  goods: string[];
  host: IHost;
  id: number;
  images: string[];
  isPremium: boolean;
  location: ILocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}
