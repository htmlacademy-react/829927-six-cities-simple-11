import React from 'react';
import { AppRoute, locations } from '../../const';
import LocationItem from '../location-item/location-item';

function Locations(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location: string) => (
          <LocationItem type="list" path={AppRoute.Main} key={location}>
            {location}
          </LocationItem>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
