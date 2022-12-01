import React, { useState } from 'react';
import cn from 'classnames';
import { DEFAULT_SORT_OPTION, SortType } from '../../const';
import { useActions } from '../../hooks/useActions';
import { getSortKeyByValue } from '../../utils/offer';

function Sort(): JSX.Element {
  const { sortOffers } = useActions();
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sort, setSort] = useState(DEFAULT_SORT_OPTION);

  const handleOpenSortBtnClick = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSortBtnClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    if (evt.currentTarget.dataset.key && evt.currentTarget.dataset.value) {
      setSort(evt.currentTarget.dataset.value);
      sortOffers(evt.currentTarget.dataset.key as keyof typeof SortType);
      setIsSortOpen(false);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleOpenSortBtnClick}>
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isSortOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortType).map((option: string) => (
            <li
              className={cn('places__option', {
                'places__option--active': sort === option,
              })}
              tabIndex={0}
              key={option}
              data-key={getSortKeyByValue(option)}
              data-value={option}
              onClick={handleSortBtnClick}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Sort;
