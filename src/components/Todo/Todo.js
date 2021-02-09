import React, { useState } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';

import styles from './Todo.module.css';

import addTaskPic from './img/addTask.svg';

const Todo = () => {
  const initialState = {
    count: 0,
    items: [],
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
        isActive: true
      },
      {
        id: 3,
        value: "Все",
        isActive: false
      },
    ],
  }

  const [todoItem, setTodoItem] = useState(initialState.items);
  const [filterItem, setFilterItem] = useState(initialState.filterItems);
  const [count, setCount] = useState(initialState.count);

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
    setCount(count => count - 1);
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

  let sortlist = todoItem;
  const onClickFilterList = (sortlist, filterName) => {

    if (filterName === 'Завершенные') {
      sortlist = todoItem.filter(item => item.isDone);
    } else if (filterName === 'Незавершенные') {
      sortlist = todoItem.filter(item => !item.isDone);
    } else if (filterName === 'Все') {
      sortlist = todoItem;
    } else {
      sortlist = todoItem;
    }
    console.log(sortlist, filterName);
    return sortlist;
  };


  const onClickFilterActive = (id, sortlist, filterName) => {
    const newFilterList = filterItem.map(item => {
      const newFilter = { ...item };
      if (item.id === id) {
        newFilter.isActive = true;
        filterName = item.value;

        onClickFilterList(sortlist, filterName);
        
      } else {
        newFilter.isActive = false;
      }
      return newFilter;
    });

    setFilterItem(newFilterList);
  };

  
  

  return (<div className={styles.wrapper}>

    <header className={styles.header}>
      <h1 className={styles.title}>Список моих дел</h1>

      <Filters
        filterItems={filterItem}
        onClickFilterActive={onClickFilterActive}
      />

    </header>

    {(count === 0) ? <img className={styles.pic} src={addTaskPic} width="321" height="233" alt="нет дел" />
      : <ItemList
        items={todoItem}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        sort={sortlist}
    />
    }
    
    <InputItem onClickAdd={onClickAdd} />
    
   <Footer
      activeTaskCount={todoItem.filter(item => !item.isDone).length}
      noActiveTaskCount={todoItem.filter(item => item.isDone).length}
    />
  </div>
  );
}

export default Todo;
