import React from 'react';
import styles from './InputItem.module.css';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';


class InputItem extends React.Component {
  state = {
    inputValue: '',
    helperText: '',
    isError: false,
    isDouble: false
  };

  onChangeInputItem = (event) => {

    this.setState({
      inputValue: event.target.value,
      isError: (
        this.state.isError && this.valueCheck(this.state.inputValue) && this.valueCheckDouble(this.state.isDouble)
      ),
      helperText: !(this.state.isError &&
        this.valueCheck(this.state.inputValue) ? '' : 'Введите текст'
      )
    })
  };

  valueCheck = (value) => {
    
    if (value === '') {
        return false;
      } else {
        return true;
      }
  };

  valueCheckDouble = (value) => {

    let result;

    if (this.props.items.length === 0) return true;

    this.props.items.find(item => {
      
      if (item.value === value) {
        result = true;
      } else {
        result = false;
      }
      return result;
    });

    if (result) {
        return false;
      } else {
        return true;
      }
  };


  onButtonClick = () => {
    
    if (!this.valueCheck(this.state.inputValue)) {
      this.setState({
        helperText: 'Введите текст',
        isError: true
      });
    } else if (!this.valueCheckDouble(this.state.inputValue)) {
      this.setState({
        helperText: 'Введите другой текст',
        isError: true
      });
    } else {
      this.setState({
        inputValue: ''
      });

      this.props.onClickAdd(this.state.inputValue);
    }
    
  }

  render() {
    
    return (
      <div className={styles.field}>
        <form
          onSubmit={event => event.preventDefault()}
          autoComplete="off"
          className={styles.form}
        >
          <TextField
            id="outlined-secondary"
            label="Просто введите сюда название дела..."
            
            variant="outlined"
            value={this.state.inputValue}
            onChange={(event) => this.onChangeInputItem(event)}
            helperText={this.state.helperText}
            error={this.state.isError}
          />
          <Fab
            className={styles.fabBtn}
            color="primary"
            aria-label="add"
            onClick={() => this.onButtonClick()}>
            <AddIcon />
          </Fab>
        </form>
      </div>
    );
  }
}

export default InputItem;
