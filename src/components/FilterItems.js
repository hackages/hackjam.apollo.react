import React from 'react';
import PropTypes from 'prop-types';
import {Counter} from './Counter';

export const FilterItems = ({filters, selectTab, counter}) => {
  return (
    <div className="filters">
      <ul className="filters-list">
        {filters.map(filter =>
          <li key={filter.category} onClick={() => selectTab(filter.category)}>
            <a className={filter.selected ? 'selected' : ''}>
              {filter.category}
            </a>
          </li>
        )}
      </ul>
      <ul className="misc">
        <Counter value={counter} />
      </ul>
    </div>
  );
};

FilterItems.propTypes = {
  filters: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
