import React, { useState } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';

import styles from './Todo.module.css';

import addTaskPic from './img/addTask.svg';

const Todo = () => {
  const initialState = {
    count: 3,
    items: [
      {
        value: 'Задача № 1',
        isDone: false,
        id: 1
      },
      {
        value: 'Задача № 2',
        isDone: false,
        id: 2
      },
      {
        value: 'Задача № 3',
        isDone: true,
        id: 3
      }
    ]
  }

  const [todoItem, setTodoItem] = useState(initialState.items);
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

  
  const completedItems = todoItem.filter(item => item.isDone === true);
  const uncompletedItems = todoItem.filter(item => item.isDone === false);

  const onClickCompleted = () => {
    const completedItems = todoItem.filter(item => item.isDone === true);
    setTodoItem(completedItems);
  }

  const onClickUncompleted = () => {
    const uncompletedItems = todoItem.filter(item => item.isDone === false);
    setTodoItem(uncompletedItems);
  }

  return (<div className={styles.wrapper}>

    <header className={styles.header}>
      <h1 className={styles.title}>Список моих дел</h1>
      <div className={styles.filters} >
        <button
          type="button"
          className={styles.filterBtn}
          onClick={onClickCompleted}
          >
          Завершенные 
          <span>{completedItems.length}</span>
        </button>
        <button
          type="button"
          className={styles.filterBtn}
          onClick={onClickUncompleted}
        >
          Незавершенные
          <span>{uncompletedItems.length}</span>
        </button>
        <button
          type="button"
          className={styles.filterBtn}
        >
          Все
        </button>
      </div>
      
    </header>

      
    {(count === 0) ? <img className={styles.pic} src={addTaskPic} width="321" height="233" alt="нет дел" />
      : <ItemList
        items={todoItem}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
    />
    }
    
    <InputItem onClickAdd={onClickAdd} />
      
  </div>
  );
}

export default Todo;
