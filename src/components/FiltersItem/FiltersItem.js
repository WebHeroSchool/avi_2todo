import React from 'react';
import classnames from 'classnames';
import styles from './FiltersItem.module.css';

export default function FiltersItem(
  { id,
    value,
    onClickFilterActive,
    isActive
  }) {

    return (
      <button
        key={id}
        value={value}
        id={id}
        onClick={() => onClickFilterActive(id)}
        className={
          classnames({
            [styles.filterBtn]: true,
            [styles.active]: isActive
          })
        }
        >
        {value}
      </button>
    );
  
} 
