import { locations, MAX_RATING, SortType } from '../const';
import { ICity, IOffer } from '../types/IOffer';

const getOffersByCity = (offers: IOffer[], city: string) => offers.filter((offer: IOffer) => offer.city.name === city);

const getLatLongByCity = (currentCity: string): ICity => locations.find((location: ICity) => location.name === currentCity) as ICity;

const sortByPopular = (offers: IOffer[]): IOffer[] => offers;

const sortByPriceHightToLow = (offers: IOffer[]): IOffer[] => offers.sort((offerA, offerB) => offerA.price - offerB.price);

const sortByPriceLowToHight = (offers: IOffer[]): IOffer[] => offers.sort((offerA, offerB) => offerB.price - offerA.price);

const sortByTopRated = (offers: IOffer[]): IOffer[] => offers.sort((offerA, offerB) => offerB.rating - offerA.rating);

const sortOffersBy = (allOffers: IOffer[], offers: IOffer[], sortType: keyof typeof SortType, city: string) => {
  switch (sortType) {
    case 'Popular':
      offers = getOffersByCity(allOffers, city);
      break;
    case 'PriceLowToHight':
      offers = sortByPriceHightToLow(offers);
      break;
    case 'PriceHightToLow':
      offers = sortByPriceLowToHight(offers);
      break;
    case 'Rate':
      offers = sortByTopRated(offers);
      break;
  }
  return offers;
};

const getSortKeyByValue = (value: string) => {
  const indexOfValue = Object.values(SortType).indexOf(value as unknown as SortType);
  const key = Object.keys(SortType)[indexOfValue];

  return key;
};

const transformRatingToWidth = (rating: number) => `${(Math.round(rating) / MAX_RATING) * 100}%`;

export {
  getOffersByCity,
  getLatLongByCity,
  sortByPopular,
  sortByPriceHightToLow,
  sortByPriceLowToHight,
  sortByTopRated,
  sortOffersBy,
  getSortKeyByValue,
  transformRatingToWidth,
};
