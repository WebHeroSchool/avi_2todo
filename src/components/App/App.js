import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles  from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Задача № 1',
        isDone: false
      },
      {
        value: 'Задача № 2',
        isDone: false
      },
      {
        value: 'Задача № 3',
        isDone: true
      }
    ]
  };

  onClickDone = isDone => console.log(isDone);

  render() {
  
     return (<div className={styles.wrapper}>
      <h1 className={styles.title}>Список задач</h1>
      <InputItem />
      <ItemList items={this.state.items} nClickDone={this.onClickDone} />
      <Footer count={5} />
    </div>
    );
  }
}

export default App;
