import { locations } from '../const';
import { ICity, IOffer } from '../types/IOffer';

const getOffersByCity = (offers: IOffer[], city: string) => offers.filter((offer: IOffer) => offer.city.name === city);

const getLatLongByCity = (currentCity: string): ICity => locations.find((location: ICity) => location.name === currentCity) as ICity;

export { getOffersByCity, getLatLongByCity };
