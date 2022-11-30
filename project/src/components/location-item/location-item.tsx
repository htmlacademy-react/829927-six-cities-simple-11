import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import { useActions } from '../../hooks/useActions';
import useAppSelector from '../../hooks/useAppSelector';

interface LocationItemProps {
  locationName: string;
  type: 'single' | 'list';
}

function LocationItem({ locationName, type }: PropsWithChildren<LocationItemProps>): JSX.Element {
  const { setCity } = useActions();
  const { city } = useAppSelector((state) => state.OFFER);

  const handleLocationClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setCity(locationName);
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
      <a className="locations__item-link" href="/" onClick={handleLocationClick}>
        <span>{locationName}</span>
      </a>
    </div>
  );
}

export default LocationItem;
