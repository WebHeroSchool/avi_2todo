import React from 'react';
import FiltersItem from '../FiltersItem/FiltersItem';
import styles from './Filters.module.css';

export default function Filters(
  { filterItems,
    onClickFilterActive
  }) {

    return (
      <div className={styles.filters}>
        {filterItems.map((item) => {
          return (
            <FiltersItem
              key={item.id}
              id={item.id}
              value={item.value}
              isActive={item.isActive}
              onClickFilterActive={onClickFilterActive}
            />
          )
        })}
      </div>
    );
  
} 
