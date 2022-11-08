import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { IOffer } from '../../types/IOffer';

interface PlaceCardProps {
  type: 'city-card' | 'similar-card';
  place: IOffer;
  onCardMouseEnter?: (evt: React.MouseEvent<HTMLDivElement>) => void;
  onCardMouseLeave?: (evt: React.MouseEvent<HTMLDivElement>) => void;
}

function PlaceCard({ type, place, onCardMouseEnter, onCardMouseLeave }: PlaceCardProps): JSX.Element {
  return (
    <article
      className={cn('place-card', {
        'cities-card': type === 'city-card',
        'near-places__card': type === 'similar-card',
      })}
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
      data-id={place.id}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div
        className={cn('place-card__image-wrapper', {
          'cities__image-wrapper': type === 'city-card',
          'near-places__image-wrapper': type === 'similar-card',
        })}
      >
        <Link to={`offer/${place.id}`}>
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${place.id}`}>Beautiful &amp; luxurious apartment at great location</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
