import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

interface LocationItemProps {
  type: 'single' | 'list';
  path: AppRoute;
}

function LocationItem({ type, path, children }: PropsWithChildren<LocationItemProps>): JSX.Element {
  return type === 'list' ? (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to={path}>
        <span>{children}</span>
      </Link>
    </li>
  ) : (
    <div className="locations__item">
      <Link className="locations__item-link" to={path}>
        <span>{children}</span>
      </Link>
    </div>
  );
}

export default LocationItem;
