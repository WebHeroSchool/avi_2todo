import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';


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

  return (<div>
    <h1>Список</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={5} />
  </div>
  );

};

export default App;
