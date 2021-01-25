import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
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

  useEffect(() => {
    console.log("update");
  });

  useEffect(() => {
    console.log("mount");
  }, []);

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

  return (<div className={styles.wrapper}>
      <h1 className={styles.title}>Список задач</h1>
      
    <InputItem onClickAdd={onClickAdd} />
      <ItemList
        items={todoItem}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
    <Footer count={count} />
      
  </div>
  );
}

export default App;
