import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';


const App = () => {

  const items = [
    {
      value: 'Задача № 1'
    },
    {
      value: 'Задача № 2'
    },
    {
      value: 'Задача № 3'
    }
  ];

  return (<div className="todo">
    <h1 className="todo__title">Список задач</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={5} />
  </div>
  );

};

export default App;
