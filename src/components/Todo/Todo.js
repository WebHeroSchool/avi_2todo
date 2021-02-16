import React, { useState } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import ErrorBlock from '../ErrorBlock/ErrorBlock';

import styles from './Todo.module.css';

const Todo = () => {
  const initialState = {
    count: 0,
    items: [],
    sortList: [],
    filterName: '',
    filterItems: [
      {
        id: 1,
        value: "Завершенные",
        isActive: false
      },
      {
        id: 2,
        value: "Незавершенные",
        isActive: false
      },
      {
        id: 3,
        value: "Все",
        isActive: true
      },
    ],
  }

  const [todoItem, setTodoItem] = useState(initialState.items);
  const [filterItem, setFilterItem] = useState(initialState.filterItems);
  const [count, setCount] = useState(initialState.count);
  const [filterName, setFilterName] = useState(initialState.filterName);

  const onClickDone = id => {
    const newItemList =  todoItem.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    
    setTodoItem(newItemList);
  }

  const onClickDelete = id => {
    const newItems = todoItem.filter(item => item.id !== id);
    setTodoItem(newItems);
    setCount(count => count);
  }

  const onClickAdd = value => {
    const newTodoItem = [
      ...todoItem,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setTodoItem(newTodoItem);
    setCount(count => count + 1);
  }

  const onClickFilterActive = (id) => {

    const newFilterList = filterItem.map(item => {
      const newFilter = { ...item };
      if (item.id === id) {
        newFilter.isActive = true;

        setFilterName(item.value);
      } else {
        newFilter.isActive = false;
      }
      return newFilter;
    });

    setFilterItem(newFilterList);
  };


  let sortlist = [ ...todoItem];

  if (filterName === 'Завершенные') {
  sortlist = todoItem.filter(item => item.isDone);
  } else if (filterName === 'Незавершенные') {
  sortlist = todoItem.filter(item => !item.isDone);
  } else if (filterName === 'Все') {
  sortlist = todoItem;
  } else {
  sortlist = todoItem;
  }

  return (<div className={styles.wrapper}>

    <header className={styles.header}>
      <h1 className={styles.title}>Список моих дел</h1>

      <Filters
        filterItems={filterItem}
        onClickFilterActive={onClickFilterActive}
      />

    </header>

    {(count === 0) ?
      <ErrorBlock />
      : <ItemList
        items={sortlist}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
    />
    }
    
    <InputItem onClickAdd={onClickAdd} items={todoItem} count={ count }/>
    
   <Footer
      activeTaskCount={todoItem.filter(item => !item.isDone).length}
      noActiveTaskCount={todoItem.filter(item => item.isDone).length}
    />
  </div>
  );
}

export default Todo;
