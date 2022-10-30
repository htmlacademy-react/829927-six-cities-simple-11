import React from 'react';
import { SortType } from '../../const';

function Sort(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {/* active className places__option--active */}
        {Object.values(SortType).map((option: string) => (
          <li className="places__option" tabIndex={0} key={option}>
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
