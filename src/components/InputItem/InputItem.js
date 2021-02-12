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
        this.state.isError && this.valueCheck(this.state.inputValue)
      ),
      helperText: !(this.state.isError &&
        this.valueCheck(this.state.inputValue) ? '' : 'Введите текст'
      )
    })
  };

  valueCheck = (value, isDouble) => {

    this.props.items.forEach(item => {

        if (item.value === value) {
          isDouble = true;
        } else {
          isDouble = false;
        }
    });
    
    if (isDouble || value === '') {
        return false;
      } else {
        return true;
      }
  };


  onButtonClick = () => {

    if (!this.valueCheck(this.state.inputValue, this.state.isDouble)) {
      this.setState({
        helperText: 'Введите текст',
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
            color="primary"
            aria-label="add"
            variant='contained'
            onClick={() => this.onButtonClick()}>
            <AddIcon />
          </Fab>
        </form>
      </div>
    );
  }
}

export default InputItem;
