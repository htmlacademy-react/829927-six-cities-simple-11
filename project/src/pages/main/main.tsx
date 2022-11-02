import React from 'react';
import cn from 'classnames';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Map from '../../components/map/map';
import NoPlaces from '../../components/no-places/no-places';
import Places from '../../components/places/places';

interface MainProps {
  offersCount: number;
}

function Main({ offersCount }: MainProps): JSX.Element {
  const noOffers = offersCount === 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={cn('page__main page__main--index', {
          'page__main--index-empty': noOffers,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div
            className={cn('cities__places-container container', {
              'cities__places-container--empty': noOffers,
            })}
          >
            {noOffers ? <NoPlaces /> : <Places offersCount={offersCount} />}
            <div className="cities__right-section">{!noOffers && <Map />}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
