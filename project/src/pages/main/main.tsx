import React, { useState } from 'react';
import cn from 'classnames';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Map from '../../components/map/map';
import NoPlaces from '../../components/no-places/no-places';
import Places from '../../components/places/places';
import { IOffer } from '../../types/IOffer';

interface MainProps {
  offers: IOffer[];
}

function Main({ offers }: MainProps): JSX.Element {
  const noOffers = offers.length === 0;
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const onCardMouseEnter = (evt: React.MouseEvent<HTMLDivElement>) => {
    setActiveCardId(Number(evt.currentTarget.dataset.id));
  };

  const onCardMouseLeave = (evt: React.MouseEvent<HTMLDivElement>) => {
    setActiveCardId(null);
  };

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
            {noOffers ? <NoPlaces /> : <Places offers={offers} onCardMouseEnter={onCardMouseEnter} onCardMouseLeave={onCardMouseLeave} />}
            <div className="cities__right-section">{!noOffers && <Map type="main-page" offers={offers} activeCardId={activeCardId} />}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
