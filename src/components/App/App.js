import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Задача № ';

const App = () => (<div>
  <h1>Список</h1>
  <InputItem />
  <ItemList todoItem={todoItem} />
  <Footer count={5} />
</div>
);

export default App;
