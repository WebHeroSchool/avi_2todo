import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (<ul className={styles.list}>
  {items.map(item => <li key={item.value}><Item value={item.value} /></li>)}
</ul>)

export default ItemList;
