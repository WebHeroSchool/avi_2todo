import React from 'react';
import Item from '../Item/Item';

const ItemList = ( {todoItem} ) => (<ul>
  <li><Item todoItem={todoItem} /> 1</li>
  <li><Item todoItem={todoItem} /> 2</li>
  <li><Item todoItem={todoItem} /> 3</li>
</ul>)


export default ItemList;