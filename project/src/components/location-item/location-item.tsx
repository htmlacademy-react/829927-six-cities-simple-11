import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import { useActions } from '../../hooks/useActions';
import useAppSelector from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

interface LocationItemProps {
  locationName: string;
  type: 'single' | 'list';
  isNotFoundPage?: boolean;
}

function LocationItem({ isNotFoundPage = false, locationName, type }: PropsWithChildren<LocationItemProps>): JSX.Element {
  const { setCity } = useActions();
  const navigate = useNavigate();
  const { city } = useAppSelector((state) => state.OFFERS);

  const handleLocationClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setCity(locationName);
  };

  const handleSingleLocationClick = (evt: React.MouseEvent) => {
    if (isNotFoundPage) {
      evt.preventDefault();
      return navigate(AppRoute.Main);
    }

    handleLocationClick(evt);
    navigate(AppRoute.Main);
  };

  return type === 'list' ? (
    <li className="locations__item">
      <a
        className={cn('locations__item-link tabs__item', {
          'tabs__item--active': locationName === city,
        })}
        href="/"
        onClick={handleLocationClick}
      >
        <span>{locationName}</span>
      </a>
    </li>
  ) : (
    <div className="locations__item">
      <a className="locations__item-link" href="/" onClick={handleSingleLocationClick}>
        <span>{locationName}</span>
      </a>
    </div>
  );
}

export default LocationItem;
